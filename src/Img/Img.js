import React from 'react'
import classNames from 'classnames/bind'
import style from './Img.module.scss'

const cx = classNames.bind(style)

function Img({url}) {
  return (
    <div className= {cx('imG')}>
        <img src={url} alt=''/>
    </div>
  )
}

export default Img