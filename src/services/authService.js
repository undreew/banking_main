'use client'

import useFetch from "@/utils/useFetch";
import ApiConfig from "@/config/ApiConfig";

const { apiEndpoints } = ApiConfig;

const authService = {
    login: (payload) => useFetch("POST", apiEndpoints.login, payload),
    logout: (payload) => useFetch("POST", apiEndpoints.logout, payload),
    refresh: (payload) => useFetch("POST", apiEndpoints.refresh, payload),
    register: (payload) => useFetch("POST", apiEndpoints.register, payload),
}

export default authService;