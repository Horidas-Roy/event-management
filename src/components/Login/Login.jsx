
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";

const Login = () => {

   const {SignInUser,googleSignIn,gitHubSignIn}=useContext(AuthContext);
   const location=useLocation();
   const navigate=useNavigate();


  const handleLogIn=(e)=>{
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const email=form.get('email');
    const password=form.get('password');

    // log in user
    SignInUser(email,password)
    .then(result=>{
      navigate(location?.state ? location.state : "/");
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error)
    })

  }

  const handleGoogleSignIn=()=>{
      googleSignIn()
      .then(result=>{
        navigate(location?.state ? location.state : "/");
        console.log(result.user)
      })
      .catch(error=>{
        console.log(error)
      })
  }

  const handleGithubSignIn=()=>{
    gitHubSignIn()
    .then(result=>{
      navigate(location?.state ? location.state : "/");
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handleLogIn} className="card-body">
          <h2 className="text-center font-semibold text-2xl">
            Please Resister
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Resister</button>
          </div>
          <p className="text-center">Don't have an accout? Please <Link to='/resister'><span className="font-semibold text-blue-700 underline">Resister</span></Link></p>
          <p className="text-center mt-3"><span onClick={handleGoogleSignIn} className="text-blue-600 font-semibold cursor-pointer underline">Sing In with Google</span> or <span onClick={handleGithubSignIn} className="text-blue-600 font-semibold cursor-pointer underline">Sign in with github </span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
