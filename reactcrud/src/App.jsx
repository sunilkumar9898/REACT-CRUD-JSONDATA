import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


const initailValue = {
    name: "",
    email: "",
};

function App() {
    const [details, setDetails] = useState(initailValue);
    const [value, setValue] = useState([])
    const[selectid, setSelectid] = useState(null)

    const handlechange = (e) => {
        const { name, value } = e.target;
        setDetails((e) => ({
            ...e,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        if (selectid) {
            patchData(selectid)
        } else {
            postData()
        }
        setDetails(initailValue)
    };

    // <-----------------------POST DATA -------------------->

    const postData = async () => {
        if (details.name == "" && details.email == "") {
            alert("please Fill up Details")
            return
        }
        try {
            let res = await axios.post("http://localhost:3000/data", details);
            getData()
        } catch (error) {
            console.log(error);
        }
    };

    // <--------------------------GET DATA -------------------------------->

    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:3000/data");
            setValue(res.data)

        } catch (error) {
            console.log(error);
        }
    };


    // <------------------Update Data -------------------->

    const UpdateData = (id) => {
        let selectItem = value.find((ele) => ele.id === id);
        console.log(selectItem);
        if (selectItem) {
            setDetails(selectItem)
            setSelectid(id)
        }
    }

    const deldata = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/data/${id}`);
            getData();
        } catch (error) {
            console.log(error);
        }

    };

    const patchData = async(id) => {
        try {
            await axios.patch(`http://localhost:3000/data/${id}`, details);
            getData()
        } catch (error) {
            console.log(error);
        }
        setDetails(initailValue)
        setSelectid(null)
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className="container">
                <form action="">
                    <h1>Login</h1>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            required
                            value={details.name}
                            name="name"
                            onChange={handlechange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={details.email}
                            name="email"
                            onChange={handlechange}
                        />
                    </div>
                    <button type="submit" onClick={handleSubmit}>
                        {selectid ? "UPDATE" : "SUBMIT"}
                    </button>
                </form>
            </div>

            <div className="table">
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.map((ele, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td className="btn">
                                        <button
                                            onClick={() => {
                                                UpdateData(ele.id);
                                            }}>
                                            edit
                                        </button>
                                        <button onClick={() => deldata(ele.id)}>
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
