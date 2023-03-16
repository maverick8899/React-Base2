import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalTitle = ({
  show,
  setShow,
  dataDelete,
  handleDeleteUser = () => {},
}) => {
  //
  const handleClose = () => setShow(false);
  //
  return (
    <>
      {/* backdrop static click ra ngoài ko đóng lại */}
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete This User? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure delete User, Email :
          <b> {dataDelete && dataDelete.email}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleDeleteUser();
              handleClose();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalTitle;
