import React from 'react'
import classNames from 'classnames/bind'
import style from './NavList.module.scss'

const cx = classNames.bind(style)


function NavList({text, url}) {
  return (
    <div  className={cx('wrapper')}>
        <img src={url} alt=''/>
        <span>{text}</span>
    </div>
  )
}

export default NavList