import authenticationImage from '../../img/authentication/authentication.png';
import Header from '../Commons/Header';
import Footer from '../Commons/Footer';
import breadcrumb_1 from "../../img/breadcrumb/breadcrumb_1.png";
import {Link} from "react-router-dom";
function Breadcrumb(){
    return(
        <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${breadcrumb_1})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <div className="breadcrumb__option">
                                <Link to="/">Trang chủ</Link>
                                <Link to="/profile">Hồ sơ của tôi</Link>
                                <Link to="/change-password">Đổi mật khẩu</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
function SectionChangePass(){
    return(
        <section className="form-input py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                        <img width="80%" src={authenticationImage} alt=""/>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12">
                        <div className="h-100 d-flex align-items-center">
                            <form id="form-change-pass" className="m-0 p-5 text-center">
                                <h5 className="mb-4">Đổi Mật Khẩu</h5>
                                <span id="error-old-pass" className="text-danger"></span>
                                <input id="old-pass" className="w-100 mb-3 insert" type="password"
                                       placeholder="Mật khẩu cũ" name="old-pass"/>
                                <span id="error-new-pass" className="text-danger"></span>
                                <input id="new-pass" className="w-100 mb-3 insert" type="password"
                                       placeholder="Mật khẩu mới" name="new-pass"/>
                                <span id="error-re-pass" className="text-danger"></span>
                                <input id="re-pass" className="w-100 mb-4 insert" type="password"
                                       placeholder="Xác nhận lại mật khẩu mới" name="confirm-pass"/>
                                <button className="btn next w-100 mb-3" id="confirm-change">Xác nhận</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default function ChangePassPage(){
    return(
        <>
            <Header/>
            <Breadcrumb/>
            <SectionChangePass/>
            <Footer/>
        </>
    )
};