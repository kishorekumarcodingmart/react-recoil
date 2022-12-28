import React from 'react'
import GrandParent from './Components/GrandParent'

import {useRecoilState} from 'recoil'
import {stateValue} from './Recoil/atom'


function App() {

  const [state, setState] = useRecoilState(stateValue)

  return (
    <div className='app'>
      <button onClick={()=>setState((prev)=>prev+4)}>App +4</button>
      {state}
      <GrandParent />
    </div>
  )
}

export default App