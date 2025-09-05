import { Button, notification, Popconfirm, Table } from "antd";
import { useState } from "react";
import { deleteBookAPI } from "../../services/api.service";
import UpdateModalBook from "./update.book.modal";
import ViewBookDetailModal from "./view.book.detail";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const BookTable = (props) => {
    const { dataBooks, loadBook, current, pageSize, total, setCurrent, setPageSize } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataDetail, setDataDetail] = useState(null);
    const [isModalDetail, setIsModalDetail] = useState(false);
    const handleDeleleBookByID = async (id) => {
        const res = await deleteBookAPI(id);
        if (res.status == 200) {
            notification.success({
                message: "Delete book",
                description: "Delete user successful"
            })
            await loadBook();
        }
        else {
            notification.error({
                message: "Delete book",
                description: JSON.stringify(res.message)
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
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (text, record, index, action) => {
                if (text)
                    return new Intl.NumberFormat('vi-VN', {
                        style: 'currency', currency: 'VND'
                    }).format(text)
            }
        },
        {
            title: "Quantity",
            dataIndex: "stockQuantity"
        },
        {
            title: "Author",
            dataIndex: "author"
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
                        onConfirm={() => handleDeleleBookByID(record.id)}
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
                <h3 style={{ textAlign: "center" }}>Table Books</h3>
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
                    style={{ marginBottom: "100px" }} columns={columns} dataSource={dataBooks} rowKey={"_id"} />
                <UpdateModalBook
                    dataUpdate={dataUpdate}
                    setDataUpdate={setDataUpdate}
                    isModalUpdateOpen={isModalUpdateOpen}
                    setIsModalUpdateOpen={setIsModalUpdateOpen}
                    loadBook={loadBook}
                />
                <ViewBookDetailModal
                    loadBook={loadBook}
                    dataDetail={dataDetail}
                    isModalDetail={isModalDetail}
                    setIsModalDetail={setIsModalDetail}
                    setDataDetail={setDataDetail}
                />
            </div>
        </>
    )
}

export default BookTable;