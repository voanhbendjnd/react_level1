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



const updateUserAPI = () => {
    
}

export {
    createUserAPI, updateUserAPI
}