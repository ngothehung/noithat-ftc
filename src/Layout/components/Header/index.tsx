import React from 'react'
import './header.scss'

import { FaSearch, FaHome } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='header'>
            <div className='header-wrapper'>
                <div className='top-bar '>
                    <div className='flex-row  container '>

                        <div className='pt-2 pb-2'>
                            chào mừng đến với hệ thông siêu thị nội thất FTC
                        </div>
                        <div className='nav'>
                            <ul>
                                <li><a href="">sản phẩm</a></li>
                                <li><a href="">tin tức</a></li>
                                <li><a href="">liên hệ</a></li>
                                <li><a href="">đăng nhập</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* header main */}
                <div className='header-main container mt-auto'>
                    <div className='header-inner'>
                        <div id='logo' className='logo'>
                            <h1 className='text-[50px]'>logo</h1>
                        </div>
                    </div>
                    <div className="search">
                        <div className="search-input">

                            <input type="text" placeholder="Tìm Kiếm..." />
                            <button>
                                <FaSearch />
                            </button>

                        </div>
                    </div>
                    <div className='nav-right'>
                        <ul>
                            <li>
                                <a href="tel:0964898718" title="Liên hệ Hotline 0964898718">
                                    <span className="evo-title">Liên hệ Hotline</span> <br />
                                    <span className="evo-hotline">0964 898 718</span>
                                </a>
                            </li>
                            <li><a href=""></a></li>
                        </ul>
                    </div>

                </div>
                <div className='header-button container'>
                    <div className="header-wrapper-button grid grid-cols-[285px,auto]">
                        <div className='header-button-nav nav-right'>

                            <div className='mega-menu-title'>
                                <AiOutlineMenuUnfold />
                                <li>
                                    danh muc san pham
                                </li>
                            </div>

                            <ul className="vertical-menu text-black">
                                <li><a href="">Nội thất gỗ</a></li>
                                <li><a href="">Phòng khách</a></li>
                                <li><a href="">Phòng làm việc</a></li>
                                <li><a href="">Phòng ngủ</a></li>
                                <li><a href="">Đồ dùng văn phòng</a></li>
                                <li><a href="">Đồ dùng vải</a></li>
                                <li><a href="">đèn đề co</a></li>
                                <li><a href="">đèn đề co</a></li>

                            </ul>
                        </div>

                        <div className='nav-left text-red-500'>
                            <ul className="horizontal-menu">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            <div className="slide">
                                <img src="http://noithat15.maugiaodien.com/wp-content/uploads/2020/09/slider_1.jpg" alt="" />
                            </div>

                        </div>
                    </div>
                    


                </div>
                <div className='header-nav'>

                </div>
            </div>
            <div className='text-red-500'>
            
            </div>
        </header>
        

    )
}

export default Header