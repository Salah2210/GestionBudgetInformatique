import http from "../../services/http-commn";

export const getAllRabatTemaras=async()=>{
    return await http.get("/rabattemara")
}

export const getRabatTemaraById=async(id)=>{
    return await http.get(`/rabattemara/${id}`)
}

export const deleteRabatTemara =async(id)=>{
    return await http.delete(`/rabattemara/${id}`)
}

export const addRabatTemara =async(rabattemara)=>{
    return await http.post("/rabattemara",rabattemara)
}

export const updateRabatTemara =async(rabattemara)=>{
    return await http.put(`/rabattemara/${rabattemara.id}`,rabattemara)
}