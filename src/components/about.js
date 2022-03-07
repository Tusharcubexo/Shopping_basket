import about from "../assets/images/about.png"

function Aboutus() {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
                            <div className="about_img">
                                <figure><img src={about} alt="img" /></figure>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
                            <div className="about_box">
                                <h3>About Us</h3>
                                <span>Our Mobile Shop</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of It is a long established fact that a reader will be distracted by the </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Aboutus;