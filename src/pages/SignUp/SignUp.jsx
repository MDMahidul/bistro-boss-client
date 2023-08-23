import { useForm } from "react-hook-form";
import authbg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //get the email and pass from the obj
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photourl)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch("https://bistro-boss-server-xi-peach.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign Up Successful!!!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate(from, { replace: true });
                }
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div
        className="min-h-screen "
        style={{ backgroundImage: `url(${authbg})` }}
      >
        <div className="py-14 flex items-center justify-center">
          <div className="hero w-11/12 mx-auto  px-8 shadow-2xl">
            <div className="hero-content flex-col md:flex-row-reverse lg:space-x-16 py-12">
              <div className="text-center lg:text-left">
                <img src={loginImg} alt="" />
              </div>
              <div className="card  w-full max-w-sm ">
                <h1 className="text-4xl font-semibold text-center font-main_font text-gray-900">
                  Sign Up
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="text-base text-gray-800 font-medium">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      placeholder=" name"
                      className="input input-bordered bg-white"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        Name is required *
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-base text-gray-800 font-medium">
                        Photo Url
                      </span>
                    </label>
                    <input
                      type="url"
                      {...register("photourl", { required: true })}
                      placeholder=" photo url"
                      className="input input-bordered bg-white"
                    />
                    {errors.photourl && (
                      <span className="text-red-500 text-sm">
                        Photo Url is required *
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-base text-gray-800 font-medium">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="email"
                      className="input input-bordered bg-white"
                    />
                  </div>
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      Email is required *
                    </span>
                  )}
                  <div className="form-control">
                    <label className="label">
                      <span className="text-base text-gray-800 font-medium">
                        Password
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 10,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                      className="input input-bordered bg-white"
                    />
                    {errors.password?.type === "required" && (
                      <span className="text-red-500 text-sm">
                        Email is required *
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-500 text-sm">
                        At least 6 digits required *
                      </span>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <span className="text-red-500 text-sm">
                        At most 10 digits can be used *
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-500 text-sm">
                        Password must have one uppercase, one lowercase,one
                        number and one special character *
                      </span>
                    )}
                  </div>
                  {/* <div className="form-control">
                  
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
                  </div> */}
                  <div className="form-control mt-6">
                    <input
                      className="btn  bg-yellow-600 text-white border-0"
                      type="submit"
                      value="Login"
                    />
                    <div className="flex justify-center">
                      <label className="label ">
                        <span className="">
                          Already have account?
                          <Link
                            to="/login"
                            className="text-yellow-600 font-semibold link link-hover ml-2"
                          >
                            Go to Login
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

export default SignUp;
