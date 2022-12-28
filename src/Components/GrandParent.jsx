import React from 'react'
import Parent from './Parent'

function GrandParent() {
  return (
    <div className='grandParent'>
        GrandParent
        <Parent />
    </div>
  )
}

export default GrandParent