import axios from "axios"

let postUrl = "https://dummyjson.com/auth/login"

export const postUser = async(credentials) => {
    const request = await axios.post(postUrl, credentials)

    return request
} 

