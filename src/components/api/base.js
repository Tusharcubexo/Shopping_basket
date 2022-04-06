import axios from "axios";
// const baseurl= process.env.REACT_APP_URL
const baseurl = "https://e-shopper-backend.herokuapp.com/api/"

export async function loginApi(method, url, data){
    var config = {
        method: method,
        url: baseurl + url,
        data: data,
      };
    console.log(config);


    axios(config)
    .then((response) => {    
        console.log(response);
        

    })
    .catch(error => {   
        console.log(error.response.data.error)
        })

}