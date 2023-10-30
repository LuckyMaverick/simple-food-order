import axios from "axios";
import {useEffect, useState} from "react";
import Meals from "./components/Meals.jsx";
import Header from "./components/Header.jsx";

const App = () => {
  const [meals, setMeals] = useState([])

  const handle = {
    getMeals() {
      axios
        .get('http://localhost:3000/meals')
        .then(r => setMeals(r.data))
    }
  }

  useEffect(handle.getMeals, []);

  return (
    <main>
      <Header />

      {
        meals.length > 0 && <Meals items={meals} />
      }
    </main>
  )
}

export default App;
