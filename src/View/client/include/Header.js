import React,{useEffect,useState} from 'react'
import { NavLink ,useParams} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  tr: { nativeName: 'Turkish' }
};
const Header = () => {
  const [isLogin, setIsLogin]=useState(true)
  const { t,i18n } = useTranslation();
  const {local} = useParams()
  useEffect(() => {
    i18n.changeLanguage(local)
  },[])

  return (
    <header className='d-flex container        justify-content-between align-items-center'>
      <div className="logo">Logo</div>
      <nav>
          <ul className='d-flex p-0 m-0'>
            <li><NavLink className='btn'>{t('header.home')}</NavLink></li>
            <li><NavLink className='btn'>{t('header.about')}</NavLink></li>
            <li><NavLink className='btn'>{t('header.contact')}</NavLink></li>
          </ul>          
      </nav>
      <div className="auth">
        {isLogin ? <NavLink to={`/${local}/profile_id`}>Profile</NavLink> 
        :
        (<div><NavLink>Register</NavLink><NavLink>Login</NavLink></div>)
        

        }
      </div>
    </header>
  )
}

export default Header