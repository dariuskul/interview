import {FC, useState} from 'react';
import { IItem } from "~/types/item";
import ItemIcon from './components/ItemIcon';
import updateItem from '../../../../services/updateItem';
import Modal from 'react-modal';
import './list-style.scss';

interface IList {
  items: Array<IItem>,
  update?: React.Dispatch<any>
}

interface IUpdateModal {
  item: IItem;
  update?: React.Dispatch<any>
}

const UpdateModal: FC<IUpdateModal> = ({ item,update }) => {
  const [showModal, setShowModal] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [validForm,setValidForm] = useState({errors: []});


  const handleSubmit = async() => {
    try {
      await updateItem({...item, email: newEmail})
      setShowModal(false);
      update(new Date())
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <button className="update" onClick={() => setShowModal(true)}>
        Update Password
      </button>
      <Modal
        className="modal"
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
      >
        <h1>Update Password</h1>
        <input
          placeholder="new password"
          className="input"
          value={newEmail}
          required
          onChange={(event) => setNewEmail(event.target.value)} 
        />
        <div className="pt-12px text-center">
          <button className="button" type="submit" onClick={handleSubmit}>Change</button>
          <button className="button ml-12px" onClick={() => {setShowModal(false)}}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

const List: FC<IList> = ({items,update}) => (
  <ul className="list">
    {
      items.map((item) => (
        <li key={item.id} className="item">
          <ItemIcon name={item.name}/>
          <div>
            <div className="title">
              {item.name}
            </div>
            <div className="description">
              {item.email}
            </div>
          </div>
          <UpdateModal item={item} update={update} />
        </li>
      ))
    }
  </ul>
)

export default List;
