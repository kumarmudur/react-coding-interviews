import { useState } from "react";

import Modal from './modal';
import './modal.css';

const ModalTest = () => {
    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => setShowModal(!showModal);

    const handleClose= () => setShowModal(false);

    return (
        <div>
            <button onClick={handleToggleModal}>Open Modal Popup</button>
            {
                showModal && 
                <Modal 
                    id={"Custom-id"}
                    header={<h1>Customized Header</h1>}
                    footer={<h1>Customized Footer</h1>}
                    body={<div>Customized Body</div>}
                    onClose={handleClose}
                />
            }
        </div>
    );
};

export default ModalTest;