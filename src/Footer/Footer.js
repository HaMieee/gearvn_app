import React from 'react'
import classNames from 'classnames/bind'
import style from './Footer.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(style)


function Footer() {
  return (
    <div className={cx('footer')}>
        <div className={cx('top')}>
            <h3>công ty tnhh thương mại greavn</h3>
            <h3>EMAIL: CSKH@GEARVN.COM</h3>
            <div className={cx('top-top')}>
                <p>HỆ THỐNG TỔNG ĐÀI MIỄN PHÍ: </p>
                <span> (Làm việc từ 08h00 - 21h00)</span>
            </div>
            <div className={cx('top-mid')}>
                <p>Gọi mua hàng</p>
                <span>1800 6975</span>
            </div>
            <div className={cx('top-left')}>
                <p>Hỗ trợ khách hàng</p>
                <span>1800 6173</span>
            </div>
            <div className={cx('link')}>
                <Link>Chính sách bảo hành</Link>
                <Link>Chính sách thanh toán </Link>
                <Link>Chính sách giao hàng</Link>
                <Link>Chính sách bảo mật</Link>
            </div>
            <img src='https://theme.hstatic.net/1000026716/1000440777/14/20150827110756-dathongbao.png' alt=''/>
        </div>
        <div className={cx('mid')}>
            <h3>HỆ THỐNG CỬA HÀNG:</h3>
            <div className={cx('mid-top')}>
                <p>SHOWROOM HCM: </p>
                <span> (Làm việc từ 08h00 - 21h00)</span>
            </div>
            <p>- Địa chỉ 1: 78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình.</p>
            <p>- Địa chỉ 2: 905 Kha Vạn Cân, Phường Linh Tây, Thành phố Thủ Đức.</p>
            <p>- Địa chỉ 3: 1081 - 1083 Trần Hưng Đạo, Phường 5, Quận 5.</p>
            <p>- Địa chỉ 4: 415 An Dương Vương, Phường 10, Quận 6.</p>
            <div className={cx('mid-top')}>
                <p>SHOWROOM HN: </p>
                <span> (Làm việc từ 08h00 - 21h00)</span>
            </div>
            <p>- Địa chỉ 1: 162 - 164 Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội</p>
            <p>- Địa chỉ 2: 460 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội</p>
            <h3>TRUNG TÂM BẢO HÀNH:</h3>
            <p>- Địa chỉ : 436A/71 đường 3/2, Phường 12, Quận 10, Hồ Chí Minh.</p>
            <span>Mua </span>
            <Link>PC gaming, </Link>
            <Link>laptop gaming, </Link>
            <Link>cap màn hình, </Link>
            <Link>chuột máy tính, </Link>
            <Link>màn máy tính, </Link>
            <Link>máy tính để bàn, </Link>
            <Link>ghế gaming, </Link>
            <span>thiết bị chơi game như PS5 hàng đầu Việt Nam bảo hành chính hãng. Mua online nhận ưu đãi hấp dẫn với nhiều chương trình đặc biệt như ngày 8/3, b2s, noel...</span>
            <p>- Công ty TNHH Thương Mại Gearvn</p>
            <p>- GPKD số 0316517394 do Sở KH và ĐT TP Hồ Chí Minh cấp ngày 01/10/2020</p>
            <p>- GĐ/Sở hữu website: Tạ Thị Hà Mieeeeeeeeeee</p>
            <div className={cx('anh')}>
            <img src='https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=65147526-7602-46be-9047-e8c33f9fcbd3' alt=''/>
            </div>
        </div>
        <div className={cx('bot')}>
            <h3>FANPAGE</h3>
            <div className={cx('anhnen')}>
                <img src='https://scontent.xx.fbcdn.net/v/t39.30808-6/340263811_3313336398997105_8705091293136380247_n.png?stp=dst-png_p130x130&_nc_cat=106&ccb=1-7&_nc_sid=dd9801&_nc_ohc=BHVZwuP5qzgAX-xtvQ-&_nc_ht=scontent.xx&edm=ANTofVoEAAAA&oh=00_AfDNsriddhcsfkIYScwtoCN-Jp2pzTZE4KJB0yDxsDJwGQ&oe=643D9432' alt=''/>
                <div className={cx('thuonghieu')}>
                    <img src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-1/299828745_2149865795186558_7764138146005553525_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=751413&_nc_ohc=edO09gkBKlsAX9mTQFj&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfA5p-KvZGJfhqhADQm0WaxwcN3Rb_DFgoIBDgk60kPF6Q&oe=643C63DE' alt=''/>
                    <Link>Gearvn</Link>
                    <p>487.426 lượt thích</p>
                </div>
                    <button>Thích trang</button>
                    <button>Chia sẻ</button>
            </div>
        </div>
    </div>
  )
}

export default Footer