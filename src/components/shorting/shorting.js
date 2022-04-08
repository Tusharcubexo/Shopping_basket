import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Short() {
    const [data, setData] = useState([])
    const [sortType, setSortType] = useState("")
    const [statusType, setStatusType] = useState("")
    const [paymentstatusType, setPaymentStatusType] = useState("")
 
    useEffect(async () => {
        await axios.get("https://retoolapi.dev/tg9mwK/data")
            .then((res) => {
                console.log(res);
                setData(res.data);
                console.log(data);
            })
    }, [])

    const sortThe = (valu, status_t) => {
        var toBeSort = [].concat(data).filter(task=>task.Status==status_t)
        console.log(toBeSort);
        setData(toBeSort);
       
        
        console.log(data);

        // data.filter()
        // const datas = data.sort((a, b) => a[data] > b[data])
        // setData(datas)
        // console.log(data)
        // console.log(datas)
    }

    useEffect(() => {
        sortThe(sortType, statusType );
    }, [sortType, statusType]);


    // let newdata = data;

    // function sortValue() {
    //     if (sortType !== null) {
    //         if (sortType === "Price") {
    //            return data.sort((a, b) => a.Price > b.Price)
    //         }
    //     }
    //     console.log("working");

    // }
    // sortValue()
    // data.sort((a, b) => a.name > b.name).map



    return (
        <>
            <br />
            <div>
                <label htmlFor="sort">Short by-:</label>
                <select name="valee" id="dataa" onChange={(e) => setSortType(e.target.value)}>
                    <option value="First Name">First Name</option>
                    <option value="Last Name">Last Name</option>
                    <option value="Price">Price</option>
                </select>
                {console.log(sortType)}

                <label htmlFor="sort" style={{ marginLeft: "50px" }}> Status-: </label>
                <select name="status" id="status" onChange={(e) => setStatusType(e.target.value)} >
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="At Warehouse">At Warehouse</option>
                    <option value="On Delivery Vehicle">On Delivery Vehicle</option>
                    {console.log(statusType)}
                </select>

                <label htmlFor="sort" style={{ marginLeft: "50px" }}>Payment Status-: </label>
                <select name="payment" id="payment" onChange={(e) => setPaymentStatusType(e.target.value)} >
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                    <option value="Invoice">Invoice</option>
                    {console.log(paymentstatusType)}
                </select>
            </div>

            <br />


            <table style={{
                border: "1px solid orange",
                padding: "10px",
                textAlign: "center"
            }}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>price</th>
                        <th>status</th>
                        <th>End Date</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>payment status</th>
                        <th>start date</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((vale) => {
                        return (
                            <tr>
                                <td>{vale.id}</td>
                                <td>{vale.Price}</td>
                                <td>{vale.Status}</td>
                                <td>{vale["End Date"]}</td>
                                <td>{vale["First Name"]}</td>
                                <td>{vale["Last Name"]}</td>
                                <td>{vale["Payment status"]}</td>
                                <td>{vale["Start Date"]}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>


        </>
    )
}