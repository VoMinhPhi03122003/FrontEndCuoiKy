import authenticationImage from '../../img/authentication/authentication.png';
import Header from '../Commons/Header';
import Footer from '../Commons/Footer';
import SectionBreadcrumb from "../Commons/SectionBreadcrumb";

import {Link} from "react-router-dom";

import {registerError} from "../../redux/redux_tai/Action";
import {isEmail, isEmpty} from "../../javascript/utils/Utils_Tai";
import {errorRegisterSelector} from "../../redux/redux_tai/Selectors";
import React, {useState} from "react";

import {useSelector, useDispatch} from "react-redux";

const breadcrumbs = [{name: "Trang chủ", link: "/"}, {name: "Đăng ký", link: "/register"}]

function SectionRegister(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_pass,setConfirm_pass] = useState("");
    const dispatch = useDispatch();
    const errorString = useSelector(errorRegisterSelector);
    const handleSubmit = (e) => {
        if(isEmpty(email) || isEmpty(password) || isEmpty(confirm_pass)){
            e.preventDefault();
            dispatch(registerError({
                errorRegister: "Hãy điền đầy đủ thông tin"
            }))
            console.log(errorString);
        }else if(!isEmail(email)){
            e.preventDefault();
            dispatch(registerError({
                errorRegister: "Nhập đúng định dạng email"
            }))
            console.log(errorString);
        }else if(password.localeCompare(confirm_pass) !==0){
            e.preventDefault();
            dispatch(registerError({
                errorRegister: "Xác thực mật khẩu không chính xác"
            }))
            console.log(errorString);
        }
        else{
            e.preventDefault();
            dispatch(registerError({
                errorRegister: ""
            }))
            console.log(errorString);
        }
    }
    const handleInputEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleInputPassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleInputRePassword = (e) =>{
        setConfirm_pass(e.target.value)
    }
    return(
        <section className="form-input py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                        <img width="80%" src={authenticationImage} alt=""/>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12">
                        <div className="h-100 d-flex align-items-center">
                            <form id="form-register" className="m-0 p-5 text-center" onSubmit={handleSubmit}>
                                <h5 className="mb-4">Đăng Ký</h5>
                                {errorString && <div className="alert alert-danger" role="alert">
                                    {errorString}
                                </div>}
                                <input value={email} onChange={handleInputEmail} id="email" className="w-100 mb-3" type="text" placeholder="Email" name="email"/>
                                <input value={password} onChange={handleInputPassword} id="password" className="w-100 mb-3" type="password" placeholder="Mật khẩu"
                                       name="password"/>
                                <input value={confirm_pass} onChange={handleInputRePassword} id="confirm-pass" className="w-100 mb-4" type="password"
                                       placeholder="Nhập lại mật khẩu" name="confirm-pass"/>
                                <button className="btn next w-100 mb-3">Tiếp theo</button>
                                <span className="shotcut">Bạn đã có tài khoản? <Link
                                    to="/login">Đăng nhập</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default function RegisterPage(){
    return(
        <>
            <Header/>
            <SectionBreadcrumb breadcrumbs={breadcrumbs}/>
            <SectionRegister/>
            <Footer/>
        </>
    )
};