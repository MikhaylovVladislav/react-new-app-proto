import React from "react";
import * as axios from "axios";

let instance =axios.default.create({
    withCredentials: true,
    headers: {"API-KEY": "92b73b48-65df-4bb9-9263-163693cf0d8a"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const UsersAPI ={
    getUsers: (currentPage, pageSize)=> instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(data => data.data),
    getUserById: (userId)=> instance.get(`profile/${userId}`)
        .then(data=> data.data)
}

export const UserFollowAPI ={
    follow: (userId)=> instance.post(`follow/${userId}`)
        .then(data => {if(data.resultCode===0){ return data.data}}),
    unFollow: (userId)=> instance.delete(`follow/${userId}`)
        .then(data => {if(data.resultCode===0){ return data.data}})
}

export const AuthAPI = {
    auth: ()=> instance.get(`auth/me`)
        .then(data=>{ if(data.data.resultCode===0){return data.data.data}})

}

