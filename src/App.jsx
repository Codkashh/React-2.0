//import Counter from "./components/Counter"
//import TodoList from "./components/TodoList"
//import Profile from "./components/Profile"
//import ShoppingList from "./components/ShoppingList"
//import CopyInput from "./components/ReactPortal/CopyInput"
//import Switcher from "./components/AdvanceKey/Switcher"
//import UseEffectChallenge from "./components/useEffectHook/UseEffectChallenge";
//import CounterEffect from "./components/useEffectHook/CounterEffect"
//import FetchDataEffect from "./components/useEffectHook/FetchDataEffect"
import ComponentA from "./components/Propdrilling/ComponentA"
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
      <ComponentA name={name} />
    </div>
  )
}

export default App
