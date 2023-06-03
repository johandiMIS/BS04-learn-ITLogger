import React from 'react'
import { connect } from 'react-redux'
import { deleteTechs } from '../../actions/techAction'

const TechItem = ({tech, deleteTechs}) => {
  const onDelete = () =>{
    deleteTechs(tech.id)
  }
  return (
    <li className='collection-item'> 
        <div>
        {tech.firstName}{' '}{tech.lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
            <i className='material-icons grey-text'>delete</i>
        </a>
        </div>
    </li>
  )
}

export default connect(
  null,
  {deleteTechs}
)(TechItem)