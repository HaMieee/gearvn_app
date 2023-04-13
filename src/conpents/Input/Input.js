import React from 'react'
import classNames from 'classnames/bind'
import style from './Input.module.scss'

const cx = classNames.bind(style)


function Input({icon,text}) {
  return (
    <div className= {cx('input')} >
    <div>{icon}</div>
    <input placeholder={text}/>
  </div>
  )
}

export default Input