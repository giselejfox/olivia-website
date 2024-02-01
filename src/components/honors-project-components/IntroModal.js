import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/*

This build out the modal that pops up when you originally enter the page

*/

export default function IntroModal({showModal, handleCloseModal}) {
    return (
      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal">
        <Modal.Body className="text-center">
            {/* Here is where you put the body text */}
            <h1>Welcome to my personal collection of souvenirs!</h1>
            <div>Over the years, I've gathered a diverse array of experiences, 
              skills, and knowledge, each leaving its mark on my perspective and 
              fueling my passion as a designer. Click on the vibrant, colored 
              areas to delve into the stories that have shaped my creative journey.</div>
        </Modal.Body>
        <Modal.Footer className= "d-flex justify-content-center">
          <Button variant="secondary" onClick={handleCloseModal}>Let’s go!</Button>
        </Modal.Footer>
      </Modal>
    )
}
  