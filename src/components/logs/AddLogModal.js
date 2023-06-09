import React, { useState } from 'react'
import M, { toast } from 'materialize-css'
import {connect} from 'react-redux'
import {addLogs} from '../../actions/logAction'
import PropTypes from 'prop-types'
import TechSelectOption from '../techs/TechSelectOption'

const AddLogModal = ({addLogs}) => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    const onSubmit = ()=>{
        if (message === '' || tech === ''){
            M.toast({html:"Please enter message and tech..."})
        }
        else{
            // console.log(message, tech, attention)
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }

            addLogs(newLog)

            toast({html: `Log Added by ${tech}`})

            setMessage('')
            setAttention(false)
            setTech('')
        }
    }
        
    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' name='message' value={message} onChange={e => setMessage(e.target.value)}/>
                        <label htmlFor='message' className='active'>Log Message</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <select name='tech' value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                            <TechSelectOption/>
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

AddLogModal.propTypes = {
    addLogs: PropTypes.func.isRequired,
}

export default connect(
    null,
    {addLogs}
)(AddLogModal)