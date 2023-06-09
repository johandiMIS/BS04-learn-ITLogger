import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteLogs, setCurrent } from '../../actions/logAction'
import M from 'materialize-css'

const LogItem = ({log, deleteLogs, setCurrent}) => {
    const onDelete = (e) =>{
        deleteLogs(log.id)
        M.toast({html: "Log Deleted"})
    }
    const onEdit = (e) =>{
        setCurrent(log)
    }
    return (
        <li className='collection-item'>
            <div>
                <a href='#edit-log-modal' 
                    className={`modal-trigger ${log.attention? 'red-text':'blue-text'}`}
                    onClick={onEdit}
                >
                    {log.message}
                </a>
                <br/>
                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id} </span> 
                    last updated by{' '} 
                    <span className='black-text'>
                        {log.tech}
                    </span>
                    {' '} on <Moment format='MMMM Do YYYY, hh:mm:ss a'>{log.date}</Moment>
                </span>
                <a href='#!' className='secondary-content' onClick={onDelete}> 
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    
}

export default connect(
    null,
    {deleteLogs, setCurrent},
)(LogItem)