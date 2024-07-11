import http from "../../services/http-commn";

export const getAllFesMekness=async()=>{
    return await http.get("/fesmeknes")
}

export const getFesMeknesById=async(id)=>{
    return await http.get(`/fesmeknes/${id}`)
}

export const deleteFesMeknes =async(id)=>{
    return await http.delete(`/fesmeknes/${id}`)
}

export const addFesMeknes =async(fesmeknes)=>{
    return await http.post("/fesmeknes",fesmeknes)
}

export const updateFesMeknes =async(fesmeknes)=>{
    return await http.put(`/fesmeknes/${fesmeknes.id}`,fesmeknes)
}