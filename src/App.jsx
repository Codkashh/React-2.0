//import Counter from "./components/Counter"
//import TodoList from "./components/TodoList"
//import Profile from "./components/Profile"
//import ShoppingList from "./components/ShoppingList"
//import CopyInput from "./components/ReactPortal/CopyInput"
//import Switcher from "./components/AdvanceKey/Switcher"
//import UseEffectChallenge from "./components/useEffectHook/UseEffectChallenge";
//import CounterEffect from "./components/useEffectHook/CounterEffect"
//import FetchDataEffect from "./components/useEffectHook/FetchDataEffect"
//import ComponentA from "./components/Propdrilling/ComponentA"
import { createContext } from "react"
import ComponentA from "./components/ContextAPI/ComponentA";

export const Data = createContext();
const App = () => {
  const name = "Akash"
  return (
    <div>
      {/*<Counter />*/}
      {/*<TodoList />*/}
      {/*<Profile />*/}
      {/*<ShoppingList />*/}
      {/*<CopyInput/>*/}
      {/*<Switcher />*/}
      {/*<UseEffectChallenge />*/}
      {/*<CounterEffect />*/}
      {/*<FetchDataEffect />*/}
      {/*<ComponentA name={name} />*/}
      
      <Data.Provider value={name}>
        <ComponentA />
      </Data.Provider>
    </div>
  )
}

export default App
