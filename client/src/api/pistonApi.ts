import axios, { AxiosInstance } from "axios"

const pistonBaseUrl =
  import.meta.env.VITE_PISTON_API_URL ||
  "https://code-sync-new-54wm.onrender.com/api/judge0"

const instance: AxiosInstance = axios.create({
    baseURL: pistonBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance
