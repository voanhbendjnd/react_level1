import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
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
    }, [current, pageSize]);
    // b1
    const loadUser = async () => {
        const res = await fetchAllUserAPI(current, pageSize)
        if (res.data) {
            setCurrent(res.data.meta.page)
            setPageSize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)
            setDataUser(res.data.result) // vẽ ra giao diện

        }
    }
    return (
        <div>
            <UserForm loadUser={loadUser} />
            {/* // dataUsers thay đổi nên componet UserTable thay đổi theo và render lại */}
            <UserTable
                setCurrent={setCurrent}
                setPageSize={setPageSize}
                current={current}
                pageSize={pageSize}
                total={total}
                dataUsers={dataUsers} loadUser={loadUser} />
        </div >
    )
}
export default UserPage;