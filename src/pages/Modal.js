import React, { useEffect, useState } from "react";
import Header from "../components/Header";
const Modal = ({open}) => {
    if(!open) return null
    return (
        <div id="myModal" className="modal">
            <div className="modal_content">
                <div className="form_dangky">
                    <div className="form_dangky-header">
                        <h3 className="form_dangky-heading">
                            Đăng ký
                        </h3>
                        <span className="form_dangky-login ">
                            Đăng nhập
                        </span>
                    </div>
                    <div className="form_info">
                        <div className="form_group">
                            <input type="password" className="form_input" placeholder="Tên khách hàng" />
                        </div>
                        <div className="form_group">
                            <input type="text" className="form_input" placeholder="Email của bạn" />
                        </div>
                        <div className="form_group">
                            <input type="password" className="form_input" placeholder="Mật khẩu của bạn" />
                        </div>
                        <div className="form_group">
                            <input type="password" className="form_input" placeholder="Nhập lại mật khẩu" />
                        </div>
                        <div className="form_group">
                            <input type="password" className="form_input" placeholder="Số điện thoại" />
                        </div>
                    </div>
                    <div className="form_controls">
                        <button className="btn btn_back">TRỞ LẠI</button>
                        <button className="btn btn-color">ĐĂNG KÝ</button>
                        <div style={{ clear: "both" }}></div>
                    </div>
                    <div className="hotline">
                        <span>Hotline:</span>
                        <a href="tel:0398111398" className="sdt_hotline">0398.111.398 (SeanNguyen)</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal