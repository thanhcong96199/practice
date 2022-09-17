import axios from "axios";

const token = `BQBCCEn_7FDFPNav8X8k9jTL5o40Dp2RDIdq5CzOYkQEB82DyclbwCiME0v6M0dQ2Iz4sVe8TYrL8NGV3NSWfwFT6iAzd4dlIgZZ-62-ja7a9sho-usHEmgIS1s48ImqfFFTUjKZ4Yb8Re01y0G1ldrFpLxb9k2GXXt0V8fudeyjHzlKtmbvOZkQ1KwavgdnQMM`
const instance = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: { 'Authorization': `Bearer ${token}` }
});

export default instance

