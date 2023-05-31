import React from 'react'

const AddBtn = () => {
  return (
    <div class="fixed-action-btn">
        <a href='#add-log-modal' class="btn-floating btn-large blue btn modal-trigger">
            <i class="large material-icons">add</i>
        </a>
        <ul>
            <li><a href='#tech-list-modal' class="btn-floating green btn modal-trigger"><i class="material-icons">person</i></a></li>
            <li><a href='#add-tech-modal' class="btn-floating red darken-1 btn modal-trigger"><i class="material-icons">person_add</i></a></li>
        </ul>
    </div>
  )
}

export default AddBtn