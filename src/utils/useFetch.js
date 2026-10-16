import ky from "ky";
import { APP_API_BASE_URL } from "@/config/AppConfig";

const TIMEOUT = 50000;

const fetch = ky.create({
    prefix: APP_API_BASE_URL,
    timeout: TIMEOUT,
    headers: {
        'Content-Type': 'application/json'
    },
    hooks: {
        beforeRequest: [
            ({ request }) => {
                // set headers
                // request.headers.set('Authorization', '');
                console.log('before request', request);
            }
        ],
        afterResponse: [
            async ({ response }) => {
                if (!response.ok) return response;

                const data = await response.clone().json().catch(() => null); // null for 204/non-JSON

                response.successResponse = { data, status: response.status };
                return response;
            }
        ],
        beforeError: [
            ({ error }) => {
                const data = error?.data;

                if (data && typeof data === "object") {
                    const { detail, fieldErrors, status, title: code, redirect} = data;

                    error.errorReponse = {
                        code,
                        status,
                        detail,
                        redirect,
                        fieldErrors,
                    };
                }

                return error;
            }
        ]
    }
});

const useFetch = async (method, url, payload) => {
    return await fetch[method.toLowerCase()](url, { json: payload });
};

export default useFetch;