import React from 'react'
import '../Header/header.scss'
import './index.scss'
type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='footer  '>
            <div className="footer-wrapper">
                <div className="column">
                    <h2>KẾT NỐI VỚI NỘI THẤT FTC</h2>
                    <p>Follow us</p>
                    <p><a href="">Facebook</a></p>
                    <p><a href="">intagram</a></p>
                </div>
                <div className="column">
                    <h2>NỘI THẤT FTC</h2>
                    <p><a href="">giới thiệu về công ty</a></p>
                    <p>Tuyển dụng</p>
                </div>
                <div className="column">
                    <h2>DANH MỤC</h2>
                    <p>Phòng khách</p>
                    <p>Phòng bếp</p>
                    <p>Phòng làm việc</p>
                    <p>Phòng ngủ</p>
                    <p>Chăn ga đệm</p>
                </div>
                <div className="column">
                    <h2>LIÊN HỆ</h2>
                    <p>Đặt hàng Online: 0964898718</p>
                    <p>Email: noithatftc@gmail.com</p>
                    
                </div>
            </div>
            <div></div>
        </footer>
    )
}

export default Footer