import axios from "axios";
const apiUrl = "http://backend-briantwhelan-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/api/tasks";

// functions to call api

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
