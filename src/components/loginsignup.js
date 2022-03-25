export default function Signup() {
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
                                        <input className="form-control" placeholder="Your name" type="text" name="Your Name" required />
                                    </div>
                                    <br />
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Email" type="email" name="Email" pattern="[^ @]*@[^ @]*" required />
                                    </div>
                                    
                                    {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Re-type Password" type="password" name="Password" required />
                                    </div> */}
                                    <div className=" col-md-6">
                                        <input className="form-control" placeholder="Phone" type="number" name="Phone" min={0}
                                            onInput={(e) => e.target.value = e.target.value.slice(0, 10)}

                                            maxlength={10} required />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Password" type="password" name="Password" required />
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
                                        <button className="send">Submit</button>
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
                                        <input className="form-control" placeholder="Your Email" type="email" name="Email" pattern="[^ @]*@[^ @]*" required />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Password" type="password" name="Password" required />
                                    </div>
                                    <a href="#">Forgot Password</a>
                                    <div className=" col-md-12">
                                        <button className="send">Login</button>
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