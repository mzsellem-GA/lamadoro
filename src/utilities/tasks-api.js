import sendRequest from "./send-request"
const BASE_URL = 'https://lamadoro-api.onrender.com/api/tasks'

export async function createTask(taskData) {
    return sendRequest(BASE_URL, 'POST', taskData);
}
export async function deleteTask(taskId) {
    return sendRequest(`${BASE_URL}/${taskId}`, 'DELETE');
}
export async function updateTask(taskId, taskData) {
    return sendRequest(`${BASE_URL}/${taskId}`, 'PATCH', taskData);
}

export async function getAll() {
    console.log("tasks-api lol")
    return sendRequest(BASE_URL, 'GET');
}