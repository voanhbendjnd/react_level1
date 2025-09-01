// import axios from "axios";
import axios from './axios.customize';

const createUserAPI = (fullName, email, password, phone, gender, confirmPassword, address) => {
       const URL_BACKEND = "/api/v1/users";
        const data =
        {
            name: fullName,
            email: email,
            phone: phone,
            gender: gender,
            password: password,
            confirmPassword: confirmPassword,
            address: address
        }
       return  axios.post(URL_BACKEND, data);

    }



const updateUserAPI = (fullName,  id, address, phone, gender) => {
    const URL_BACKEND = "/api/v1/users"
    const  data = {
        id: id,
        name: fullName,
        address: address,
        gender: gender,
        phone: phone
    }
    return axios.put(URL_BACKEND, data);
}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/userss";
    return axios.get(URL_BACKEND);
}

export {
    createUserAPI, updateUserAPI, fetchAllUserAPI
}