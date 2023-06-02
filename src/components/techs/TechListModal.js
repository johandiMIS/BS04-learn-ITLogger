import React, { useEffect } from 'react'
import TechItem from './TechItem'
import { connect } from 'react-redux'
import { getTechs } from '../../actions/techAction'

const TechListModal = ({tech:{techs, loading}, getTechs}) => {
    useEffect(()=>{
        getTechs()
        // eslint-disable-next-line
    }, [])

    return (
        <div id='tech-list-modal' className='modal'>
            <div className='modal-content'>
                <h4>Technician List</h4>
                <ul className='collection'>
                    {!loading && techs.length <= 0? (<p className='center'>  No Tech To Show...</p>):(
                        techs.map((tech) => <TechItem tech={tech} key={tech.id}/> )
                    )}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    tech: state.tech,
})
export default connect(
    mapStateToProps,
    {getTechs}

)(TechListModal)