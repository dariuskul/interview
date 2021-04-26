import { FC, SyntheticEvent, useState } from "react";
import updateItem from "~/services/updateItem";
import { IUpdateModal } from "~/types/item";
import Modal from "react-modal";
import ErrorBlock from "~/components/ErrorBlock";
const UpdateModal: FC<IUpdateModal> = ({ item, update }) => {
  const [showModal, setShowModal] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [validForm, setValidForm] = useState("");
  const [error, setError] = useState("");
  const toggleModal = () => setShowModal(!showModal);
  const handleSubmit = async () => {
    if (!newEmail) {
      setValidForm("Please provide your new password");
      return;
    }
    try {
      await updateItem({ ...item, email: newEmail });
      toggleModal();
      update(new Date().toISOString());
    } catch (error) {
      setError(error.message);
    }
  };
  const handleChange = (event) => {
    validForm ? setValidForm("") : null;
    setNewEmail(event.target.value);
  };
  return (
    <>
      <button className="update" onClick={() => setShowModal(true)}>
        Update Password
      </button>
      <Modal
        className="modal"
        isOpen={showModal}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        required
      >
        <h1>Update password</h1>
        {validForm ? <ErrorBlock error={validForm} /> : null}
        {error ? <ErrorBlock error={error} /> : null}
        <input
          placeholder="new password"
          className="input"
          value={newEmail}
          required
          onChange={handleChange}
        />
        <div className="pt-12px text-center">
          <button className="button" type="submit" onClick={handleSubmit}>
            Change
          </button>
          <button className="button ml-12px" onClick={toggleModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default UpdateModal;
