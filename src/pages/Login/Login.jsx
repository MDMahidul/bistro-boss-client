import { useContext, useEffect, useState } from 'react';
import authbg from '../../assets/others/authentication.png'
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { signIn } = useContext(AuthContext);
    const [errors,setErrors] = useState('');
    const [disabled,setDisabled] = useState(true);

    useEffect(() => {
          loadCaptchaEnginge(6);
        }, []);

    const handleLogin=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password= form.password.value;

        signIn(email,password)
            .then(result=>{
                console.log(result.user);
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Login Successful!!!",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate(from,{replace:true});
            })
            .catch(error=>{
                console.log(error);
                setErrors(error.message)
            })
    }

    const handleCaptchValidation=(e)=>{
        const user_captcha_value = e.target.value;
         if (validateCaptcha(user_captcha_value) == true) {
                setDisabled(false);
         }
    }
    return (
      <>
        <Helmet>
          <title>Bistro Boss | Login</title>
        </Helmet>
        <div
          className="min-h-screen "
          style={{ backgroundImage: `url(${authbg})` }}
        >
          <div className="py-14 flex items-center justify-center">
            <div className="hero w-11/12 mx-auto  px-8 shadow-2xl">
              <div className="hero-content flex-col-reverse md:flex-row lg:space-x-16 py-12">
                <div className="text-center lg:text-left">
                  <img src={loginImg} alt="" />
                </div>
                <div className="card  w-full max-w-sm ">
                  <h1 className="text-4xl font-semibold text-center font-main_font text-gray-900">
                    Login now
                  </h1>
                  <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="text-base text-gray-800 font-medium">
                          Email
                        </span>
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered bg-white"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="text-base text-gray-800 font-medium">
                          Password
                        </span>
                      </label>
                      <input
                        required
                        type="password"
                        placeholder="password"
                        name="password"
                        className="input input-bordered bg-white"
                      />
                      <label className="label">
                        <a
                          href="#"
                          className="text-base text-gray-800 font-medium-alt link link-hover"
                        >
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <LoadCanvasTemplate />
                      </label>
                      <input
                        onBlur={handleCaptchValidation}
                        type="text"
                        placeholder="Type the captcha"
                        name="captcha"
                        className="input input-bordered bg-white"
                      />
                    </div>
                    {/* todo: make button disabled for captcha */}
                    <div className="form-control mt-6">
                      <input
                        disabled={false}
                        className="btn  bg-yellow-600 text-white"
                        type="submit"
                        value="Login"
                      />
                      <span className="label-text-alt text-base text-center text-red-600 mt-2 font-bold">
                        {errors}
                      </span>
                      <div className="flex justify-center">
                        <label className="label ">
                          <span className="">
                            New here?
                            <Link
                              to="/signup"
                              className="text-yellow-600 font-semibold link link-hover ml-2"
                            >
                              Create a New Account
                            </Link>
                          </span>
                        </label>
                      </div>
                    </div>
                  </form>
                  <SocialLogin></SocialLogin>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;