import Logo from "./Logo.jsx";
import Cart from "./Cart.jsx";

// todo remove mocked
const data = [
  {
    id: "m1",
    name: "Mac & Cheese",
    price: "8.99",
    description: "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
    image: "images/mac-and-cheese.jpg"
  },
  {
    id: "m1",
    name: "Mac & Cheese",
    price: "8.99",
    description: "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
    image: "images/mac-and-cheese.jpg"
  },
  {
    id: "m1",
    name: "Mac & Cheese",
    price: "8.99",
    description: "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
    image: "images/mac-and-cheese.jpg"
  },
  {
    id: "m8",
    name: "Sushi Roll Platter",
    price: "15.99",
    description: "An assortment of fresh sushi rolls including California, Spicy Tuna, and Eel Avocado.",
    image: "images/sushi-roll-platter.jpg"
  },
  {
    id: "m8",
    name: "Sushi Roll Platter",
    price: "15.99",
    description: "An assortment of fresh sushi rolls including California, Spicy Tuna, and Eel Avocado.",
    image: "images/sushi-roll-platter.jpg"
  }
];

const Header = () => {
  return (
    <header id={'main-header'}>
      <Logo />
      <Cart selectedItems={data}/>
    </header>
  )
}

export default Header