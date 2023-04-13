import React from 'react'
import classNames from 'classnames/bind'
import style from './Nav.module.scss'

const cx = classNames.bind(style)

function Nav({url,text}) {
  return (
    <div>
        <div  className={cx('wrapper')}>
        <img src={url} alt=''/>
        <span>{text}</span>
    </div>
    </div>
  )
}

export default Nav