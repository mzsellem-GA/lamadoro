import * as tasksApi from './tasks-api'

export async function createTask(taskData) {
    console.log('this is taskData in tasks-service', taskData)
    const task = await tasksApi.createTask(taskData)
    return task
}