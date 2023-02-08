import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = ({ title }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteHandler = () => {
        setModalIsOpen(true);
    };

    const cancelHandler = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>
                    Delete
                </button>
            </div>
            {modalIsOpen && (
                <Modal
                    cancelHandler={cancelHandler}
                    confirmHandler={cancelHandler}
                />
            )}
            {modalIsOpen && <Backdrop cancelHandler={cancelHandler} />}
        </div>
    );
};

export default Todo;
