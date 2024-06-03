import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
    const [allproduct, setProduct] = useState([]); //20 array
    const [allproductfilter, setProductfilter] = useState([]); //20array
    const [allproductfilter1, setProductfilter1] = useState(""); //only show product qty
    const[search,setSearch]=useState("")

    const getData = async () => {
        try {
            let res = await axios.get("https://fakestoreapi.com/products");
            setProduct(res.data);
            setProductfilter(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    const handlefilter = () => {
        let filtervalue = allproduct.filter((ele) => ele.rating.rate > 3);
        setProductfilter(filtervalue);
        console.log(filtervalue);
    };

    const handlefilter2 = () => {
        let filtervalue = allproduct.filter((ele) => ele.rating.rate > 4);
        setProductfilter(filtervalue);
        console.log(filtervalue);
    };
    // <--------------sort---------->
    const handlefilterPrice = () => {
        let filterpricevalue = allproductfilter.filter(
            (ele) => ele.price > 100
        );
        setProductfilter(filterpricevalue);
        setProductfilter1(filterpricevalue)///qty update kiya hai
        console.log(filterpricevalue);
    };

    const handleReset = () => {
        setProductfilter(allproduct);
        setProductfilter1("")///qty reset
        setSearch("")

    };
    // <---------------for search---------->
    const handleChange = (e) => {
        setSearch(e.target.value)
handleSeacrh()
    }

    const handleSeacrh = () => {
    const searchpro = allproduct.filter((product) =>
        product.title.toLowerCase().includes(search)
    );
    setProductfilter(searchpro);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className="flex justify-between w-full px-5 py-6 shadow-md ">
                <h1 className="text-2xl">
                    Total filter Product{allproductfilter.length}
                </h1>
                <h1 className="text-2xl">
                    filter price{allproductfilter1.length}
                </h1>
                <h1 className="text-2xl">Total Product{allproduct.length}</h1>
                <button
                    onClick={handlefilter}
                    className="bg-black  p-2 rounded-md text-white">
                    rating Above 3
                </button>
                <button
                    onClick={handlefilter2}
                    className="bg-black  p-2 rounded-md text-white">
                    rating Above 4
                </button>
                <button
                    onClick={handlefilterPrice}
                    className="bg-black p-2 rounded-md text-white">
                    price above 10
                </button>
                <button
                    onClick={handleReset}
                    className="bg-black p-2 rounded-md text-white">
                    Reset
                </button>
            </div>
            <div className=" flex gap-2 mt-5 p-5 shadow-md">
                <input
                    className="border-2 border-gray-200 w-[20%]"
                    type="search"
                    placeholder="search"
                    value={search}
                    onChange={handleChange}
                />
                <button

                    className="p-1 rounded-md bg-green-300 text-black">
                    Search
                </button>
                <button
                    onClick={handleReset}
                    className="bg-black p-2 rounded-md text-white">
                    Reset
                </button>
            </div>
            <div className="grid grid-cols-5 gap-4">
                
                {allproductfilter.map((ele) => {
                    return (
                        <div className="shadow-md p-5 h-[25rem]">
                            <img
                                className="h-[50%] w-[50%] m-auto"
                                src={ele.image}
                                alt=""
                            />
                            <h1 className="text-xl text-red-600">
                                {ele.title}
                            </h1>
                            <h1 className="text-xl text-black">
                                Price:{ele.price}
                            </h1>
                            <h1 className="text-xl text-red-600">
                                {ele.rating.rate}
                            </h1>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Product;
