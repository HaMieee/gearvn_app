import React from 'react'
import classNames from 'classnames/bind'
import style from './Cart.module.scss'

const cx = classNames.bind(style)


function Cart({value}) {
  const oldPrice = value.attributes.oldPrice
  const price = value.attributes.price

  const disCount = Math.floor(((oldPrice - price)/oldPrice)*100)
  
  return (
    <div className={cx('wrapper')}>
      <div className={cx('cart')}>
        <img src ='https://product.hstatic.net/1000026716/product/hw_r3_74803326b0484b748cc7525f0530fbea_large.png' alt=''/> 
        <h2>{value.attributes.name}</h2>
        <div className={cx('gia')}>
          <del>{value.attributes.oldPrice}đ</del>
          <p>{value.attributes.price}đ</p>
          <div className={cx('giamgia')}>-{disCount}%</div>
        </div>
        
      </div>
    </div>
  )
}

export default Cart