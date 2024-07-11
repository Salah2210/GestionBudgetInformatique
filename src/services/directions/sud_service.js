import http from "../../services/http-commn";

export const getAllSuds=async()=>{
    return await http.get("/sud")
}

export const getSudById=async(id)=>{
    return await http.get(`/sud/${id}`)
}

export const deleteSud =async(id)=>{
    return await http.delete(`/sud/${id}`)
}

export const addSud =async(sud)=>{
    return await http.post("/sud",sud)
}

export const updateSud =async(sud)=>{
    return await http.put(`/sud/${sud.id}`,sud)
}