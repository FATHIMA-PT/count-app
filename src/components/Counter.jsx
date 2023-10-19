import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector(state=>state.counterReducer.count)
  return (
    <div style={{height:'70vh'}} className='d-flex align-items-center justify-content-center w-100'>
        <div className=' d-flex align-items-center justify-content-center border shadow rounded p-5 w-25 flex-column'>
            <h1>{count}</h1>
            <div className="d-flex justify-content-between mt-5 w-100">
                <button onClick={()=>dispatch(increment())} className='btn btn-warning'>Increment</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-primary'>Reset</button>
                <button onClick={()=>dispatch(decrement())} className='btn btn-success'>Decrement</button>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-3'>
                <button onClick={()=>dispatch(incrementByAmount(5))} className='btn btn-danger'>IncrementByAmount</button>
            </div>
        </div>
      
    </div>
  )
}

export default Counter
