import sendRequest from "./send-request"
const BASE_URL = '/api/tasks'

export async function createTask(taskData) {
    return sendRequest(BASE_URL, 'POST', taskData);
}
export async function deleteTask(taskId) {
    return sendRequest(`${BASE_URL}/${taskId}`, 'DELETE');
}
export async function updateTask(taskId, taskData) {
    return sendRequest(`${BASE_URL}/${taskId}`, 'PATCH', taskData);
}

// export async function updateTask(taskId) {
//     return sendRequest(`${BASE_URL}/${taskId}`, 'PATCH');
// }

export async function getAll() {
    return sendRequest(BASE_URL);
}