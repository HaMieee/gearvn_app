import React from 'react'
import classNames from 'classnames/bind'
import style from './Header.module.scss'
import {BsList} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import NavList from '../NavList'
const cx = classNames.bind(style)

function Header() {
  return (
    <div className={cx('Header')}>
        <div className={cx('Header-top')}>
            <div className={cx('logo')}>
                <img src='https://theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=35714' alt=''/>
            </div>
            <div className={cx('Header-item')}>
               <div className={cx('top')}>
                    <div className={cx('sreach')}>
                        <input placeholder='Nhập mã hoặc tên sản phẩm...'></input>
                        <button><BiSearchAlt2/></button>
                    </div>
                    <div className={cx('infor')}>
                        <ul>
                                <li>
                                    <img src='https://theme.hstatic.net/1000026716/1000440777/14/ak1.png?v=35714' alt=''/>
                                    <Link to='/singup' >Đăng ký</Link>
                                </li>
                                <li>
                                    <img src='https://theme.hstatic.net/1000026716/1000440777/14/ak3.png?v=35714' alt=''/>
                                    <Link to='/login'>Đăng nhập</Link>
                                </li>
                                <li>
                                    <img src='https://theme.hstatic.net/1000026716/1000440777/14/ak4.png?v=35714' alt=''/>
                                    <Link>Khuyến mãi</Link>
                                </li>
                                <li>
                                    <img src='https://theme.hstatic.net/1000026716/1000440777/14/ak5.png?v=35714' alt=''/>
                                    <Link>Gio hàng</Link>
                                    <p>0</p>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('bottom')}>
                    <ul>
                        <li>
                            <img src='https://theme.hstatic.net/1000026716/1000440777/14/tongdai-icon.png?v=35714' alt=''/>
                            <span>Tổng đài</span>
                        </li>
                        <li>
                            <img src='https://theme.hstatic.net/1000026716/1000440777/14/youtube.png?v=35714' alt=''/>
                            <span>Videos</span>
                        </li>
                        <li>
                            <img src='https://theme.hstatic.net/1000026716/1000440777/14/gNewsFavIco.png?v=35714' alt=''/>
                            <span>Tin công nghệ</span>
                        </li>
                        <li>
                            <img src='https://theme.hstatic.net/1000026716/1000440777/14/logo_hr.png?v=35714' alt=''/>
                            <span>Tuyển dụng</span>
                        </li>
                        <li>
                            <img src='https://file.hstatic.net/200000397757/file/car-dealer_97df9ccd23f243e3a4da757eb19afe6c.png' alt=''/>
                            <span>Hệ thống showroom</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <hr></hr>
        <div className={cx('Header-bottom')}>
            <div className={cx('category')}>
                <BsList/>
                <span>Danh mục sản phẩm </span>
            </div>
            <NavList text='hướng dẫn thanh toán' url='https://theme.hstatic.net/1000026716/1000440777/14/xk2s.png?v=35723' />
            <NavList text='hướng dẫn trả góp' url='https://theme.hstatic.net/1000026716/1000440777/14/xk2s.png?v=35723'/>
            <NavList text='Chính sách bảo hành'url='https://theme.hstatic.net/1000026716/1000440777/14/xk4s.png?v=35723' />
            <NavList text='Chính sách vận chuyển' url='https://theme.hstatic.net/1000026716/1000440777/14/xk5s.png?v=35723' />
        </div>
    </div>

  )
}

export default Header