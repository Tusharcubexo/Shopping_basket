import star from "../assets/images/star.png"
import a from "../assets/images/a.png"
import b from "../assets/images/b.png"
import c from "../assets/images/c.png"
import d from "../assets/images/d.png"
import e from "../assets/images/e.png"
import f from "../assets/images/f.png"

export default function Allproducts() {
    return (
        <>
            <div className="brand">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Our Brand</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brand-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                <div className="brand_box">
                                    <img src={a} alt="img" />
                                    <h3>$<strong className="red">100</strong></h3>
                                    <span>Mobile Phone</span>
                                    <i><img src={star} alt='' /></i>
                                    <i><img src={star} alt=''/></i>
                                    <i><img src={star} alt=''/></i>
                                    <i><img src={star} alt=''/></i>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                <div className="brand_box">
                                    <img src={b} alt="img" />
                                    <h3>$<strong className="red">100</strong></h3>
                                    <span>Mobile Phone</span>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                <div className="brand_box">
                                    <img src={c} alt="img" />
                                    <h3>$<strong className="red">100</strong></h3>
                                    <span>Mobile Phone</span>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                <div className="brand_box">
                                    <img src={d} alt="img" />
                                    <h3>$<strong className="red">100</strong></h3>
                                    <span>Mobile Phone</span>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                                <div className="brand_box">
                                    <img src={e} alt="img" />
                                    <h3>$<strong className="red">100</strong></h3>
                                    <span>Mobile Phone</span>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                                <div className="brand_box">
                                    <img src={f} alt="img" />
                                    <h3>$<strong className="red">100</strong></h3>
                                    <span>Mobile Phone</span>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                    <i><img src={star} /></i>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <a className="read-more">See More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}