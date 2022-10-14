import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import * as Tone from 'tone'
import SynthStep from './components/SynthStep'

const App = () => {
  const [play, setPlay] = useState(false)
  const [notes, setNotes] = useState(['D3', 'C3', 'A2', 'G2', 'F2', 'D2', 'C2'])
  const [steps, setSteps] = useState([null, null, null, null, null, null, null, null])
  const [steps1, setSteps1] = useState([null, null, null, null, null, null, null, null])
  const [steps2, setSteps2] = useState([null, null, null, null, null, null, null, null])
  const [steps3, setSteps3] = useState([null, null, null, null, null, null, null, null])
  const [steps4, setSteps4] = useState([null, null, null, null, null, null, null, null])
  const [steps5, setSteps5] = useState([null, null, null, null, null, null, null, null])
  const [steps6, setSteps6] = useState([null, null, null, null, null, null, null, null])

  //---------------------------------------------
  //        Sequencer
  //---------------------------------------------
  const synth = new Tone.Synth().toDestination();
  const seq = new Tone.Sequence((time, note) => {
    console.log(time + note)
  	synth.triggerAttackRelease(note, 0.1, time);
  }, steps).start(0);

  const synth1 = new Tone.Synth().toDestination();
  const seq1 = new Tone.Sequence((time, note) => {
    console.log(time + note)
    synth.triggerAttackRelease(note, 0.1, time);
  }, steps1).start(0);

  const synth2 = new Tone.Synth().toDestination();
  const seq2 = new Tone.Sequence((time, note) => {
    console.log(time + note)
  	synth.triggerAttackRelease(note, 0.1, time);
  }, steps2).start(0);

  const synth3 = new Tone.Synth().toDestination();
  const seq3 = new Tone.Sequence((time, note) => {
    console.log(time + note)
  	synth.triggerAttackRelease(note, 0.1, time);
  }, steps3).start(0);

  const synth4 = new Tone.Synth().toDestination();
  const seq4 = new Tone.Sequence((time, note) => {
    console.log(time + note)
  	synth.triggerAttackRelease(note, 0.1, time);
  }, steps4).start(0);

  const synth5 = new Tone.Synth().toDestination();
  const seq5 = new Tone.Sequence((time, note) => {
    console.log(time + note)
  	synth.triggerAttackRelease(note, 0.1, time);
  }, steps5).start(0);

  const synth6 = new Tone.Synth().toDestination();
  const seq6 = new Tone.Sequence((time, note) => {
    console.log(time + note)
  	synth.triggerAttackRelease(note, 0.1, time);
  }, steps6).start(0);

  //---------------------------------------------
  //        Transport
  //---------------------------------------------
  const handlePlayStop = () => {
    setPlay(!play)
  }

  play ? Tone.Transport.start() : Tone.Transport.stop()


  //---------------------------------------------
  //      Activate Steps
  //---------------------------------------------

  const handleActivate = (note, index) => {
    if (note === notes[0]) {
      const active = steps.map((step, i) => {
        if (i === index ) {
          return step = note
        } else {
          return step
        }
      })
      setSteps(active)
    } else if (note === notes[1]) {
      const active = steps1.map((step, i) => {
        if (i === index ) {
          return step = note
        } else {
          return step
        }
      })
      setSteps1(active)
    } else if (note === notes[2]) {
      const active = steps2.map((step, i) => {
        if (i === index ) {
          return step = note
        } else {
          return step
        }
      })
      setSteps2(active)
    } else if (note === notes[3]) {
      const active = steps3.map((step, i) => {
        if (i === index ) {
          return step = note
        } else {
          return step
        }
      })
      setSteps3(active)
    } else if (note === notes[4]) {
      const active = steps4.map((step, i) => {
        if (i === index ) {
          return step = note
        } else {
          return step
        }
      })
      setSteps4(active)
    } else if (note === notes[5]) {
      const active = steps5.map((step, i) => {
        if (i === index ) {
          return step = note
        } else {
          return step
        }
      })
      setSteps5(active)
    } else if (note === notes[6]) {
      const active = steps6.map((step, i) => {
        if (i === index ) {
          return step = note
        } else {
          return step
        }
      })
      setSteps6(active)
    } else {}
  }
  //---------------------------------------------
  //      Deactivate Steps
  //---------------------------------------------
  const handleDeactivate = (note, index) => {
    if (note === notes[0]) {
      const active = steps.map((step, i) => {
        if (i === index ) {
          return step = null
        } else {
          return step
        }
      })
      setSteps(active)
    } else if (note === notes[1]) {
      const active = steps1.map((step, i) => {
        if (i === index ) {
          return step = null
        } else {
          return step
        }
      })
      setSteps1(active)
    } else if (note === notes[2]) {
      const active = steps2.map((step, i) => {
        if (i === index ) {
          return step = null
        } else {
          return step
        }
      })
      setSteps2(active)
    } else if (note === notes[2]) {
      const active = steps2.map((step, i) => {
        if (i === index ) {
          return step = null
        } else {
          return step
        }
      })
      setSteps2(active)
    } else if (note === notes[3]) {
      const active = steps3.map((step, i) => {
        if (i === index ) {
          return step = null
        } else {
          return step
        }
      })
      setSteps3(active)
    } else if (note === notes[4]) {
      const active = steps4.map((step, i) => {
        if (i === index ) {
          return step = null
        } else {
          return step
        }
      })
      setSteps4(active)
    } else if (note === notes[5]) {
      const active = steps5.map((step, i) => {
        if (i === index ) {
          return step = null
        } else {
          return step
        }
      })
      setSteps5(active)
    } else if (note === notes[6]) {
      const active = steps6.map((step, i) => {
        if (i === index ) {
          return step = null
        } else {
          return step
        }
      })
      setSteps6(active)
    }
  }

  return (
    <div>
      {play ?
        <button onClick={() => handlePlayStop()}>Stop</button>
        :
        <button onClick={() => handlePlayStop()}>Play</button>
      }
        <div className='sequencerContainer'>
          <div className='stepContainer'>
            {steps.map((step, index) => {
              return (
                <SynthStep
                  step={step}
                  index={index}
                  handleActivate={handleActivate}
                  handleDeactivate={handleDeactivate}
                  note={notes[0]}
                />
              )
            })}
          </div>
          <div className='stepContainer'>
            {steps1.map((step, index) => {
              return (
                <SynthStep
                  step={step}
                  index={index}
                  handleActivate={handleActivate}
                  handleDeactivate={handleDeactivate}
                  note={notes[1]}
                />
              )
            })}
          </div>
          <div className='stepContainer'>
            {steps2.map((step, index) => {
              return (
                <SynthStep
                  step={step}
                  index={index}
                  handleActivate={handleActivate}
                  handleDeactivate={handleDeactivate}
                  note={notes[2]}
                />
              )
            })}
          </div>
          <div className='stepContainer'>
            {steps3.map((step, index) => {
              return (
                <SynthStep
                  step={step}
                  index={index}
                  handleActivate={handleActivate}
                  handleDeactivate={handleDeactivate}
                  note={notes[3]}
                />
              )
            })}
          </div>
          <div className='stepContainer'>
            {steps4.map((step, index) => {
              return (
                <SynthStep
                  step={step}
                  index={index}
                  handleActivate={handleActivate}
                  handleDeactivate={handleDeactivate}
                  note={notes[4]}
                />
              )
            })}
          </div>
          <div className='stepContainer'>
            {steps5.map((step, index) => {
              return (
                <SynthStep
                  step={step}
                  index={index}
                  handleActivate={handleActivate}
                  handleDeactivate={handleDeactivate}
                  note={notes[5]}
                />
              )
            })}
          </div>
          <div className='stepContainer'>
            {steps6.map((step, index) => {
              return (
                <SynthStep
                  step={step}
                  index={index}
                  handleActivate={handleActivate}
                  handleDeactivate={handleDeactivate}
                  note={notes[6]}
                />
              )
            })}
          </div>
        </div>
    </div>
  );
}

export default App;
