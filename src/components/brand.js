
import data from "./data/products.json"

export default function Product() {
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
                            {
                                data.products.map(product => {
                                    console.log(product);
                                    return (
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">

                                            <div className="brand_box">
                                                <img src={product.src} alt="img" />
                                                <p></p>
                                                <span style={{fontSize:"20px"}}>{product.name}</span>
                                                <h3><strong className="red">&#8377;{product.prize}</strong></h3>
                                                
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                <div className="brand_box">
                                    {
                                        data.products.map(product => product.name)
                                    }
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                <div className="brand_box">

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                                <div className="brand_box">

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                <div className="brand_box">

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                                <div className="brand_box">

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                                <div className="brand_box">

                                </div>
                            </div> */}
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
