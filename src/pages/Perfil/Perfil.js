import React from 'react'
import './Perfil.css'
import PerfilBannerCompany from '../../components/Perfil/PerfilBannerCompany/PerfilBannerCompany'
import PerfilMainCompany from '../../components/Perfil/PerfilMainCompany/PerfilMainCompany'
import PerfilSocialCompany from '../../components/Perfil/PerfilSocialCompany/PerfilSocialCompany'

export default function Perfil() {
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
