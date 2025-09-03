import { useEffect, useState } from "react";
import { Input, notification, Select, Modal } from "antd";
import {updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("MALE");

    const { loadUser, isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate } = props;
    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate.id)
            setAddress(dataUpdate.address)
            setFullName(dataUpdate.name)
            setPhone(dataUpdate.phone)
            setGender(dataUpdate.gender)
        }
    }, [dataUpdate])
    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(fullName, id, address, phone, gender);
        if (res.data && res.data) // check data is exists
        {
            notification.success({
                message: "Update User",
                description: "Update user successfully"
            })
            resetAndCloseModal();
            await loadUser();
        }
        else {
            notification.error({
                message: "Error update user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setAddress("")
        setFullName("")
        setId("")
        setPhone("")
        setGender("MALE")
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
                <div className="input-form-user">
                    <span>ID</span>
                    <Input style={{ width: "auto" }} value={id} disabled />
                </div>
                <div className="input-form-user">
                    <span>Full Name</span>
                    <Input style={{ width: "auto" }}
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>

                <div className="input-form-user">
                    <span>Address</span>
                    <Input style={{ width: "auto" }} value={address} onChange={(event) => { setAddress(event.target.value) }} />
                </div>
                <div className="input-form-user">
                    <span>Phone</span>
                    <Input style={{ width: "auto" }} value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <div className="input-form-user">
                    <span>Gender</span>
                    <Select
                        value={gender}
                        style={{ width: "22%", height: "40px" }}
                        onChange={(value) => setGender(value)}
                        options={[
                            { value: 'MALE', label: 'MALE' },
                            { value: 'FEMALE', label: 'FEMALE' },
                            { value: 'OTHER', label: 'OTHER' },
                        ]}

                    />
                </div>
            </div>
        </Modal>
    )
}
export default UpdateUserModal;