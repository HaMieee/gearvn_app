import React from 'react'
import classNames from 'classnames/bind'
import style from './SingUp.module.scss'
import Header from '../Header/Header'
import Input from '../Input/Input'
import {FaUser} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {HiPhone} from 'react-icons/hi'
import {HiLockClosed} from 'react-icons/hi'
import Button from '../Button/Button'

const cx = classNames.bind(style)
function SingUp() {
  return (
    <div className= {cx('wrapper')}>
        <Header/>
        <div className= {cx('singup')}>
            <h1>Tạo tài khoản</h1>
            <Input icon = {<FaUser/>} text = 'Họ'/>
            <Input icon = {<FaUser/>} text = 'Tên'/>
            <Input icon = {<MdEmail/>} text = 'Email'/>
            <Input icon = {<HiPhone/>} text = 'Phone'/>
            <Input icon = {<HiLockClosed/>} text = 'Mật khẩu'/>
           <div className = {cx('buton')}>
                <Button text='Đăng ký'/>
                <Button text='Quay về'/>
           </div>
        </div>
    </div>
  )
}

export default SingUp