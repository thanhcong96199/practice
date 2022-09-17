import axios from "axios";

const token = `BQD5VXTTbm5m44B0MluCZQHQJHbExfzUEzNN8OF0ICcT5U6LQATUNqqgPOVFPcF0uivLfEpTMF8uuCGjY0TinCUYk27uXXRqWs56Vyh5KFUfWfw_7A8k6ZvAPm6nvpiQTStfofYWAA24knRHwdSfsn2ezKKkVkKNwoI-un49anajoDY-1csuWe9gaxkv_8M`
const instance = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: { 'Authorization': `Bearer ${token}` }
});

export default instance

