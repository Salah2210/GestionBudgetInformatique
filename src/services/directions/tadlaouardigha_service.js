import http from "../../services/http-commn";

export const getAllTadlaOuardighas=async()=>{
    return await http.get("/tadlaouardigha")
}

export const getTadlaOuardighaById=async(id)=>{
    return await http.get(`/tadlaouardigha/${id}`)
}

export const deleteTadlaOuardigha =async(id)=>{
    return await http.delete(`/tadlaouardigha/${id}`)
}

export const addTadlaOuardigha =async(tadlaouardigha)=>{
    return await http.post("/tadlaouardigha",tadlaouardigha)
}

export const updateTadlaOuardigha =async(tadlaouardigha)=>{
    return await http.put(`/tadlaouardigha/${tadlaouardigha.id}`,tadlaouardigha)
}