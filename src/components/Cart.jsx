import {useEffect, useRef, useState} from "react";
import Modal from "./UI/Modal.jsx";
import CartModal from "./CartModal.jsx";

const Cart = ({ selectedItems }) => {
  const [groupedItems, setGroupedItems] = useState([])
  const [cartIsShown, setCartIsShown] = useState(false)

  const handle = {
    onShow(){
      setCartIsShown(true)
    },
    onClose() {
      setCartIsShown(false)
    }
  }

  function generateUUID() {
    // You can use a library or generate a simple UUID here.
    // For example:
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  useEffect(() => {
    const groupedItems = Object.values(selectedItems.reduce((acc, curr) => {
      const { id, name, price, description, image } = curr;
      const uuid = generateUUID(); // You need to implement a function to generate a UUID.

      if (!acc[id]) {
        acc[id] = { id, name, price, description, image, amount: 1, uuid };
      } else {
        acc[id].amount++;
      }

      return acc;
    }, {}));

    console.log("groupedData", groupedItems)
    setGroupedItems(groupedItems)
  }, []);

  return (
    <div className={"cart-item-actions"}>
      <CartModal isShown={cartIsShown} items={groupedItems} onClose={handle.onClose}/>
      <button type={"button"} className={"text-button"} onClick={handle.onShow}>Cart ({selectedItems.length})</button>
    </div>
  )
}

export default Cart