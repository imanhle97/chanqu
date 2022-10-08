import React, { useState } from "react";
import { Link } from 'react-router-dom';
const Header = () => {
    const [show, setShow] = useState(true)
    const [ulTag, setUlTag] = useState(false)
    return (
        <header className="header" id="header">
            <div className="nav">
                <div className="nav_common grid">
                    <div className="nav_left">
                        <div className="info">
                            <i className="fa-solid fa-square-phone icons"></i>
                            <div className="contact">
                                <a className="tel" href="tel:0398111398">
                                    039.811.1398
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <i className="fa-solid fa-location-dot icons"></i>
                            <div className="contact">
                                105 2/4 Nha Trang city
                            </div>
                        </div>
                    </div>
                    <div className="nav_left nav_right">
                        <div className="info">
                            <i className="fa-solid fa-envelope icons"></i>
                            <div className="contact">
                                <a className="tel" href="email:seannguyenit@gmail.com">
                                    seannguyenit@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <a href="/">
                                <i className="fa-solid fa-globe icons"></i>
                                <i className="fa-brands fa-facebook icons"></i>
                                <i className="fa-brands fa-twitter icons"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container grid">
                <div className="logo">

                    {/* <a href="" className="logo_link"> */}
                    <Link to="/" className="logo_link">
                        <img src="./assets/hinhanh/logo.png" alt="" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} />
                    </Link>
                </div>
                <ul className={show ? 'ul_list-item' : ''} id="mobile-menu">
                    <li className="li_list-item">
                        <a href="/" className="list_item-link"
                            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                        >Home</a>
                    </li>
                    <li className="li_list-item">
                        {/* <a className="list_item-link">About</a> */}
                        <Link
                            onClick={() => setShow(!show)}
                            className="list_item-link li_list-item" to="/about">
                            Giới thiệu
                        </Link>
                    </li>

                    <li
                        onClick={() => setUlTag(!ulTag)}
                        className="li_list-item">
                        <span href="/" className="list_item-link">Dịch vụ</span>
                        <a className="list_item-link dichvu_a">
                            <i className={ulTag ? "fa-solid fa-chevron-up dichvu_mobile" : "fa-solid fa-chevron-down dichvu_mobile"}></i>
                        </a>
                    </li>
                    {ulTag &&
                        <ul className="bar_menu_display">
                            <li>
                                <a href="/" className="menu_link">
                                    Dịch Vụ Thiết kế Web Chuyên nghiệp
                                </a>
                            </li>
                            <li><a href="/" className="menu_link">
                                Xây dựng phần mềm
                            </a></li>
                            <li><a href="/" className="menu_link">
                                Xây dựng app điện thoại
                            </a></li>
                            <li><a href="/" className="menu_link">
                                Quản trị dữ liệu
                            </a></li>
                            <li><a href="/" className="menu_link">
                                Tư vấn IT , chuyển đổi số
                            </a></li>
                            <li><a href="/" className="menu_link">
                                Hệ thống IOT
                            </a></li>
                        </ul>
                    }
                    <li className="li_list-item">
                        <a href="/"
                            onClick={() => setShow(!show)}
                            className="list_item-link">Tài liệu</a>
                    </li>

                    {/* <Link className="li_list-item" to="/tailieu">Tài liệu</Link> */}
                    <li className="li_list-item">
                        {/* <a className="list_item-link">Liên hệ</a> */}
                        <Link
                            onClick={() => setShow(!show)}
                            className="list_item-link li_list-item"
                            to="/lienhe">Liên Hệ</Link>
                    </li>
                </ul>
                <div className="bar_menu" id="bar-menu">
                    <i
                        onClick={() => setShow(!show)}
                        className={show ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
                </div>
                <Link className="li_list-item baogia" id="baogia" to="/baogia" >Báo giá</Link>
                {/* <div className="li_list-item" id="baogia"> */}
                {/* <a className="btn_baogia">Báo giá</a> */}

                {/* </div> */}
            </div>
        </header>
    )
}

export default Header