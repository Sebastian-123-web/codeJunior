import React from 'react'
import SearchDevelopers from '../SearchDevelopers/SearchDevelopers'
import './Developers.css'
import { useState, useEffect } from 'react'
import { DataComDev } from '../../../../services/Company/DataComDevs'
import PerfildeveloperCompany from '../../Developers/Perfil/PerfilDeveloperCompany'

export default function Developers() {
  const [ data, setData ] = useState([]);
  const [ modal, setModal ] = useState(false);
  const [ userEmail, setUserEmail ]= useState("")

  const DataDevCom = async () => {
    const response = await DataComDev("developers");
    setData(response)
    console.log(response)
  }

  useEffect(() => {
    DataDevCom();
  }, [])


  return (
    <section className={`company-developers ${modal && 'activecompany-developers'}`}>
      <SearchDevelopers/>
      <section className='company-dev-users'>
        <section className='company-dev-users_box'>
          {data.length > 0 && data.map((event) => (
            <div className='company-dev-users__cards' onClick={() => {
              setModal(!modal);
              setUserEmail(event.correo);
            }}>

              <div className='users-cards-header'>
                <div className='users-cards-header__banner'>
                  <img src='https://timelinecovers.pro/facebook-cover/download/web-developer-coding-on-screen-hex2rgb-facebook-cover.jpg' alt=''/>  
                </div>
                <div className='users-cards-header__perfil'>
                  <img src='https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1425034585/content-items/001/228/844/sesion-estudio-barcelona-10-original.jpg?1425034585' alt=''/>  
                </div>
              </div> 

              <div className='users-cards-main'>
                <h1>{event.nombre} {event.apellido}</h1>
                  <div>{event.tecnologia.length > 0 && event.tecnologia.map((element) => (
                    <img src={element.icon} alt='icon-tecnologies' className='icon-tc'/>
                  ))}</div>  
              </div>

              <div className='users-cards-footer'>
                    
              </div>

            </div>
          ))}
        </section>
      </section>
      <section className={`company-dev-users-modal ${modal && 'activeCompany-dev-users-modal'}`} >
        <div className={`background-modal ${modal && 'activeBackground-modal'}`} onClick={() => setModal(!modal)}></div>
        <section className={`dev-users_modal ${modal && 'activeDev-users_modal'}`}>
          <PerfildeveloperCompany email={userEmail}/>
        </section>
      </section>
    </section>
  )
}
