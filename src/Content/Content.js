import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {MdKeyboardArrowRight} from 'react-icons/md'
import classNames from 'classnames/bind'



import style from './Content.module.scss'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'

const cx =classNames.bind(style)

function Content() {

  const [laptopData, setLaptopData] = useState([])
  console.log(Array.isArray(laptopData));
  useEffect( () =>{
    axios.get('https://backoffice.nodemy.vn/api/products?populate=*')
      .then( res => setLaptopData(res.data.data))
      .catch( error => console.log(error))
  }, [])



  return (
    <div className={cx('content')}>
      <div className={cx('top')}>
        <h2>PC GEARVN - GIAO HÀNG TIẾT KIỆM, CHI PHÍ KHỎI LO</h2>
        <Link>Xem tất cả <span><MdKeyboardArrowRight/></span></Link>
      </div>
      <div className={cx('mid')}>
        {laptopData.map( (item) => (
          <Cart value={item}/>
        ))}
      </div>
    </div>
  )
}

export default Content