import { Button, notification, Popconfirm, Table, } from 'antd';
import { deleteUserAPI } from '../../services/api.service';
import { useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import ViewUserDetailModal from './view.user.detail';

const UserTable = (props) => {
    const { dataUsers, loadUser, current, pageSize, total, setCurrent, setPageSize } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataDetail, setDataDetail] = useState(null);
    const [isModalDetail, setIsModalDetail] = useState(false);
    const handleDeleleUserByID = async (id) => {
        const res = await deleteUserAPI(id);
        if (res.status == 200) {
            notification.success({
                message: "Delete user",
                description: "Delete user successful"
            })
            await loadUser();
        }
        else {
            notification.error({
                message: "Delete user",
                description: "Delete user un successful"
            })
        }
        // setIsDeleteModal(false);

    };

    const columns = [
        {
            title: "No.",
            render: (_, record, index) => {
                return (
                    <>
                        {(index + 1) + (current - 1) * pageSize}
                    </>
                )
            }

        },
        {
            title: 'id',
            dataIndex: 'id',
            render: (_, record) => {
                return (
                    <Button
                        type="link"
                        onClick={() => {
                            setDataDetail(record)
                            setIsModalDetail(true) // khi cái này là true thì giao diện sẽ được render lại 
                        }}
                    >
                        {record.id}
                    </Button>
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
                    <Popconfirm
                        title="Are you sure delete this user?"
                        onConfirm={() => handleDeleleUserByID(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
                    </Popconfirm>
                </div>

            ),
        },
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current)
            }
        }
        if (pagination && pagination.pageSize) {
            if (+pagination.current !== +pageSize) {
                setPageSize(+pagination.pageSize)
            }
        }
    };

    return (
        <>
            <div style={{ marginTop: "20px" }}>
                <h3 style={{ textAlign: "center" }}>Table Users</h3>
                <Table
                    pagination={
                        {
                            current: current,
                            pageSize: pageSize,
                            showSizeChanger: true,
                            total: total,
                            showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                        }}
                    onChange={onChange}
                    style={{ marginBottom: "100px" }} columns={columns} dataSource={dataUsers} rowKey={"_id"} />
                <UpdateUserModal
                    dataUpdate={dataUpdate}
                    setDataUpdate={setDataUpdate}
                    isModalUpdateOpen={isModalUpdateOpen}
                    setIsModalUpdateOpen={setIsModalUpdateOpen}
                    loadUser={loadUser}
                />
                <ViewUserDetailModal
                    loadUser={loadUser}
                    dataDetail={dataDetail}
                    isModalDetail={isModalDetail}
                    setIsModalDetail={setIsModalDetail}
                    setDataDetail={setDataDetail}
                />
            </div>
        </>

    )
}
export default UserTable;