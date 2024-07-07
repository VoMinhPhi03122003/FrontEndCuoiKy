import authenticationImage from '../img/authentication/authentication.jpg';
function Register(){
    return(
        <section className="form-input py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12 text-center">
                        <img width="80%" src={authenticationImage} alt=""/>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12">
                        <div className="h-100 d-flex align-items-center">
                            <form id="form-register" className="m-0 p-5 text-center">
                                <h5 className="mb-4">Đăng Ký</h5>
                                <span id="error-email" className="text-danger"></span>
                                <input id="email" className="w-100 mb-3" type="text" placeholder="Email" name="email"/>
                                <span id="error-password" className="text-danger"></span>
                                <input id="password" className="w-100 mb-3" type="password" placeholder="Mật khẩu"
                                       name="password"/>
                                <span id="error-confirm-pass" className="text-danger"></span>
                                <input id="confirm-pass" className="w-100 mb-4" type="password"
                                       placeholder="Nhập lại mật khẩu" name="confirm-pass"/>
                                <button className="btn next w-100 mb-3">Tiếp theo</button>
                                <span className="shotcut">Bạn đã có tài khoản? <a
                                    href="#">Đăng nhập</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register;