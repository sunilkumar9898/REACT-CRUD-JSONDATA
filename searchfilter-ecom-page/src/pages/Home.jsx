import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
const intialvalue = {
    name: "",
    email: "",
};
const Home = () => {
  const userimg = {
      image: "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };


    const [details, setDetails] = useState(intialvalue);
  const [value, setValue] = useState([]);
  const[selectid,setSelectid] = useState(null)

    const handelchange = (e) => {
        const { name, value } = e.target;
        setDetails((e) => ({
            ...e,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (details.name == "" || details.email == "") {
        alert("please fill up all field")
        return
      }
      if (selectid) {
        patchData(selectid)
      } else {
        postdata()
      }
        setDetails(intialvalue);
    };

    // <------------------------function post data -------------->

    const postdata = async () => {
        try {
            let res = await axios.post("http://localhost:8080/data", details);
            getData()
        } catch (error) {
            console.log(error);
        }
    };

    // <------------------------- Function for get data ------------------------->

    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:8080/data");
            setValue(res.data);
          } catch (error) {
            console.log(error);
          }
  };

  // <-------------------delete Data ------------->.

  const deleteData = async(id) => {
  try {
    await axios.delete(`http://localhost:8080/data/${id}`);
    getData()
  } catch (error) {
console.log(error);
  }
  }
  // <------------------------function for update Data --------------------->

  const updateData = (id) => {
    let selectItem = value.find((ele) => ele.id === id)
    if (selectItem) {
      setDetails(selectItem)
      setSelectid(id)
    }
    console.log(selectItem);

  }

  // <-------------------------- Patch Data -------------------------->

  const patchData = async(id) => {
    try {
      await axios.patch(`http://localhost:8080/data/${id}`, details);
      getData()
    } catch (error) {
      console.log(error);
    }
        setDetails(intialvalue);
        setSelectid(null);
  }

  useEffect(() => {
      getData();
  },[])
  return (
      <>
          <div>
              <form action="" className="form">
          <h1>WelCome</h1>
          <div className="img"><img src={userimg.image} alt="" /></div>
                  <label htmlFor="name">Name</label>
                  <input
                      onChange={handelchange}
                      name="name"
                      value={details.name}
                      type="text"
                      placeholder="User Name"
                  />
                  <label className="email" htmlFor="email">Email</label>
                  <input
                      onChange={handelchange}
                      name="email"
                      value={details.email}
                      type="text"
                      placeholder="Emil"
                  />

          <button onClick={handleSubmit}>{selectid ?"update":"submit" }</button>
              </form>
      </div>


      <div className="table">
        <table border={1}>
          <thead>
            <tr>
              <th>Srno</th>
              <th>name</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {value.map((ele) => {
              return (
                  <tr key={ele.id}>
                      <td>{ele.id}</td>
                      <td>{ele.name}</td>
                      <td>{ele.email}</td>
                      <td>
                          <button onClick={() => deleteData(ele.id)}>delete</button>
                          <button onClick={()=>updateData(ele.id)}>update</button>
                      </td>
                  </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </>
  );
};

export default Home;
