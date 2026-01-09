import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://695f7c1c7f037703a813dc90.mockapi.io/",
        prepareHeaders:(headers)=>{
            if(typeof window  === "undefined") return headers;
            const token = localStorage.getItem("acsess_token")
            if(token)
            {
                headers.set("Authorization",`Bearer ${token}`)
            }
            return headers;
        }
    }),
    tagTypes:["getTasks"],
    endpoints:()=>({})
})



