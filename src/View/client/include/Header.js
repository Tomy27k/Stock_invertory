import React,{useEffect,useState} from 'react'
import { NavLink ,useParams} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import logo from '../../../assets/images/Logo-stock.png'
import { useSelector, useDispatch } from 'react-redux'
const lngs = {
  en: { nativeName: 'English' },
  tr: { nativeName: 'Turkish' }
};
const Header = () => {
  const login = useSelector((state)=>state.authLogin.login)
  const admin = useSelector((state)=>state.authLogin.admin)
  const { t,i18n } = useTranslation();
  const {local} = useParams();
  useEffect(() => {
    i18n.changeLanguage(local);
    console.log(admin);
  },[])

  return (
    <header className=''>
      <div className="container d-flex  justify-content-between align-items-center">
      <div className="logo"><img src={logo} alt="" height='80px'/></div>
      
      <nav>
          <ul className='d-flex p-0 m-0'>
            <li><NavLink to={`/${local}/`} >{t('header.home')}</NavLink></li>
            <li><NavLink to={`/${local}/about`} >{t('header.about')}</NavLink></li>
            <li><NavLink to={`/${local}/contact`} >{t('header.contact')}</NavLink></li>
          </ul>          
      </nav>
      <div className="auth d-flex gap-3">
        {login ? <NavLink to={`/${local}/profile/profile_id`}>Profile</NavLink> 
        :
        (<div className='d-flex align-items'><NavLink to={`/${local}/auth/register`}>{t('header.register')}</NavLink><NavLink to={`/${local}/auth/login`}>{t('header.login')}</NavLink></div>)
        

        }
        {admin ? <NavLink to={`/admin`}>Admin</NavLink> :null

        }
      </div>
      </div>
    </header>
  )
}

export default Header