import React from 'react'
import './Perfil.css'
import PerfilBannerCompany from '../../../components/CompanyPage/Perfil/PerfilBannerCompany/PerfilBannerCompany'
import PerfilMainCompany from '../../../components/CompanyPage/Perfil/PerfilMainCompany/PerfilMainCompany'
import PerfilSocialCompany from '../../../components/CompanyPage/Perfil/PerfilSocialCompany/PerfilSocialCompany'

export default function PerfilCompany() {


  
  return (
    <div className='company'>

      <section className='perfil-company'>
        
      <PerfilBannerCompany/>

      <section className='about-company'>
        
        <PerfilMainCompany/>
        
        <section className='perfil-social-company'>

          <PerfilSocialCompany/>

        </section>
      </section>

      </section>
    
    </div>
  )
}
