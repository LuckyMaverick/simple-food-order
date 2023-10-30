const Meal = ({ item }) => {

  return (
   <div className={"meal-item"}>
     <img src={`http://localhost:3000/${item.image}`} alt=""/>
     <h3>{item?.name}</h3>
     <p className={"meal-item-price"}>{item?.price}</p>
     <p className={'meal-item-description'}>{item.description}</p>
     <button type={"button"} className={"button"}>Add To Cart</button>
   </div>
  )
}

export default Meal