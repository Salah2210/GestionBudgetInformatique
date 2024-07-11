import http from "../../services/http-commn";

export const getAllNords=async()=>{
    return await http.get("/nord")
}

export const getNordById=async(id)=>{
    return await http.get(`/nord/${id}`)
}

export const deleteNord =async(id)=>{
    return await http.delete(`/nord/${id}`)
}

export const addNord =async(nord)=>{
    return await http.post("/nord",nord)
}

export const updateNord =async(nord)=>{
    return await http.put(`/nord/${nord.id}`,nord)
}