import React, { useEffect, useState } from 'react'
import './Perfil.css'
import PerfilBannerCompany from '../../../components/CompanyPage/Perfil/PerfilBannerCompany/PerfilBannerCompany'
import PerfilMainCompany from '../../../components/CompanyPage/Perfil/PerfilMainCompany/PerfilMainCompany'
import PerfilSocialCompany from '../../../components/CompanyPage/Perfil/PerfilSocialCompany/PerfilSocialCompany'
import { DataDevCom } from '../../../services/DataDevCom'
import { useParams } from 'react-router-dom'
import PerfilJobsCompany from '../../../components/CompanyPage/Perfil/PerfilJobsCompany/PerfilJobsCompany'

export default function PerfilCompany() {

  const { mn } = useParams();

  const [ dataEmp, setDataEmp ] = useState([]);

  const fetchDataEmp = async(data) => {
    const response = await DataDevCom(mn, data)
    setDataEmp(response[0]);
    console.log(response[0].redes)
  }

  useEffect(() => {
    fetchDataEmp("business")
  }, [])
  
  return (
    <div className='company'>
      <section className='perfil-company'>
        
        <PerfilBannerCompany nombreEmpresa={dataEmp.nombre_empresa} logoEmpresa={dataEmp.logo_empresa}/>

        <section className='about-company'>
          <div className='section-company_left'>
            <section>
              <PerfilMainCompany descripcionEmpresa={dataEmp.biografia}  />
            </section>

            <section className='jobs-company-section'>
              <PerfilJobsCompany puestosEmpresa={dataEmp.puestos_trabajos} nombreEmpresa={dataEmp.nombre_empresa} logoEmpresa={dataEmp.logo_empresa} />
            </section>
          </div>

          <div className='section-company_right'>
            <section className='perfil-social-company'>
              <PerfilSocialCompany redesEmpresa={dataEmp.redes} sectorEmpresa={dataEmp.sector} departamentoEmpresa={dataEmp.departamento}/>
            </section>
          </div>


        </section>

      </section>
    </div>
  )
}
