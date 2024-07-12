import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {
    payWithPaypal,
    payWithMomo,
    payWithViettelPay,
    payWithNganLuong,
    downloadFile
} from "../../javascript/utils/Utils_Tuyen";

import {showModalPayment} from "../../redux/redux_tuyen/Action_Tuyen";

import '../../css/modal.css';

export function ModalPayment() {

    const dispatch = useDispatch();
    const showModal = useSelector(state => state.modalReducer.modal_payment);
    const cart = useSelector(state => state.cartReducer.cart);

    const wallets = [
        {
            name: 'Paypal',
            link_image: 'https://sharecode.vn/assets/images/btn-paypal.png',
            eventWhenClick: () => {
                payWithPaypal()
            }
        },
        {
            name: 'Momo',
            link_image: 'https://sharecode.vn/assets/images/vi-momo.png',
            eventWhenClick: () => {
                payWithMomo(cart)
            }
        },
        {
            name: 'ViettelPay',
            link_image: 'https://sharecode.vn/assets/images/vi-vietel-pay.png',
            eventWhenClick: () => {
                payWithViettelPay()
            }
        },
        {
            name: 'NganLuong',
            link_image: 'https://sharecode.vn/assets/images/vi-ngan-luong.png',
            eventWhenClick: () => {
                payWithNganLuong()
            }
        }
    ]

    let content;
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
                                        <div><Button variant="warning"
                                                     onClick={() => downloadFile(value.file.link)}><i
                                            className="fa fa-download"/> TẢI NGAY </Button>
                                        </div>
                                    </Col>
                                </Row>
                            ))}

                        </div>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        )
    } else {
        content = (<div></div>)
    }

    return (
        <div>
            <Modal size="lg" show={showModal} toggle={() => dispatch(showModalPayment(false))}>
                <Modal.Header className="header-modal">
                    <div className="header-content">
                        <div><span>Chọn đơn vị thanh toán</span></div>
                        <div>
                            <button className="custom-close-button"
                                    onClick={() => dispatch(showModalPayment(false))}>X
                            </button>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-content">
                        {
                            wallets.map((value, index) => (
                                <div className="electronic-wallet" onClick={value.eventWhenClick}>
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