import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
const [loading,setLoading]=useState(true)
    const [product, setProduct] = useState([]);
  const [allproduct, setAllproduct] = useState([]);
  const[filter,setFilter]=useState("")
    const [total, settotal] = useState("");
    const [search, setSearch] = useState("");
    // <------------------------------get data ------------->
    const getData = async () => {
        try {
            let res = await axios.get("https://fakestoreapi.com/products");
            console.log(res.data);
            setProduct(res.data);
            setAllproduct(res.data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };
    // <--------------------search data above rating 4 -------------->
    const searchrating = () => {
        let ratingproduct = product.filter((ele) => ele.rating.rate > 4);
        setAllproduct(ratingproduct);
      console.log(ratingproduct);
      setFilter(ratingproduct)
    };

    // <----------------searchdata above price 500 -------------->
    const priceSearch = () => {
        let searchprice = allproduct.filter((ele) => ele.price > 500);
        setAllproduct(searchprice);
        settotal(searchprice);
        console.log(searchprice);
    };
    // < ----------------------- Serch by title value --------- >
    const handleSeacrh = () => {

            let searchValue = product.filter((ele) =>
                ele.title.toLowerCase().includes(search)
            );
            setAllproduct(searchValue);

    };


  const handleChange = (e) => {
      setSearch(e.target.value);
      if (e.target.value === "") {
          setAllproduct(product);
      } else {
          handleSeacrh();
      }
  };
    // <--------------------reset data -------->
    const resetdata = () => {
        setAllproduct(product);
      setFilter("")
      settotal("");

    };



    useEffect(() => {
        getData();
    }, []);




    return (
        <>
            <div className="total_item">
                <button>Total Item = {product.length}</button>
                <button>Filter by rating = {filter.length}</button>
                <button>Filter Price Item = {total.length}</button>

            </div>
            <div className="container">
                <div className="btn_div">
                    <button onClick={searchrating}>Filter by Rating</button>
                    <button onClick={priceSearch}>filter by price</button>
                    <button onClick={resetdata}>resetdata</button>

                    <input
                        value={search}
                        className="border-2 border-gray-600 search"
                        type=""
                        placeholder="search"
                        onChange={handleChange}
                    />
                    <button onClick={handleSeacrh}>Search</button>
                </div>

                <div className="main_div">
                {loading?(<h1>Loading...............</h1>) :(   allproduct.map((ele) => {
                        return (
                            <div key={ele.id} className="map_div">
                                <div>
                                    <img src={ele.image} alt="" />
                                </div>
                                <div className="bg-black">
                                    <h3 className="text-red-600">
                                        {ele.title.slice(0, 20) + "....."}
                                    </h3>
                                </div>
                                <div>
                                    <h4>Price {ele.price}</h4>
                                    <h5>Rating : {ele.rating.rate}</h5>
                                </div>
                            </div>
                        );
                    }))}
                </div>
            </div>
        </>
    );
};

export default Product;
