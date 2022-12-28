import React from 'react'
import Parent from './Parent'

import {useRecoilState} from 'recoil'
import {stateValue} from '../Recoil/atom'

function GrandParent() {

  const [state, setState] = useRecoilState(stateValue)

  return (
    <div className='grandParent'>
        <button onClick={()=>setState((prev)=>prev+3)}>GrandParent +3</button>
        {state}
        <Parent />
    </div>
  )
}

export default GrandParent