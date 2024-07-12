import authenticationImage from '../../img/authentication/authentication.png';
import Header from '../Commons/Header';
import SectionBreadcrumb from "../Commons/SectionBreadcrumb";
import Footer from '../Commons/Footer';
import {Link} from "react-router-dom";
import React from "react";

const breadcrumbs = [{name: "Trang chủ", link: "/"}, {name: "Quên mật khẩu", link: "/forgot-password"},
    {name: "Xác thực mật khẩu", link: "/verify-password"}]
function SectionVerifyPass(){
    return(
        <section className="form-input py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                        <img width="80%" src={authenticationImage} alt=""/>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12">
                        <div className="h-100 d-flex align-items-center">
                            <form className="m-0 p-5 text-center">
                                <h5 className="mb-4">Quên Mật Khẩu</h5>
                                <span id="error-email" className="text-danger"></span>
                                <input id="email" className="w-100 mb-4" type="text" placeholder="Email" name="email"/>
                                <input id="new-pass" className="w-100 mb-4 insert" type="password"
                                       placeholder="Mật khẩu mới" name="new-pass"/>
                                <input id="re-pass" className="w-100 mb-4 insert" type="password"
                                       placeholder="Xác nhận lại mật khẩu mới" name="confirm-pass"/>
                                <button type="submit" className="btn next w-100 mb-3">Xác nhận</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default function VerifyPassPage(){
    return(
        <>
            <Header/>
            <SectionBreadcrumb breadcrumbs={breadcrumbs}/>
            <SectionVerifyPass/>
            <Footer/>
        </>
    )
};