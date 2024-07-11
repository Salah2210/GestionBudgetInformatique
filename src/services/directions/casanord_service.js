import http from "../../services/http-commn";

export const getAllCasaNords=async()=>{
    return await http.get("/casanord")
}

export const getCasaNordById=async(id)=>{
    return await http.get(`/casanord/${id}`)
}

export const deleteCasaNord =async(id)=>{
    return await http.delete(`/casanord/${id}`)
}

export const addCasaNord =async(casanord)=>{
    return await http.post("/casanord",casanord)
}

export const updateCasaNord =async(casanord)=>{
    return await http.put(`/casanord/${casanord.id}`,casanord)
}