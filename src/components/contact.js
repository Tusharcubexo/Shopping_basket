function Contactus() {
    return (
        <>
            <div>
                <div classname="contact">
                    <div classname="container">
                        <div classname="row">
                            <div classname="col-md-12">
                                <div classname="titlepage">
                                    <h2>Contact us</h2>
                                </div>
                                <form classname="main_form">
                                    <div classname="row">
                                        <div classname="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <input classname="form-control" placeholder="Your name" type="text"
                                                   name="Your Name"/>
                                        </div>
                                        <div classname="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <input classname="form-control" placeholder="Email" type="text"
                                                   name="Email"/>
                                        </div>
                                        <div classname=" col-md-12">
                                            <input classname="form-control" placeholder="Phone" type="text"
                                                   name="Phone"/>
                                        </div>
                                        <div classname="col-md-12">
                                            <textarea classname="textarea" placeholder="Message" defaultValue={""}/>
                                        </div>
                                        <div classname=" col-md-12">
                                            <button classname="send">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contactus;