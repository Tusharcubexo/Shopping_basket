import { contains } from 'jquery';
import { useParams } from 'react-router-dom';
import '../assets/css/style-pd.css';
import data from "./data/products.json"
import Images from './img';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/fontawesome-free-solid'

export default function Phonedetails() {
    // const [proddetails, setProddetails] = useState([]);
    // setProddetails(data.map(product => {
    // console.log(proddetails)
    // }))
    const { productid } = useParams()
    // toString(productid)
    console.log(typeof (productid));
    console.log(productid);

    // console.log(data.products.map(vale=>{
    //     return vale.name
    // }))
    // function pId() {
    //     data.products.map(vale => {
    //         if (vale.id == productid) {
    //             console.log(vale.id);
    //             console.log(productid);
    //         }
    //     })
    // }
    // pId();


    return (
        <>
            <main className="containerss">
                {/* Left Column / Headphones Image */}
                {
                    data.products
                        .filter(vale => vale.id == productid)
                        .map(vale => {

                            return (
                                <>
                                    <div className="left-column">
                                        <Images pic={vale.img} />
                                        {/* <img data-image="red" className="active" src={vale.img} alt='img' /> */}
                                    </div>
                                    {/* Right Column */}
                                    <div className="right-column">
                                        {/* Product Description */}
                                        <div className="product-description">
                                            <span>Smart Phones</span>
                                            <h1>{vale.name}</h1>
                                            <p>{vale.details}</p>
                                        </div>
                                        {/* Product Configuration */}
                                        <div className="product-configuration">
                                            {/* Product Color */}
                                            {/* <div className="product-color">
                            <span>Color</span>
                            <div className="color-choose">
                                <div>
                                    <input data-image="red" type="radio" id="red" name="color" defaultValue="red" defaultChecked />
                                    <label htmlFor="red"><span /></label>
                                </div>
                                <div>
                                    <input data-image="blue" type="radio" id="blue" name="color" defaultValue="blue" />
                                    <label htmlFor="blue"><span /></label>
                                </div>
                                <div>
                                    <input data-image="black" type="radio" id="black" name="color" defaultValue="black" />
                                    <label htmlFor="black"><span /></label>
                                </div>
                            </div>
                        </div> */}
                                            {/* Cable Configuration */}
                                            <div className="cable-config">
                                                <span>Cable configuration</span>
                                                <div className="cable-choose">
                                                    <button>Straight</button>
                                                    <button>Coiled</button>
                                                    <button>Long-coiled</button>
                                                </div>
                                                <a href="#">How to configurate your headphones</a>
                                            </div>
                                        </div>
                                        {/* Product Pricing */}
                                        <div className="product-price">
                                            <span>
                                                <FontAwesomeIcon icon="rupee-sign" size="8px" />
                                                {vale.prize}</span>
                                            <a href="#" className="cart-btn">Add to cart</a>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                }
            </main>


        </>
    )
};