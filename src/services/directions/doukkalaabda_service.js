import http from "../../services/http-commn";

export const getAllDoukkalaAbdas=async()=>{
    return await http.get("/doukkalaabda")
}

export const getDoukkalaAbdaById=async(id)=>{
    return await http.get(`/doukkalaabda/${id}`)
}

export const deleteDoukkalaAbda =async(id)=>{
    return await http.delete(`/doukkalaabda/${id}`)
}

export const addDoukkalaAbda =async(doukkalaabda)=>{
    return await http.post("/doukkalaabda",doukkalaabda)
}

export const updateDoukkalaAbda =async(doukkalaabda)=>{
    return await http.put(`/doukkalaabda/${doukkalaabda.id}`,doukkalaabda)
}