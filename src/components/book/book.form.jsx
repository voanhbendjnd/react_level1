import { useState } from "react";
import { createBookAPI } from "../../services/api.service";
import { Button, Input, InputNumber, message, Modal, notification } from "antd";
import '../style.css'

const BookForm = (props) => {
    const { loadBook } = props;
    const [numberOfPage, setNumberOfPage] = useState("");
    const [price, setPrice] = useState();
    const [stockQuantity, setStockQuantity] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();
    const [isbn, setIsbn] = useState();
    const [language, setLanguage] = useState();
    const [title, setTitle] = useState();
    const [publisher, setPublisher] = useState();
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);


    const handleSubmitBtn = async () => {
        const res = await createBookAPI(numberOfPage,
            price,
            stockQuantity,
            author,
            description,
            isbn,
            language,
            title,
            publisher);
        if (res.data) {
            message.success("Create new book successfully")
            resetAndCloseModal();
            await loadBook();
        }
        else {
            notification.error({
                message: "Error create new book",
                description: JSON.stringify(res.message)
            })
        }

    }


    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setNumberOfPage("");
        setPrice("");
        setDescription("");
        setStockQuantity();
        setIsbn();
        setLanguage("")
        setTitle("");
        setPublisher("");
        setAuthor("");
    }

    return (
        <div className="book-form">
            <div>
                <div style={{ padding: "20px", display: "flex", justifyContent: "flex-end" }}>
                    <Button onClick={() => { setIsModalUpdateOpen(true) }} style={{ width: "auto", height: "40px" }} type="primary">Create Book</Button>
                </div>
                <Modal
                    title="Create Book"
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalUpdateOpen}
                    onOk={() => handleSubmitBtn()}
                    onCancel={() => { resetAndCloseModal() }}
                    maskClosable={false} // không cho ấn tùm lum rồi thoát
                    okText={"CREATE"}
                    cancelText={"QUIT"}
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
                            <Input style={{ width: "auto" }} value={numberOfPage} onChange={(event) => { setNumberOfPage(event.target.value) }} />
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

            </div>
        </div>
    )
}
export default BookForm;