import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
    // call to Nodejs Server
    return axios.post('/api/login', {email: userEmail, password: userPassword});
};

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserService = (userData) => {
    return axios.post(`/api/create-new-user`, userData);
};

const deleteUserService = (userId) => {
    return axios.post(`/api/delete-user`, {id: userId});
};

export {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUserService,
};