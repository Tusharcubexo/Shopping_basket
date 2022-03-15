import '../assets/css/style-pd.css';
import a from '../assets/images/a.png'
import data from "./data/products.json"

export default function Phonedetails() {
    // const [proddetails, setProddetails] = useState([]);
    // setProddetails(data.map(product => {
    //     console.log(proddetails)
    // }))

    return (
        <>
            <main className="containerss">
                {/* Left Column / Headphones Image */}
                <div className="left-column">
                    <img data-image="black" src={a} alt />
                    <img data-image="blue" src="images/blue.png" alt />
                    <img data-image="red" className="active" src={a} alt />
                </div>
                {/* Right Column */}
                <div className="right-column">
                    {/* Product Description */}
                    <div className="product-description">
                        <span>Smart Phones</span>
                        <h1>Beats EP</h1>
                        <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
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
                        <span>148$</span>
                        <a href="#" className="cart-btn">Add to cart</a>
                    </div>
                </div>
            </main>


        </>
    )
};