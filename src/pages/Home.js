import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>

            <div className="wrapper">

                <section className="app">
                    <div className="container_mid">
                        <div className="aic_logo">
                            <img src="./assets/hinhanh/logo.png" alt="" />
                        </div>
                        <h4>Let's get it together !</h4>
                        <div className="content">
                            <h3>Dịch Vụ Thiết kế Web Chuyên nghiệp</h3>
                            <h3>Xây dựng phần mềm
                            </h3>
                            <h3>Xây dựng app điện thoại
                            </h3>
                            <h3>Quản trị dữ liệu
                            </h3>
                            <h3>Tư vấn IT , chuyển đổi số
                            </h3>
                            <h3>Hệ thống IOT
                            </h3>
                        </div>
                        <div className="nhanbaogia" id="myBtn">
                            <Link className="btn_nhanbaogia border_rad" to="/baogia" >NHẬN BÁO GIÁ</Link>
                            {/* <a className="btn_nhanbaogia">NHẬN BÁO GIÁ</a> */}
                        </div>
                    </div>
                </section>
                <section className="main">
                    <section className="gioithieu grid">
                        <div className="noidung">
                            <h2>CÔNG TY THIẾT KẾ WEB AIC</h2>
                            <div className="mota den">
                                Thời kỳ công nghệ 4.0 đang phát triển mạnh mẽ, Khách hàng chỉ cần bỏ ra chưa đến 10 giây là có
                                thể mua được hàng ưng ý thông qua hệ thống Website.<br />
                                AIC thành lập với định hướng mang tới cho khách hàng các dịch vụ thiết kế website, marketing
                                online, Công nghệ hiện đại nhằm nâng cao năng lực cạnh tranh, khẳng định vị thế trên thị trường.
                                Mục đích giúp người bán hàng tiếp cận được nhiều khách hàng tiềm năng thông qua Internet.<br />
                                AIC là công ty thiết kế web chuyên nghiệp cung cấp các dịch vụ: thiết kế đồ hoạ, thiết kế
                                website, sửa website, seo website ... Khi sử dụng dịch vụ của chúng tôi bạn sẽ sở hữu một
                                website chuẩn SEO, giao diện đẹp, độc đáo, sáng tạo; Hệ thống tính năng website đầy đủ, mang
                                tính ứng dụng cao và phù hợp với mục đích kinh doanh của từng doanh nghiệp.
                            </div>
                            <div className="xemthem">
                                <a href="/" className="btn_xemthem">Xem Thêm</a>
                            </div>
                        </div>
                        <div className="image">
                            <img src="https://bitgert.com/wp-content/uploads/2022/04/Untitled-design.png"
                                alt="" />

                        </div>
                    </section>

                </section>
                <section className="dichvu">
                    <div className="container_dichvu grid">
                        <div className="caption">
                            DỊCH VỤ CỦA AIC
                        </div>
                        <div className="list_dichvu">
                            <div className="col-1">
                                <div className="thietkeweb ">
                                    <div className="img_tk">
                                        <img src="https://mona.media/wp-content/uploads/2010/08/reason-2-266x154.png" alt="" />
                                    </div>
                                    <h2 className="title">
                                        Thiết kế website
                                    </h2>
                                    <div className="mota">
                                        Cam kết đạt 100% mọi yêu cầu khách hàng từ khâu thiết kế đến khâu bảo hành. Website
                                        chuẩn seo, tốc độ nhanh, giá cả hợp lý.
                                    </div>
                                </div>
                                <div className="thietkeweb ">
                                    <div className="img_tk">
                                        <img src="https://mona.media/wp-content/uploads/2010/08/about-2.png" alt="" />
                                    </div>
                                    <h2 className="title">
                                        Tư vấn IT , chuyển đổi số
                                    </h2>
                                    <div className="mota">Với nhiều kinh nghiệm đội ngũ SEO của AIC luôn biết cách SEO web lên top
                                        Google nhanh nhất, chi phí rẻ nhất
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="thietkeweb ">
                                    <div className="img_tk">
                                        <img src="https://mona.media/wp-content/uploads/2010/08/about-5.png" alt="" />
                                    </div>
                                    <h2 className="title">
                                        Xây dựng phần mềm, app điện thoại
                                    </h2>
                                    <div className="mota">Sửa lỗi website là một công việc đòi hỏi kinh nghiệm sửa chữa website lâu
                                        năm và khả năng nhạy bén để phân tích hệ thống.
                                    </div>
                                </div>
                                <div className="thietkeweb ">
                                    <div className="img_tk">
                                        <img src="https://mona.media/wp-content/uploads/2010/08/about-6.png" alt="" />
                                    </div>
                                    <h2 className="title">
                                        Quảng trị dữ liệu, hệ thống IOT
                                    </h2>
                                    <div className="mota">Chúng tôi muốn là một phòng marketing thuê ngoài của doanh nghiệp, chi phí
                                        hợp lý, đảm bảo tiến độ công việc.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="top_duan">
                    <div className="topduan_div grid">

                        <div className="item">
                            <ul>
                                <li>
                                    <div className="img">
                                        <img src="https://technext.github.io/servion/v1.0.0/assets/img/gallery/robinhood.png"
                                            alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src="https://technext.github.io/servion/v1.0.0/assets/img/gallery/reddit.png"
                                            alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src="https://technext.github.io/servion/v1.0.0/assets/img/gallery/upcase.png"
                                            alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src="https://technext.github.io/servion/v1.0.0/assets/img/gallery/hubspot.png"
                                            alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src="https://technext.github.io/servion/v1.0.0/assets/img/gallery/tunein.png"
                                            alt="" />
                                    </div>
                                </li>
                                <div style={{ clear: "both" }}></div>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="quytrinh">
                    <div className="container_quytrinh grid">
                        <h2 className="caption">
                            QUY TRÌNH THIẾT KẾ WEB AIC
                        </h2>
                        <div className="noidung">
                            <p>Để mang đến cho khách hàng, doanh nghiệp những sản phẩm thiết kế website chất lượng chuyên nghiệp
                                nhất, AIC áp dụng một quy trình thiết kế web chặt chẽ với các bước cơ bản như sau:
                            </p>
                            <h3>Bước 1: Tiếp nhận yêu cầu thiết kế web và tư vấn khách hàng.
                            </h3>
                            <h3>Bước 2: Báo giá thiết kế web - Ký hợp đồng thiết kế web
                            </h3>
                            <h3>Bước 3: Thiết kế giao diện web
                            </h3>
                            <h3>Bước 4: Phân tích, thiết kế, code website
                            </h3>
                            <h3>Bước 5: Phát hành bản beta cho khách hàng dùng thử
                            </h3>
                            <h3>Bước 6: Bàn giao và nghiệm thu
                            </h3>
                            <h3>Bước 7: Dịch vụ bảo hành - Bảo trì website
                            </h3>
                            <p>Đây là việc làm được thực hiện sau quá trình bàn giao website, chúng tôi sẽ hỗ trợ doanh nghiệp
                                mọi vấn đề kỹ thuật phát sinh trong quá trình sử dụng. Việc bảo hành được duy trì trong 36 tháng
                                kể từ ngày bàn giao nhưng nếu khách hàng dùng server hay hosting của chúng tôi sẽ được bảo hành
                                vĩnh viễn.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="cauhoi">
                    <div className="container_cauhoi grid">
                        <div className="img_cauhoi">
                            <img src="https://bitgert.com/wp-content/uploads/2022/04/Untitled-design-2-1.png" alt="" />
                        </div>
                        <div className="img_cauhoi">
                            <h2 className="caption_cauhoi">Câu hỏi thường gặp khi thiết kế web AIC
                            </h2>
                            <div className="title_cauhoi">
                                <ul>
                                    <li> <a href="/">Dịch vụ thiết kế website là gì? </a></li>
                                    <li> <a href="/">Giá thiết kế web như thế nào? </a></li>
                                    <li> <a href="/">Thời gian thiết kế web hết bao nhiêu thời gian? </a></li>
                                    <li> <a href="/">Có những loại website nào? </a></li>
                                    <li> <a href="/">Dịch vụ thiết kế Website ở đâu uy tín, chuyên nghiệp? </a></li>
                                    <li> <a href="/">Tên miền và hosting? </a></li>
                                    <li> <a href="/">Cam kết bảo mật thông tin không? </a></li>
                                    <li className="li-style-border">
                                        <a href="/">
                                            Tôi đã có website, nên dùng dịch vụ sửa web hay thiết kế web mới?
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ clear: "both" }}></div>
                    </div>

                </section>


            </div>
        </div>
    )}


export default Home