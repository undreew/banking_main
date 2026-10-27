"use client";

import fetch from "@/utils/fetch";
import ApiConfig from "@/config/ApiConfig";

const { apiEndpoints } = ApiConfig;

// No token ever appears in a response body. Login, refresh and session all return the same
// SessionResponse: { user, sessionId, accessExpiresAt, refreshExpiresAt }.
const authService = {
    session: () => fetch("GET", apiEndpoints.session),
    refresh: () => fetch("POST", apiEndpoints.refresh),
    login: (payload) => fetch("POST", apiEndpoints.login, payload),
    logout: () => fetch("POST", apiEndpoints.logout),
    logoutAll: () => fetch("POST", apiEndpoints.logoutAll),
    register: (payload) => fetch("POST", apiEndpoints.register, payload),
};

export default authService;