import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Swal from 'sweetalert2';

import {downloadFile} from "../../javascript/utils/Utils_Tuyen";

import {showModalPayment, updateStatePayment, resetCart} from "../../redux/redux_tuyen/Action_Tuyen";

import '../../css/modal.css';

export function ModalPayment() {
    const [showButtonDownload, setShowButtonDownload] = useState(false);
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.modalReducer.modal_payment);
    const cart = useSelector(state => state.cartReducer.cart);
    const checkPayment = useSelector(state => state.paymentReducer.payment);
    const payment = useSelector(state => state.paymentReducer);

    const wallets = [
        {
            name: 'Paypal',
            link_image: 'https://sharecode.vn/assets/images/btn-paypal.png',
        },
        {
            name: 'Momo',
            link_image: 'https://sharecode.vn/assets/images/vi-momo.png',
        },
        {
            name: 'ViettelPay',
            link_image: 'https://sharecode.vn/assets/images/vi-vietel-pay.png',
        },
        {
            name: 'NganLuong',
            link_image: 'https://sharecode.vn/assets/images/vi-ngan-luong.png',
        }
    ]

    let content;
    const [contentRight, setContentRight] = useState(<div>Bạn cần thanh toán để tải code qua chức năng này!</div>);
    if (cart.length > 0) {
        content = (
            <Container>
                <Row>
                    <Col md={8}>
                        <div style={{height: '250px', overflowY: 'auto', overflowX: 'hidden'}}>

                            {cart.map((value, index) => (
                                <Row className="mt-3" key={index}>
                                    <Col md={5}>
                                        <div style={{color: '#7fad39', fontWeight: 'bold'}}>[Mã
                                            code <span>{value.id}</span>]
                                        </div>
                                    </Col>
                                    <Col md={7}>
                                        <div>
                                            <Button variant="warning" disabled={showButtonDownload === false}
                                                     onClick={() => downloadFile(value.file.link)}><i
                                            className="fa fa-download"/> TẢI NGAY </Button>
                                        </div>
                                    </Col>
                                </Row>
                            ))}

                        </div>
                    </Col>
                    <Col md={4}>
                        {contentRight}
                    </Col>
                </Row>
            </Container>
        )
    } else {
        content = (<div></div>)
    }
    const clickPayment = (name_payment) => {

        dispatch(updateStatePayment(name_payment)); // Gửi Action đến Store để cập nhật trạng thái thanh toán

        setTimeout(() => {
            Swal.fire({
                title: '',
                text: 'Thanh toán đơn hàng thành công',
                icon: 'success',
                confirmButtonText: 'OK',
                timer: 3000, // Thời gian tự động tắt thông báo sau 3 giây
                timerProgressBar: true // Hiển thị thanh tiến trình đếm ngược
            }).then(() => {
                setShowButtonDownload(true);
                setContentRight(
                    <Row className="d-flex align-items-center justify-content-center">
                        <Row className="mt-3">
                            <div>Bạn đã thanh toán thành công</div>
                        </Row>
                        <Row className="mt-3">
                            <div>
                                <Button onClick={() => clickDownloadAll()} variant="success">
                                    <i className="fa fa-download"/> TẢI TẤT CẢ
                                </Button>
                            </div>
                        </Row>
                    </Row>
                )
            });
        }, 1000);
    };

    const clickCloseModal = () => {
        dispatch(showModalPayment(false)); // => đóng Modal thanh toán
        // nếu đơn hàng đã được thanh toán
        if (checkPayment === true) {
            dispatch(resetCart());
            dispatch(updateStatePayment("reset")); // => reset lại trạng thái thanh toán
        }

        setTimeout(() => {
            console.log("Trạng thái của statePayment: ", JSON.stringify(payment))
        }, 1000)

    }

    const clickDownloadAll = () => {
        Swal.fire({
            title: '',
            text: 'Chức năng này đang được phát triển',
            icon: 'warning',
            confirmButtonText: 'OK',
            timer: 3000, // Thời gian tự động tắt thông báo sau 3 giây
            timerProgressBar: true // Hiển thị thanh tiến trình đếm ngược
        }).then(() => {

        })
    }

    return (
        <div>
            <Modal size="lg" show={showModal} toggle={() => dispatch(showModalPayment(false))}>
                <Modal.Header className="header-modal">
                    <div className="header-content">
                        <div><span>Chọn đơn vị thanh toán</span></div>
                        <div>
                            <button className="custom-close-button"
                                    onClick={() => clickCloseModal()}>X
                            </button>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-content">
                        {
                            wallets.map((value, index) => (
                                <div className="electronic-wallet" key={index}
                                     onClick={() => clickPayment(value.name.toLowerCase())}>
                                    <img src={value.link_image} alt=""/>
                                </div>
                            ))
                        }
                    </div>
                    {content}
                </Modal.Body>
            </Modal>
        </div>
    )
}