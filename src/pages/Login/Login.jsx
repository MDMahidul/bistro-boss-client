import React, { useContext, useEffect, useRef, useState } from 'react';
import authbg from '../../assets/others/authentication.png'
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const { signIn } = useContext(AuthContext);

    const captchaRef = useRef(null);
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
            })
            .catch(error=>{
                console.log(error);
            })
    }

    const handleGoogleSingin=()=>{
        
    }

    const handleCaptchValidation=()=>{
        const user_captcha_value = captchaRef.current.value;
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
                        ref={captchaRef}
                        type="text"
                        placeholder="Type the captcha"
                        name="captcha"
                        className="input input-bordered bg-white"
                      />
                      <button
                        className="btn btn-outline border-yellow-600 btn-xs text-yellow-600 mt-3"
                        onClick={handleCaptchValidation}
                      >
                        Check Captcha
                      </button>
                    </div>
                    <div className="form-control mt-6">
                      <input
                        disabled={disabled}
                        className="btn  bg-yellow-600 text-white"
                        type="submit"
                        value="Login"
                      />
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
                    <div>
                      <div className="text-center text-gray-600 mb-3">
                        <span className="text-xs">OR Sign In With</span>
                      </div>
                      <div className=" text-center">
                        <button
                          onClick={handleGoogleSingin}
                          className="rounded-full bg-blue-600 text-white p-2 hover:scale-110 transition-all"
                        >
                          <FaGoogle></FaGoogle>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;