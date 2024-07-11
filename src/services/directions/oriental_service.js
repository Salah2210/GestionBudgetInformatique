import http from "../../services/http-commn";

export const getAllOrientals=async()=>{
    return await http.get("/oriental")
}

export const getOrientalById=async(id)=>{
    return await http.get(`/oriental/${id}`)
}

export const deleteOriental =async(id)=>{
    return await http.delete(`/oriental/${id}`)
}

export const addOriental =async(oriental)=>{
    return await http.post("/oriental",oriental)
}

export const updateOriental =async(oriental)=>{
    return await http.put(`/oriental/${oriental.id}`,oriental)
}