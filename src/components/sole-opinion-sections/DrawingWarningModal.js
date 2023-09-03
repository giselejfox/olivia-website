
import { Modal } from "react-bootstrap";

export default function DrawingWarningModal({ showDrawingWarningModal, handleSetShowDrawingWarningModal, handleSetShowTextInput }) {
    
    const handleCloseModal = (e) => { 
        e.preventDefault();
        handleSetShowDrawingWarningModal(false);
    }
    
    const handleGoToTyping = (e) => {
        e.preventDefault();
        handleSetShowDrawingWarningModal(false);
        handleSetShowTextInput(true);
    }

    return (
        <Modal show={showDrawingWarningModal} id="drawing-warning-modal" >
            <Modal.Header>
                <Modal.Title>Heads up!</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleGoToTyping}>
                <Modal.Body>
                    If you type then you'll lose what you've written already
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Keep my drawing</button>
                    <button type="submit" className="btn btn-warning">Go to typing</button>
                </Modal.Footer>
            </form>
        </Modal >
    )
}