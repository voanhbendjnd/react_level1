import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataUsers, setDataUser] = useState([
        {
            name: "Hằng Ni", // Variable dataIndex
            age: 25,
            address: "Cần Thơ"
        },
        {
            name: "Anh Ben",
            age: 25,
            address: "Cần Thơ"
        }
    ]);
    useEffect(() => {
        // -> <-
        loadUser();
    }, []);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        }
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUser(res.data) // vẽ ra giao diện
    }
    return (
        <Table style={{ marginBottom: "100px" }} columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    )
}
export default UserTable;