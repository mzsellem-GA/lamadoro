import sendRequest from "./send-request"
const BASE_URL = "https://lamadoro-api.onrender.com/api/quotes"

export async function getAll() {
    return sendRequest(BASE_URL);
}