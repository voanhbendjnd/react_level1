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

const deleteUserAPI = (id) => {
    const URL_BACKEND = `/api/v1/users/${id}`
    return axios.delete(URL_BACKEND)

}
const fetchAllUserAPI = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/users?page=${current}&size=${pageSize}`;
    return axios.get(URL_BACKEND);
}

const registerUserAPI = (email, fullName, phone, address, password, confirmPassword, gender) => {
    const URL_BACKEND = "/api/v1/auth/register"
    const data = {
            name: fullName,
            email: email,
            phone: phone,
            gender: gender,
            password: password,
            confirmPassword: confirmPassword,
            address: address
    }
    return axios.post(URL_BACKEND, data)
}

const handleUploadFiles = (file, folder, email) => {
    const URL_BACKEND = `/api/v1/files/upload`;
    
    // Tạo đối tượng FormData
    const bodyFormData = new FormData();
    
    // Gắn file và folder vào bodyFormData
    bodyFormData.append("file", file);
    bodyFormData.append("folder", folder); // <-- Sửa ở đây
    bodyFormData.append("email", email);
    
    // Cấu hình request, không cần header "folder"
    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };
    
    // Gửi request
    return axios.post(URL_BACKEND, bodyFormData, config);


};

export {
    createUserAPI, updateUserAPI, fetchAllUserAPI, deleteUserAPI, handleUploadFiles, registerUserAPI
}