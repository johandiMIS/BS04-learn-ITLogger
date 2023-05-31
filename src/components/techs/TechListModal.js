import React, { useEffect, useState } from 'react'
import TechItem from './TechItem'

const TechListModal = () => {
    const [techs, setTechs] = useState([])
    const [loading, setLoading] = useState(false)

    const getTechs = async () =>{
        setLoading(true)
        const res = await fetch('/techs')
        const data = await res.json()

        setTechs(data)
        setLoading(false)
    }

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
                        // techs.map((tech) => <LogItem tech={tech} key={log.id}/>)
                        techs.map((tech) => <TechItem tech={tech}/> )
                    )}
                </ul>
            </div>
        </div>
    )
}


export default TechListModal