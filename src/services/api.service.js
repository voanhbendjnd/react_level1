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

const fetchAllBookAPI = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/books?page=${current}&size=${pageSize}`;
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
    const URL_BACKEND = `/api/v1/files/upload/avatar`;
    
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
const handleUploadFilesBook = (file, folder, bookId) => {
    const URL_BACKEND = `/api/v1/files/upload/product`;
    
    // Tạo đối tượng FormData
    const bodyFormData = new FormData();
    
    // Gắn file và folder vào bodyFormData
    bodyFormData.append("file", file);
    bodyFormData.append("folder", folder); // <-- Sửa ở đây
    bodyFormData.append("bookId", bookId);
    
    // Cấu hình request, không cần header "folder"
    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };
    
    // Gửi request
    return axios.post(URL_BACKEND, bodyFormData, config);


};


const loginAPi = (email, password) => {
    const URL_BACKEND = "/api/v1/auth/login";
    const data = {
        username: email,
        password: password,
        delay: 2000
    }
    return axios.post(URL_BACKEND, data);
};
const getAccountAPI = () => {
    const URL_BACKEND = "/api/v1/auth/account"
    return axios.get(URL_BACKEND);
}

const logoutAPI = () => {
    const URL_BACKEND = "/api/v1/auth/logout";
    return axios.post(URL_BACKEND);
}

const createBookAPI = (numberOfPage,
        price,
        stockQuantity,
        author,
        description,
        isbn,
        language,
        title,
        publisher) => {
    const URL_BACKEND = "/api/v1/books";
    const data = {
        numberOfPages: numberOfPage,
        price: price,
        stockQuantity: stockQuantity,
        author:author,
        description: description,
        isbn:isbn,
        language: language,
        title: title,
        publisher: publisher
    }
    return axios.post(URL_BACKEND, data);
}

const deleteBookAPI = (id) => {
    const URL_BACKEND = `/api/v1/books/${id}`;
    return axios.delete(URL_BACKEND);
}

const updateBookAPI = (
        id,
        numberOfPage,
        price,
        stockQuantity,
        author,
        description,
        isbn,
        language,
        title,
        publisher) => {
    const URL_BACKEND = "/api/v1/books"
    const data = {
        id:id,
        numberOfPages: numberOfPage,
        price: price,
        stockQuantity: stockQuantity,
        author:author,
        description: description,
        isbn:isbn,
        language: language,
        title: title,
        publisher: publisher
    }
    return axios.put(URL_BACKEND, data)
}
export {
    createUserAPI,
    updateUserAPI,
    fetchAllUserAPI,
    deleteUserAPI,
    handleUploadFiles,
    registerUserAPI,
    loginAPi,
    getAccountAPI,
    logoutAPI,
    fetchAllBookAPI,
    createBookAPI,
    deleteBookAPI,
    updateBookAPI,
    handleUploadFilesBook,
}