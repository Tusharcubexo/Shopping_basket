
import React from "react";
import Loader from "react-js-loader";


export default class Loadercomponent extends React.Component {
    constructor() {
        super();
        this.state = {
            isloading: true
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isloading: false });
        }, 2000);
    }
    

    render() {
        return (
            this.state.isloading ?
            <div className={"item"}>
                <Loader type="spinner-default" bgColor={"red"} color={'#FFFFFF'} size={100} />
            </div> : null
        )
    }
}