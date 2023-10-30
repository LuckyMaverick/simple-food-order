const CartModal = ({ isShown, items, onClose }) => {

  return (
    <Modal show={isShown} onClose={onClose}>
      <div className={"cart"}>
        <h2>Your Cart</h2>
        {
          items.map(i => <p key={i.uuid}>{i.name}</p>)
        }
      </div>

    </Modal>
  )
}

import Modal from "./UI/Modal.jsx";

export default CartModal