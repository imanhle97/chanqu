import React from "react";
class Lienhe extends React.Component {
    render() {
        return (
            <section class="lienhe">
                <div class="tuvan grid">
                    <div class="title_lienhe">
                        <h3>
                            LIÊN HỆ TƯ VẤN
                        </h3>
                        <h4>
                            Quý khách hàng vui lòng liên hệ trực tiếp theo: HOTLINE TƯ VẤN 24/7: 039.811.1398 hoặc cung cấp nội dung theo mẫu bên dưới, chúng tôi hỗ trợ tư vấn trong thời gian sớm nhất. Chân thành cảm ơn Quý khách hàng đã quan tâm đến dịch vụ của chúng tôi.
                        </h4>
                        <div class="input_tuvan">
                            <div class="input_3">
                                <input type="text" placeholder="Họ và tên" />
                                <input type="text" placeholder="Số điện thoại" />
                                <input type="text" placeholder="Email" />
                            </div>
                            <div class="input_1">
                                <input type="text" placeholder="Nhu cầu của quý khách" />
                            </div>
                        </div>
                        <div class="btn_send">
                            <button><strong>Gửi Đi</strong></button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Lienhe;