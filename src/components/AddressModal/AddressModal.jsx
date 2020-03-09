import React, {useState} from 'react'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'

const AddressModal = (props) => {
  const [address, setAddress] = useState([])
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <div>My Address</div>

      {address.map(addr => (
        <div>
          {addr.street}
          <div className='buttons'>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ))}

      <button onClick={toggle}>Add new address</button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Add new Address</ModalHeader>
        <ModalBody>
          <div>
            <label>
              Street Addres
              <input />
            </label>

            <label>
              City
              <select>
                <option>Sydney</option>
                <option>Melbourne</option>
              </select>
            </label>

            <label>
              State/Province
              <select>
                <option>Sydney</option>
                <option>Melbourne</option>
              </select>
            </label>

            <label>
              Country
              <select>
                <option>AUS</option>
              </select>
            </label>
          </div>

          <button>Send Address</button>
        </ModalBody>
      </Modal>
    </div>
    
  )
}

export default AddressModal