import baseApi from "./base"


export async function runPostApi(url, data) {
    console.log("working");
    const result = await baseApi("post", url, data);
    console.log("data pass in base api");
    return result;
}

export async function runGetApi(url, data) {
    console.log("working");
    const result = await baseApi("get", url, data);
    return result;
}

export async function runDeleteApi(url, data) {
    console.log("working");
    const result = await baseApi("delete", url, data);
    return result;
}