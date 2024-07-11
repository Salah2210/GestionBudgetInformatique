import http from "../../services/http-commn";

export const getAllHaouzs=async()=>{
    return await http.get("/haouz")
}

export const getHaouzById=async(id)=>{
    return await http.get(`/haouz/${id}`)
}

export const deleteHaouz =async(id)=>{
    return await http.delete(`/haouz/${id}`)
}

export const addHaouz =async(haouz)=>{
    return await http.post("/haouz",haouz)
}

export const updateHaouz =async(haouz)=>{
    return await http.put(`/haouz/${haouz.id}`,haouz)
}