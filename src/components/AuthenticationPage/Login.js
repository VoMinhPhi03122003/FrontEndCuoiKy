import authenticationImage from '../../img/authentication/authentication.png';
import logoGoogle from '../../img/authentication/logo-google.png';
import logoFacebook from '../../img/authentication/logo-fb.png';

function Login() {
    return (
        <section className="form-input py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                        <img width="80%" src={authenticationImage} alt=""/>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12">
                        <div className="h-100 d-flex align-items-center">
                            <form id="form-login" className="m-0 p-5 text-center" name="form_login">
                                <h5 className="mb-4">Đăng Nhập</h5>
                                <span id="error-email" className="error-mess text-danger"></span>
                                <input id="email" className="w-100 mb-3" type="email" placeholder="Email" name="email"/>
                                <span id="error-password" className="error-mess text-danger"></span>
                                <input id="password" className="w-100 mb-4" type="password" placeholder="Mật khẩu"
                                       name="password"/>
                                <button type="submit" className="btn next w-100">Đăng nhập</button>
                                <span className="or d-inline-block text-uppercase my-4 position-relative">Hoặc</span>
                                <a id="google-login-button"
                                   className="google d-flex justify-content-center w-100 mb-3">
                                    <img src={logoGoogle} width="25px" className="mr-2"/>Google</a>
                                <a id="fb-login-button"
                                   className="google d-flex justify-content-center w-100 mb-3">
                                    <img src={logoFacebook} width="30px" className="mr-2"/>Facebook</a>
                                <span className="shotcut">
                                <a className="mr-3" href="#">Quên mật khẩu?</a>
                                <a href="#">Đăng ký?</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}
export default Login;