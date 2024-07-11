import http from "../../services/http-commn";

export const getAllCasaSuds=async()=>{
    return await http.get("/casasud")
}

export const getCasaSudById=async(id)=>{
    return await http.get(`/casasud/${id}`)
}

export const deleteCasaSud =async(id)=>{
    return await http.delete(`/casasud/${id}`)
}

export const addCasaSud =async(casasud)=>{
    return await http.post("/casasud",casasud)
}

export const updateCasaSud =async(casasud)=>{
    return await http.put(`/casasud/${casasud.id}`,casasud)
}