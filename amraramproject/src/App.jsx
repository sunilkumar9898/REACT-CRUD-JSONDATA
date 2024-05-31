import "./App.css";
// import './image'
import logo from './image/logo2.png'
import { useForm } from "react-hook-form";
import { TEInput, TERipple } from "tw-elements-react";

function App() {
    // const { register, handleSubmit, errors } = useForm();

    //   const onSubmit = (data) => {
    //       console.log(data);
    //   };

    return (
        <>
            <div className="container">
                <form action="" className="form">
                    <h1>Login</h1>
        <img src={logo} alt="" />
                    <p className="text">Login Your Account With Phone Ans Password </p>
                    <div className="form-input">
                        <input type="text" placeholder="Enter Mobile Number " />
                        <label for="video-url">Enter mobile number</label>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Password" />
                        <label for="subtitle">Password</label>
                    </div>
                    <p>
                        पासवर्ड भूलने का कोई विकल्प नहीं है इसलिए पासवर्ड याद
                        रखें There is no option to forget the password , so
                        remember the password .
                    </p>
                    <div className="terms">
                        <input type="checkbox" />
                        <p>I accept terms and conditions </p>
                    </div>

                    <div className="btn">
                        <button type="submit">Login/Register</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;
