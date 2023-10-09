import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";

const Resister = () => {
  const { name } = useContext(AuthContext);

  const handleResister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(form, email, password);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handleResister} className="card-body">
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
        </form>
      </div>
    </div>
  );
};

export default Resister;
