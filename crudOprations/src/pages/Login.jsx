import React, { useEffect, useState } from "react";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axios from "axios";

const initialvalue = {
    name: "",
    email: "",
};

const Login = () => {
    const [details, setDetails] = useState(initialvalue);
    const [value, setValue] = useState([]);
    const [updateid, setUpdateid] = useState(null);
    const [form] = Form.useForm();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlesubmit = () => {

        if (updateid) {

            updatePostData(updateid);
        } else {
                postData();
        }
        form.resetFields();
    };

    const postData = async () => {
        try {
            await axios.post("http://localhost:8080/studentdata", details);
            getData();
        } catch (error) {
            console.log(error);
        }
        setDetails(initialvalue);
    };

    const updatePostData = async () => {
        try {
            await axios.patch(
                `http://localhost:8080/studentdata/${updateid}`,
                details
            );
            getData();
        } catch (error) {
            console.log(error);
        }
        setDetails(initialvalue);
        setUpdateid(null);
    };

    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:8080/studentdata");
            console.log(res.data);
            setValue(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const delData = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/studentdata/${id}`);
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    const updateData = (id) => {
        let selectItem = value.find((ele) => ele.id === id);
        if (selectItem) {
            setDetails(selectItem);
            form.setFieldsValue({
                name: selectItem.name,
                email: selectItem.email,
            });
            setUpdateid(id);
        }
    };

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
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}>
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                        name="name"
                        value={details.name}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: "Please input your email!" },
                    ]}>
                    <Input
                        prefix={
                            <MailOutlined className="site-form-item-icon" />
                        }
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={details.email}
                        onChange={handleChange}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button">
                        {updateid === null ? "Log in" : "Update"}
                    </Button>
                </Form.Item>
            </Form>

            <div className="">
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.map((ele) => (
                            <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td className="btn">
                                    <button onClick={() => delData(ele.id)}>
                                        delete
                                    </button>
                                    <button onClick={() => updateData(ele.id)}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Login;
