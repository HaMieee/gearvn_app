import React from 'react'
import classNames from 'classnames/bind'
import style from './Button.module.scss'

const cx = classNames.bind(style)

function Button({text}) {
  return (
    <div className={cx('wrapper')}>
        <button>{text}</button>
    </div>
  )
}

export default Button