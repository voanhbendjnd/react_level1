import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
    // b2
    const [dataUsers, setDataUser] = useState([
        // {
        //     name: "Hằng Ni", // Variable dataIndex
        //     age: 25,
        //     address: "Cần Thơ"
        // },
        // {
        //     name: "Anh Ben",
        //     age: 25,
        //     address: "Cần Thơ"
        // }
    ]);
    useEffect(() => {
        loadUser();
    }, []);
    // b1
    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUser(res.data) // vẽ ra giao diện
    }
    return (
        <div>
            <UserForm loadUser={loadUser} />
            {/* // dataUsers thay đổi nên componet UserTable thay đổi theo và render lại */}
            <UserTable dataUsers={dataUsers} loadUser={loadUser} />
        </div >
    )
}
export default UserPage;