import React from 'react'
import './PerfilBannerCompany.css'
import bannerCompanyDefault from '../../../assets/Perfil/banner-company-default.jpg'

export default function PerfilBannerCompany() {
  return (
      <section className='perfil-company'>
        <div className='company__banner'>
          <img src={bannerCompanyDefault} alt=''/>
          <div className='company_info'>
            <div className='company__info-img'>
              <img src='https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_1669060_bum_v97e29cc2.jpg' alt=''/>
            </div>
          </div>
        </div>
        <div className='company__description'>
          <h1 className='company__info-name'>Inetum Company</h1>
          <div className='company_share'>
            <a href='.'>Compartir</a>
          </div>
        </div>
      </section>
  )
}
