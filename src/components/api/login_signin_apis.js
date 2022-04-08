import { runPostApi, runGetapi } from "./api";

export async function login(data){
    runPostApi("token/", data);
    console.log("data is passed in post api");
}