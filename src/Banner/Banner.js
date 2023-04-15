import React from 'react'
import classNames from 'classnames/bind'
import style from './Banner.module.scss'
import Img from '../Img/Img'

const cx = classNames.bind(style)

function Banner() {
  return (
    <div className={cx('banner')}>
        <Img url='https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner1.jpg?v=35775'/>
        <Img url ='https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner2.jpg?v=35775'/>
        <Img url='https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner3.jpg?v=35775'/>
        <Img url='https://theme.hstatic.net/1000026716/1000440777/14/xxxbanner4.jpg?v=35775'/>
    </div>
  )
}

export default Banner