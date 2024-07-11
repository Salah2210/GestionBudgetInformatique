import http from "../../services/http-commn";

export const getAllSaleGharbs=async()=>{
    return await http.get("/salegharb")
}

export const getSaleGharbById=async(id)=>{
    return await http.get(`/salegharb/${id}`)
}

export const deleteSaleGharb =async(id)=>{
    return await http.delete(`/salegharb/${id}`)
}

export const addSaleGharb =async(salegharb)=>{
    return await http.post("/salegharb",salegharb)
}

export const updateSaleGharb =async(salegharb)=>{
    return await http.put(`/salegharb/${salegharb.id}`,salegharb)
}