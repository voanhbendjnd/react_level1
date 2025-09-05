import { useState } from "react";
import { handleUploadFiles, handleUploadFilesBook } from "../../services/api.service";
import { Button, Drawer, notification } from "antd";

const ViewBookDetailModal = (props) => {
    const [selectFile, setSelectFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const { loadBook, setIsModalDetail, isModalDetail, dataDetail, setDataDetail } = props
    const handleUploadFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            return;
        }
        const file = event.target.files[0];
        if (file) {
            setSelectFile(file);
            setPreview(URL.createObjectURL(file));
        }
    }

    const handleUpdatePictureBook = async () => {
        // upload file
        const res = await handleUploadFilesBook(selectFile, "book", dataDetail.id);
        if (res.data) {
            const newAvartar = res.data.fileName;
            notification.success({
                message: "Success",
                description: "Picture product updated successfully"
            });
            setIsModalDetail(false)
            setSelectFile(null)
            setPreview(null)
            await loadBook()
        } else {
            notification.error({
                message: "Error",
                description: JSON.stringify(res.message)
            });
        }
    }
    return (
        <>
            <Drawer
                width={"30vw"}
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
                        <div style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
                            <p style={{ color: "red" }}>ID: {dataDetail?.id}</p>
                            <p>Title: {dataDetail?.title}</p>
                            <p>Price: {dataDetail?.price}</p>
                            <p>Author: {dataDetail?.author}</p>
                            <p>Description: {dataDetail?.description}</p>
                        </div>

                        <div>
                            <img style={{ borderRadius: "5px", objectFit: "contain", width: "100%" }} src={`${import.meta.env.VITE_BACKEND_URL}/api/v1/images/book/${dataDetail?.coverImage}`} />
                        </div>
                        <div style={{ marginTop: "10px" }}>
                            <label style={{ backgroundColor: "#41b3e0ff", padding: "10px", borderRadius: "10px", color: "white" }} htmlFor="btnUpload">Upload book</label>
                            <input type="file" hidden id="btnUpload"
                                onChange={(event) => handleUploadFile(event)}
                            />
                        </div>
                        {preview &&
                            <>
                                <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <img src={preview} style={{ width: "50%" }} />
                                </div>
                                <Button type="primary" style={{ width: "15%" }}
                                    onClick={() => handleUpdatePictureBook()}
                                >Save</Button>
                            </>


                        }
                        {/* <Button style={{ width: "30%" }} type="primary">Update Avatar</Button> */}
                    </div>
                    :
                    <p>Not find data</p>
                }

            </Drawer>
        </>

    )
}

export default ViewBookDetailModal;