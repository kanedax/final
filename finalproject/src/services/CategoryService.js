import httpServices from "./httpServices"

export const getCategoryService = (id=null)=>{
    return httpServices(`/admin/categories${id ? `?parent=${id}` : ""}`, 'get');
}