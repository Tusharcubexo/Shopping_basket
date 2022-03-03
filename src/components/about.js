import about from "../assets/images/about.png"

function Aboutus() {
    return (
        <>
            <div>
                <div classname="about">
                    <div classname="container">
                        <div classname="row">
                            <div classname="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
                                <div classname="about_img">
                                    <figure><img src={about} alt="img"/></figure>
                                </div>
                            </div>
                            <div classname="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
                                <div classname="about_box">
                                    <h3>About Us</h3>
                                    <span>Our Mobile Shop</span>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of It is a long
                                        established fact that a reader will be distracted by the readable content of a
                                        page when looking at its layout. The point of It is a long established fact that
                                        a reader will be distracted by the </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Aboutus;