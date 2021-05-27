import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4e536f42-e2a1-4856-99e0-638b4ee81dad'
    }
})

export const userAPI = {
    getUsers(currentPage, usersPage) {
        return instance.get(`users?page=${currentPage}&count=${usersPage}`).then(res => res.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(res => res.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(res => res.data)
    },
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(res => res.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status, userId) {
        return instance.put(`profile/status${userId}`, {
            status: status
        })
    }
}
export const headerAPI = {
    getUserAuth() {
        return instance.get(`auth/me`).then(res => res.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

