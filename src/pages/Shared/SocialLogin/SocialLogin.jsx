import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { googleSignIn } = useContext(AuthContext);

        const handleGoogleSingin = () => {
          googleSignIn()
            .then((result) => {
              console.log(result.user);
              const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };
                fetch("http://localhost:5000/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then(() => {
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Sign Up Successful!!!",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate(from, { replace: true });
                    
                  });
            })
            .catch((error) => {
              console.log(error);
            });
        };
    return (
        <div className='-mt-7'>
          <div className="divider text-sm">OR Sign In With</div>
          <div className=" text-center">
            <button
              onClick={handleGoogleSingin}
              className="rounded-full bg-blue-600 text-white p-2 hover:scale-110 transition-all"
            >
              <FaGoogle></FaGoogle>
            </button>
          </div>
        </div>
    );
};

export default SocialLogin;