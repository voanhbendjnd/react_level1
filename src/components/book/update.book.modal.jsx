import { useEffect, useState } from "react";
import { updateBookAPI } from "../../services/api.service";
import { Input, Modal, notification } from "antd";

const UpdateModalBook = (props) => {
    const [id, setId] = useState("");
    const [numberOfPages, setNumberOfPage] = useState("");
    const [price, setPrice] = useState();
    const [stockQuantity, setStockQuantity] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();
    const [isbn, setIsbn] = useState();
    const [language, setLanguage] = useState();
    const [title, setTitle] = useState();
    const [publisher, setPublisher] = useState();
    const { loadBook, isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate } = props;
    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate.id)
            setNumberOfPage(dataUpdate.numberOfPages)
            setPrice(dataUpdate.price)
            setStockQuantity(dataUpdate.stockQuantity)
            setAuthor(dataUpdate.author)
            setDescription(dataUpdate.description)
            setIsbn(dataUpdate.isbn)
            setLanguage(dataUpdate.language)
            setTitle(dataUpdate.title)
            setPublisher(dataUpdate.publisher)
        }
    }, [dataUpdate])
    const handleSubmitBtn = async () => {
        const res = await updateBookAPI(id,
            numberOfPages,
            price,
            stockQuantity,
            author,
            description,
            isbn,
            language,
            title,
            publisher);
        if (res.data && res.data) // check data is exists
        {
            notification.success({
                message: "Update Book",
                description: "Update book successfully"
            })
            resetAndCloseModal();
            await loadBook();
        }
        else {
            notification.error({
                message: "Error update book",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setId("")
        setNumberOfPage("")
        setPrice("")
        setStockQuantity("")
        setAuthor("")
        setDescription("")
        setIsbn("")
        setLanguage("")
        setTitle("")
        setPublisher("")
        setDataUpdate(null)
    }
    return (
        <Modal
            title="Update User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => { resetAndCloseModal() }}
            maskClosable={false} // không cho ấn tùm lum rồi thoát
            okText={"SAVE"}
            cancelText={"OUT"}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "10px" }}>
                <div className="input-form-book">
                    <span>Title</span>
                    <Input style={{ width: "auto" }}
                        value={title}
                        onChange={(event) => { setTitle(event.target.value) }}
                    />
                </div>
                <div className="input-form-book">
                    <span>Author</span>
                    <Input style={{ width: "auto" }} value={author} onChange={(event) => { setAuthor(event.target.value) }} />
                </div>
                <div className="input-form-book">
                    <span>Language</span>
                    <Input style={{ width: "auto" }} value={language} onChange={(event) => { setLanguage(event.target.value) }} />
                </div>

                <div className="input-form-book">
                    <span>Isbn</span>
                    <Input style={{ width: "auto" }} value={isbn} onChange={(event) => { setIsbn(event.target.value) }} />
                </div>
                <div className="input-form-book">
                    <span>Publisher</span>
                    <Input style={{ width: "auto" }} value={publisher} onChange={(event) => { setPublisher(event.target.value) }} />
                </div>
                <div className="input-form-book">
                    <span>Quantity</span>
                    <Input style={{ width: "auto" }} value={stockQuantity} onChange={(event) => { setStockQuantity(event.target.value) }} />
                </div>
                <div className="input-form-book">
                    <span>Number of Page</span>
                    <Input style={{ width: "auto" }} value={numberOfPages} onChange={(event) => { setNumberOfPage(event.target.value) }} />
                </div>
                <div className="input-form-book">
                    <span>Description</span>
                    <Input.TextArea style={{ width: "auto" }} value={description} onChange={(event) => { setDescription(event.target.value) }} />
                </div>
                <div className="input-form-book">
                    <span>Price</span>
                    <Input style={{ width: "auto" }} value={price} onChange={(event) => { setPrice(event.target.value) }} />
                </div>
            </div>
        </Modal>
    )
}

export default UpdateModalBook