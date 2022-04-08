import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Short() {
    const [data, setData] = useState([])
    const [sortType, setSortType] = useState("")
    // var data = [];

    useEffect(async () => {
       await  axios.get("https://retoolapi.dev/tg9mwK/data")
            .then((res) => {
                console.log(res);
                setData(res.data);
                console.log(data);
            })
    },[])

    const sortThe = (val) =>{
        var toBeSort =data;
        const datas = toBeSort.sort((a, b) => a.Price > b.Price);
        setData(datas)
        // console.log("DDDDDDDDDDDDDDDDDDDDDDDDD???????????")
        console.log(sortType)
        console.log(data)

    }

    useEffect(()=>{
       sortThe();
    },[sortType]);

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
            <div>
                <label htmlFor="sort">Short by-:</label>
                <select name="valee" id="dataa" onChange={(e) =>{  sortThe();}}>
                    <option value="First name">First name</option>
                    <option value="Last name">Last name</option>
                    <option value="Status">Status</option>
                    <option value="payment status">payment status</option>
                    <option value="start date">start date</option>
                    <option value="End Date">End Date</option>
                    <option value="Price">Price</option>
                </select>
                {console.log(sortType)}
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