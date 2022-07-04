import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
    // call to Nodejs Server
    return axios.post('/api/login', {email: userEmail, password: userPassword});
};

export {handleLoginApi};