'use client'

import fetch from "@/utils/fetch";
import ApiConfig from "@/config/ApiConfig";

const { apiEndpoints } = ApiConfig;

const authService = {
    refresh: () => fetch("POST", apiEndpoints.refresh),
    currentUser: () => fetch("GET", apiEndpoints.currentUser),
    login: (payload) => fetch("POST", apiEndpoints.login, payload),
    logout: (payload) => fetch("POST", apiEndpoints.logout, payload),
    register: (payload) => fetch("POST", apiEndpoints.register, payload)
}

export default authService;