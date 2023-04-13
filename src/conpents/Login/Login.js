import React from 'react'
import classNames from 'classnames/bind'
import style from './Login.module.scss'
import Header from '../Header/Header'
import Input from '../Input/Input'
import {MdEmail} from 'react-icons/md'
import {HiLockClosed} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import OnLine from '../../OnLine/OnLine'

const cx = classNames.bind(style)
function Login() {
  return (
    <div className= {cx('wrapper')}>
        <Header/>
       <div className={cx('login')}>
              <h1>Đăng nhập</h1>
              <Input icon={<MdEmail/>} text='Email' />
              <Input icon = {<HiLockClosed/>} text='Mật khẩu' />
              <button>Đăng nhập</button>
              <div className= {cx('botom')}>
                <Link>Quên mật khẩu? </Link>
                <span>hoặc </span>
                <Link to='/singup'>Đăng ký</Link>
              </div>

       </div>
       <OnLine/>
    </div>
  )
}

export default Login