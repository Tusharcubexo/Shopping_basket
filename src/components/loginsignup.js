import { useState } from "react"
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    // console.log(navigate);

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
    toast.configure()
    function register(e){
        e.preventDefault();
        setEmail("");
        setPassword("");
        setName("");
        setPhone("");
        
        // alert("kjhdhkh")
        axios.post("https://e-shopper-backend.herokuapp.com/api/user/", {
            name:name,
            email:email,
            mobile_number:phone,
            password:password

        })
        .then((response) => {
            console.log(response);
            console.log("200");
            toast.success("Welcome",{
                position: "bottom-right",
                autoClose: 3000
                });

            navigate('/login')

            })
        
        .catch(error => {
            toast.error("Please enter valid input ",{
                position: "bottom-right", autoClose:3000
                });
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
                                <h2>Sign Up</h2>
                            </div>
                            <form className="main_form">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Your name" type="text" value={name} name="Your Name" required onChange={(e)=>setName(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Email" type="email" value={email} name="Email" pattern="[^ @]*@[^ @]*" required onChange={(e)=>setEmail(e.target.value)} />
                                    </div>
                                    
                                    {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Re-type Password" type="password" name="Password" required />
                                    </div> */}
                                    <div className=" col-md-6">
                                        <input className="form-control" placeholder="Phone" type="number" value={phone} name="Phone" min={0}
                                            onInput={(e) =>setPhone( e.target.value = e.target.value.slice(0, 10))}

                                            maxLength={10} required />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Password" type="password" value={password} name="Password" required onChange={(e)=>setPassword(e.target.value)} />
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
    const navigate = useNavigate();

    // console.log(navigate);
    

    console.log(email);
    console.log(password);

    // const login_details = {
    //     email2 : email,
    //     password2 : password
    // }
    // console.log(login_details);

    toast.configure()
    function loginuser(e){
        e.preventDefault();
        setEmail("");
        setPassword("");

        // runbaseApi("post", "token/", {
        //     data: login_details, 
        // });
        
        axios.post("https://e-shopper-backend.herokuapp.com/api/token/", {
            email:email,
            password:password
            // data:login_details
        })
        .then((response) => {    
            console.log(response);
            toast.success("Welcome",{
                position: "bottom-right",
                autoClose: 3000
                });

            navigate('/')

            }) 
        .catch(error => {   
            console.log(error.response.data.error)
            toast.error("Worng Email or password",{
                position: "bottom-right", autoClose:3000
                });
            })
        
        // toast.info('🦄 Wow so easy!', {
        //     position: "bottom-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     });
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
                                        <input className="form-control" placeholder="Your Email" type="email" value={email} name="Email" pattern="[^ @]*@[^ @]*" required onChange={(e)=>setEmail(e.target.value)} />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Password" type="password" value={password} name="Password" required onChange={(e)=>setPassword(e.target.value)} />
                                    </div>
                                    <div>Forgot Password</div>
                                    <div className=" col-md-12">
                                        <button className="send"  onClick={loginuser}>Login</button>
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