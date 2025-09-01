import { Drawer } from "antd";

const ViewUserDetailModal = (props) => {
    const { setIsModalDetail, isModalDetail, dataDetail, setDataDetail } = props

    return (
        <>
            <Drawer
                title="User Detail"
                placement="right"
                open={isModalDetail}
                onClose={() => {
                    setDataDetail(null)
                    setIsModalDetail(false)
                }}
            >
                {dataDetail ?
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontWeight: "bold" }}>
                        <p style={{ color: "red" }}>ID: {dataDetail?.id}</p>
                        <p>Full name: {dataDetail?.fullName}</p>
                        <p>Email: {dataDetail?.email}</p>
                        <p>Gender: {dataDetail?.gender}</p>
                        <p>Phone: {dataDetail?.phone}</p>
                        <p>Address: {dataDetail?.address}</p>
                    </div>
                    :
                    <p>Not find data</p>
                }

            </Drawer>
        </>

    )
}

export default ViewUserDetailModal;