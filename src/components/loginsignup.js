import { useState } from "react"
import axios from 'axios';

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(password);

    // const register_details ={
    //     email1 : email,
    //     password1 : password,
    //     name1 : name,
    //     phone1 : phone
    // }
    // console.log(register_details);

    function register(){
        // alert("kjhdhkh")
        // axios.post("https://e-shopper-backend.herokuapp.com/api/user/", {
        //     name:name,
        //     email:email,
        //     mobile_number:phone,
        //     password:password

        // })
        // .then((response) => {
        //     console.log(response);
        //     console.log("200");
        //     })
        
        // .catch(error => {
        //     console.log(error.response.data.error)
        //     })
    }
    


    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Sign Up</h2>
                            </div>
                            <form className="main_form">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Your name" type="text" name="Your Name" required onChange={(e)=>setName(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Email" type="email" name="Email" pattern="[^ @]*@[^ @]*" required onChange={(e)=>setEmail(e.target.value)} />
                                    </div>
                                    
                                    {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Re-type Password" type="password" name="Password" required />
                                    </div> */}
                                    <div className=" col-md-6">
                                        <input className="form-control" placeholder="Phone" type="number" name="Phone" min={0}
                                            onInput={(e) =>setPhone( e.target.value = e.target.value.slice(0, 10))}

                                            maxLength={10} required />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Password" type="password" name="Password" required onChange={(e)=>setPassword(e.target.value)} />
                                    </div>
                                    {/* <div className="col-md-2">
                                        <input type="radio" name="radiogroup1" id="rd1" />
                                        <label htmlFor="rd1" className="col-md-4">Male</label>
                                        <input type="radio" name="radiogroup1" id="rd2" />
                                        <label htmlFor="rd2">Female</label>
                                    </div> */}

                                    {/* <div className="col-md-6">
                                        <textarea className="textarea" placeholder="Message" defaultValue={""} />
                                    </div> */}
                                    <div className=" col-md-12">
                                        <button className="send" onClick={register}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    console.log(email);
    console.log(password);

    // const login_details = {
    //     email2 : email,
    //     password2 : password
    // }
    // console.log(login_details);

    function loginuser(){
        alert("kjhdhkh")
        axios.post("https://e-shopper-backend.herokuapp.com/api/token/", {
            email:email,
            password:password        
        })
        .then((response) => {
            console.log(response);
            console.log("working");
            })
        
        .catch(error => {
            console.log(error.response.data.error)
            })
    }


    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Login</h2>
                            </div>
                            <form className="main_form">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Your Email" type="email" name="Email" pattern="[^ @]*@[^ @]*" required onChange={(e)=>setEmail(e.target.value)} />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Password" type="password" name="Password" required onChange={(e)=>setPassword(e.target.value)} />
                                    </div>
                                    <a href="#">Forgot Password</a>
                                    <div className=" col-md-12">
                                        <button className="send" onClick={loginuser}>Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}