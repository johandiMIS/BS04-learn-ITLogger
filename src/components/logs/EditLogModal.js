import React, { useEffect, useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { updateLog } from '../../actions/logAction'

const EditLogModal = ({current, updateLog}) => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    
    useEffect(()=>{
        if (current){
            setMessage(current.message)
            setAttention(current.attention)
            setTech(current.tech)  
        }
    }, [current])

    const onSubmit = ()=>{
        if (message === '' || tech === ''){
            M.toast({html:"Please enter message and tech..."})
        }
        else{
            const editData = {
                id: current.id,
                message:message,
                tech:tech,
                attention:attention,
                date: new Date(),
            }

            updateLog(editData)

            M.toast({html: `Log updated by ${editData.tech}`})
            setMessage('')
            setAttention(false)
            setTech('')

        }
    }
        
    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Edit System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' name='message' value={message} onChange={e => setMessage(e.target.value)}/>
                        <label htmlFor='message' className='active'>Log Message</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <select name='tech' value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                            <option value='' disabled>
                                Select Technician
                            </option>
                            <option value='John Doe'>John Doe</option>
                            <option value='Sam Smith'>Sam Smith</option>
                            <option value='Sara Wilson'>Sara Wilson</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <p>
                            <label>
                                <input type='checkbox' className='filled-in' checked={attention} value={attention} onChange={()=> setAttention(!attention)}/>
                                <span>Need Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-blue waves-light btn'>
                    Enter
                </a>
            </div>
        </div>
  )
}

const modalStyle= {
    width: '75%',
    height: '75%',

}
const mapStateToProps = state =>({
    current:state.log.current,
})

export default connect(
    mapStateToProps,
    {updateLog}
)(EditLogModal)