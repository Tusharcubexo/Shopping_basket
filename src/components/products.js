import star from "../assets/images/star.png"
import a from "../assets/images/a.png"
import b from "../assets/images/b.png"
import c from "../assets/images/c.png"
import d from "../assets/images/d.png"
import e from "../assets/images/e.png"
import f from "../assets/images/f.png"

function Product() {
    return (
        <>
            <div>
                <div classname="brand">
                    <div classname="container">
                        <div classname="row">
                            <div classname="col-md-12">
                                <div classname="titlepage">
                                    <h2>Our Brand</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div classname="brand-bg">
                        <div classname="container">
                            <div classname="row">
                                <div classname="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                    <div classname="brand_box">
                                        <img src={a} alt="img"/>
                                        <h3>$<strong classname="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                    </div>
                                </div>
                                <div classname="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                    <div classname="brand_box">
                                        <img src={b} alt="img"/>
                                        <h3>$<strong classname="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                    </div>
                                </div>
                                <div classname="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                    <div classname="brand_box">
                                        <img src={c} alt="img"/>
                                        <h3>$<strong classname="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                    </div>
                                </div>
                                <div classname="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div classname="brand_box">
                                        <img src={d} alt="img"/>
                                        <h3>$<strong classname="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                    </div>
                                </div>
                                <div classname="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                                    <div classname="brand_box">
                                        <img src={e} alt="img"/>
                                        <h3>$<strong classname="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                    </div>
                                </div>
                                <div classname="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                                    <div classname="brand_box">
                                        <img src={f} alt="img"/>
                                        <h3>$<strong classname="red">100</strong></h3>
                                        <span>Mobile Phone</span>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                        <i><img src={star}/></i>
                                    </div>
                                </div>
                                <div classname="col-md-12">
                                    <a classname="read-more">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product;