import React from 'react'


import {useRecoilState} from 'recoil'
import {stateValue} from '../Recoil/atom'

function Child() {

  const [state, setState] = useRecoilState(stateValue)


  return (
    <div className='child'>
      <button onClick={()=>setState((prev)=>prev+1)}>Child +1</button>
      {state}
    </div>
  )
}

export default Child