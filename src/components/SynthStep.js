
// const handleActivate = (note, index) => {
//   // setNotes()
//   console.log(note + ' ' + index)
// }

const SynthStep = (props) => {
  return (
    <>
      {props.step ?
        <div className='active step' onClick={() => props.handleDeactivate(props.note, props.index)}>{props.note}</div>
      :
        <div className='step' onClick={() => props.handleActivate(props.note, props.index)}></div>
      }
    </>
  )
}


export default SynthStep
