import Meal from "./Meal.jsx";

const Meals = ({ items }) => {

  return (
    <div id={"meals"}>
      {
        items.map(item => <Meal key={item.id} item={item}/>)
      }
    </div>
  )
}
export default Meals