import React from 'react'
import classNames from 'classnames/bind'
import style from './Category.module.scss'
import Nav from '../conpents/Nav/Nav'
import Img from '../Img/Img'

const cx = classNames.bind(style)

function Category() {
  return (
    <div className= {cx('wrapper')}>
        <div className={cx('left')}>
            <Nav url='https://theme.hstatic.net/1000026716/1000440777/14/xxx11.png?v=35725' text = 'Laptop'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx11.png?v=35725' text='Laptop Gamimg'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx23.png?v=35725' text='PC KM Đặc biệt'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx23.png?v=35725' text='PC Gaming'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx23.png?v=35725' text='PC Đồ họa'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx16.png?v=35725' text='PC Doanh nghiệp'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx27.png?v=35725' text='Linh kiện PC'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx28.png?v=35725' text='Apple'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx19.png?v=35725' text='Màn hình'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx210.png?v=35725' text='Bàn phím'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx211.png?v=35725' text='Chuột + Lót Chuột'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx212.png?v=35725' text='Tai nghe - Loa'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx213.png?v=35725' text='Ghế - Bàn'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx214.png?v=35725' text='Phần mềm & Mạng'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx215.png?v=35725' text='Phụ kiện'/>
            <Nav url ='https://theme.hstatic.net/1000026716/1000440777/14/xxx216.png?v=35725' text='Thủ thuật giải đáp'/>
        </div>
        <div className={cx('right')}>
          <div className= {cx('top')}>
              <div className= {cx('top_left')}>
                  <img src='https://theme.hstatic.net/1000026716/1000440777/14/slideshow_7.jpg?v=35734' alt=''/>
              </div>
              <div className={cx('top_right')}>
                  <Img url='https://theme.hstatic.net/1000026716/1000440777/14/solid1.jpg?v=35734' />
                  <Img url='https://theme.hstatic.net/1000026716/1000440777/14/solid2.jpg?v=35734' />
              </div>
          </div>
          <div className= {cx('botom')}>
              <Img url='https://theme.hstatic.net/1000026716/1000440777/14/solid4.jpg?v=35734'/>
              <Img url='https://theme.hstatic.net/1000026716/1000440777/14/solid5.jpg?v=35734'/>
              <Img url='https://theme.hstatic.net/1000026716/1000440777/14/solid3.jpg?v=35734'/>

          </div>
            
        </div>
    </div>
  )
}

export default Category