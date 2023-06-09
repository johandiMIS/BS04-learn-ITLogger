import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logAction'

const Logs = ({log: {logs, loading}, getLogs}) => {

    useEffect(()=>{
        getLogs()
        // eslint-disable-next-line
    }, [])

    if (loading){
        return <Preloader/>
    }


    return (
        <ul className='collection collection-with-header'>
            <li className='collection-item collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length <= 0? (<p className='center'>  No Logs To Show...</p>):(
                logs.map((log) => <LogItem log={log} key={log.id}/>)
            )}
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    log: state.log,
})

export default connect(
    mapStateToProps, 
    {getLogs}
)(Logs)