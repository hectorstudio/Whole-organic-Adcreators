import React, {useState} from 'react'
import './AddressModal.scss'

const AddressModal = (props) => {
  var subtitle;
  const [isOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  const [address, setAddress] = useState(
  [{
      id: '1',
      street: '9a Newcastle Street, Rose Bay 2029'
    },
    {
      id: '2',
      street: '10B Random Street'
    }]
  )
  
  return (
    <div className="my-addresses">
      <p className="my-addresses__title">My addresses</p>
        <ul className="my-addresses-list">
          {address.map(addr => (
            <li className="my-addresses-list__item" key={addr.id}>
              <span className="my-addresses-list__text-info">{addr.street}</span> 
              <div>
                <span className="my-addresses-list__text-functionality edit">Edit</span>
                <span className="my-addresses-list__text-functionality">Delete</span>
              </div>
              
            </li>
          ))}
        </ul>
      <button className="my-addresses__btn" onClick={openModal}>Add new address</button>
        {isOpen &&
          <div className="styles_overlay">
            <div className="styles_modal modal_Center" role="dialog" aria-modal="true">
              <h2 className="my-addresses-modal__title custom-title">Add new address</h2>
              <i className="fas fa-times" onClick={closeModal}></i>
              <form className="my-addresses-modal-form">
                <div className="wrapper">
                  <label className="label-for-input">Street address</label>
                  <input required="" type="text" className="addresses-input__item custom-input" value="sdfasdf" />
                </div>
                <div className="addresses-select__item">
                  <p className="addresses-select__item-title">City</p>
                </div>
                <div className="addresses-select__item">
                  <p className="addresses-select__item-title">State/Province</p>
                </div>
                <div className="addresses-select__item">
                  <p className="addresses-select__item-title">Country</p>
                </div>
                <button type="button" className="my-addresses-modal-form__btn">Send address</button>
              </form>
            </div>
            
          </div>
        }
    </div>
    
  )
}

export default AddressModal