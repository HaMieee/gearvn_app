import React from 'react'
import classNames from 'classnames/bind'
import style from './OnLine.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(style)


function OnLine() {
  return (
    <div className={cx('online')}>
      <div className={cx('left')}>
        <img src='https://theme.hstatic.net/1000026716/1000440777/14/bg-register.png' alt=''/>
        <p>Mua hàng online với nhiều ưu đãi tại GEARVN</p>
      </div>
      <div className={cx('right')}>
        <input placeholder='Nhập email của bạn..'/>
        <Link>Đăng ký </Link>
      </div>
    </div>
  )
}

export default OnLine