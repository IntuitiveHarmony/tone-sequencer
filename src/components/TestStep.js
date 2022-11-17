import { useDispatch } from 'react-redux'
import { activateRow1 } from '../features/sequencer/sequencerSlice'

const TestStep = (props) => {
  const dispatch = useDispatch()
  return (
    <>
      {props.step ?
        <div className='active step' onClick={() => dispatch(activateRow1([props.index, props.note]))}>{props.note}</div>
      :
        <div className='step' onClick={() => dispatch(activateRow1([props.index, props.note]))}></div>
      }
    </>
  )
}


export default TestStep
