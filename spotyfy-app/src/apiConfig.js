import axios from "axios";

const token = `BQBaz1lh4naEGT6SUkoHuKDiQvLZmZ23qLmTWVljPriRge9pjzFWgVxr7PcRGjeNjD9ORyAVLTP6OkVyF68zvb_34CulrFZAaHRzgvZnwi7wMom57gCK3xgYlVhrpCfYJKzbeYdnd8yYJa2X4xNNhgm5en37ExOO0JNUnqFHmWDm0AueRMCHCCaH4dBGcWs`
const instance = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: { 'Authorization': `Bearer ${token}` }
});

export default instance

