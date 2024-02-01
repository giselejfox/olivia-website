import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/*

This build out the modal that pops up when you originally enter the page

*/

export default function IntroModal({showModal, handleCloseModal}) {
    return (
      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal">
        <Modal.Body>
            {/* Here is where you put the body text */}
            <h1>Hellooooo</h1>
            <div>This is simply the coolest website ever!</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}
  