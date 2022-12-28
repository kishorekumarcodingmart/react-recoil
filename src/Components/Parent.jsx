import React from 'react'
import Child from './Child'


import {useRecoilState} from 'recoil'
import {stateValue} from '../Recoil/atom'

function Parent() {

  const [state, setState] = useRecoilState(stateValue)

  return (
    <div className='parent'>
        <button onClick={()=>setState((prev)=>prev+2)}>Parent + 2</button>
        {state}
        <Child />
    </div>
  )
}

export default Parent