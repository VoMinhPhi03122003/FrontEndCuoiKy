import authenticationImage from '../img/authentication/authentication.png';
function ForgotPass(){
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
                                <button type="submit" className="btn next w-100 mb-3">Xác nhận</button>
                                <span className="shotcut">
                                <a className="mr-3" href="#">Đăng nhập?</a>
                                <a href="#">Đăng ký?</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ForgotPass;