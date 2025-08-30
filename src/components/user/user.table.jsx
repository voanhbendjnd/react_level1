import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = (props) => {
    const { dataUsers } = props;

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: 'name',
            dataIndex: 'name',
        },
        {
            title: 'email',
            dataIndex: 'email',
        }
    ];


    return (
        <div style={{ marginTop: "20px" }}>
            <h3 style={{ textAlign: "center" }}>Table Users</h3>
            <Table style={{ marginBottom: "100px" }} columns={columns} dataSource={dataUsers} rowKey={"_id"} />

        </div>
    )
}
export default UserTable;