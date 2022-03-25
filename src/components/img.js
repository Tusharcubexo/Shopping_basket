// const url = "http://localhost:3000/"
// console.log(process.env.REACT_APP_URL)
const url= process.env.REACT_APP_URL
export default function Images(props){
    
    console.log(url);
    return(
        <>
        <img data-image="red" className="active" src={url+props.pic} alt='img' />
        </>
    )

}