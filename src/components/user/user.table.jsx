import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';

const UserTable = (props) => {
    const { dataUsers } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            render: (_, record) => {
                return (
                    <a>{record.id}</a>
                )
            }
        },
        {
            title: 'name',
            dataIndex: 'name',
        },
        {
            title: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record)
                            setIsModalUpdateOpen(true)
                        }}
                        style={{ cursor: "pointer", color: "blue" }} />
                    <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
                </div>

            ),
        },
    ];


    return (
        <>
            <div style={{ marginTop: "20px" }}>
                <h3 style={{ textAlign: "center" }}>Table Users</h3>
                <Table style={{ marginBottom: "100px" }} columns={columns} dataSource={dataUsers} rowKey={"_id"} />
                <UpdateUserModal
                    dataUpdate={dataUpdate}
                    setDataUpdate={setDataUpdate}
                    isModalUpdateOpen={isModalUpdateOpen}
                    setIsModalUpdateOpen={setIsModalUpdateOpen}
                />
            </div>
        </>

    )
}
export default UserTable;