import React, { useEffect, useState } from "react";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";

const intialvalue = {
    name: "",
    password: "",
};
const Login = () => {
    const [details, setDetails] = useState(intialvalue);
    const [value, setvalue] = useState([]);
    const [updateid, setUpdateid] = useState(null);
    const [form] = Form.useForm();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((e) => ({
            ...e,
            [name]: value,
        }));
    };

    const handlesubmit = (e) => {
        if (details.name == "" && details.password == "") {
            alert("Please enter all details.");
            return;
        }
        postData();
        console.log(details);
        form.resetFields();
    };

    const postData = async () => {
        try {
            await axios.post("http://localhost:8080/studentdata", details);
            getData();
        } catch (error) {
            console.log(error);
        }
        setDetails(intialvalue)
    };

    // <--------------------------getData------------------------->
    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:8080/studentdata");
            console.log(res.data);
            setvalue(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    // <--------------------------delete Data --------------------------->
    const delData = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/studentdata/${id}`);
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    // <---------------UpdateData----------------------------->

    const updateData = (id) => {
        let selectItem = value.find((ele) => ele.id === id);
        if (selectItem) {
            setDetails(selectItem);
            setUpdateid(id);
        }
        console.log(selectItem,"up");
    };

    // <-----------------------Patch Data ---------->

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Form
                form={form}
                onFinish={handlesubmit}
                name="normal_login"
                className="login-form">
                <Form.Item name="username">
                    <Input style={{color:"red"}}
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                        name="name"
                        value={details.name}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item name="Email">
                    <Input
                        prefix={
                            <MailOutlined className="site-form-item-icon" />
                        }
                        type="Email"
                        placeholder="Email"
                        name="password"
                        value={details.password}
                        onChange={handleChange}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>

            <div className="">
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.map((ele) => {
                            return (
                                <tr key={ele.id}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.password}</td>
                                    <td className="btn">
                                        <button onClick={() => delData(ele.id)}>
                                            delete
                                        </button>
                                        <button
                                            onClick={() => updateData(ele.id)}>
                                            Update
                                        </button>
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

export default Login;
