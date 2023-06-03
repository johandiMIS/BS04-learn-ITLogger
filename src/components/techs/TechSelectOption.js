import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const TechSelectOption = ({techs, loading}) => {
  return (
    <Fragment>
        <option value='' disabled>
            Select Technician
        </option>
        {techs.map((tech) => {
            return ( !loading && techs.length >= 0 && <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>{tech.firstName}{' '}{tech.lastName}</option> )
        })}
    </Fragment>
  )
}

TechSelectOption.propTypes = {
    techs: PropTypes.array.isRequired
}

const mapStateToProps = (state) =>( {
    techs: state.tech.techs,
    laoding: state.tech.loading,
})

export default connect(
    mapStateToProps
)(TechSelectOption)