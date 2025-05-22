import React from 'react'
import Weather from './components/Weather'
import UserState from './components/UserState'
import Greeting from './components/Greeting'
const App = () => {
  return (
    <div>
      <Weather />
      <UserState loggedIn={true} isAdmin={true}/>
      <Greeting timeOfDay="afternoon"/>
    </div>
  )
}

export default App
