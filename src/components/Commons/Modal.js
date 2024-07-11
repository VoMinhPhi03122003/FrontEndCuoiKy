import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Modal, ModalBody, ModalHeader} from "reactstrap"

import {
    payWithPaypal,
    payWithMomo,
    payWithViettelPay,
    payWithNganLuong
} from "../../javascript/utils/Utils_Tuyen";

import {showModalPayment} from "../../redux/redux_tuyen/Action_Tuyen"

import '../../css/modal.css'

export function ModalPayment() {

    const dispatch = useDispatch();
    const showModal = useSelector(state => state.modalReducer.modal_payment);

    const wallets = [
        {
            name: 'Paypal',
            link_image: 'https://sharecode.vn/assets/images/btn-paypal.png',
            eventWhenClick: payWithPaypal
        },
        {name: 'Momo', link_image: 'https://sharecode.vn/assets/images/vi-momo.png', eventWhenClick: payWithMomo},
        {
            name: 'ViettelPay',
            link_image: 'https://sharecode.vn/assets/images/vi-vietel-pay.png',
            eventWhenClick: payWithViettelPay
        },
        {
            name: 'NganLuong',
            link_image: 'https://sharecode.vn/assets/images/vi-ngan-luong.png',
            eventWhenClick: payWithNganLuong
        }
    ]

    return (
        <div>
            <Modal size='lg' isOpen={showModal} toggle={() => dispatch(showModalPayment(false))}>
                <ModalHeader className="header-modal">
                    <div className="header-content">
                        <div><span>Chọn đơn vị thanh toán</span></div>
                        <div>
                            <button className="custom-close-button" onClick={() => dispatch(showModalPayment(false))}>X
                            </button>
                        </div>
                    </div>
                </ModalHeader>
                <ModalBody className="body-modal">
                    <div className="body-content">
                        {
                            wallets.map((value, index) => (
                                <div className="electronic-wallet" onClick={value.eventWhenClick}>
                                    <img src={value.link_image} alt=""/>
                                </div>
                            ))
                        }
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}