import { Link } from "react-router-dom";
import NavBar from "../Layout/Shared/Navbar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../firebase/Providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div onSubmit={handleLogin} className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Login</button>
                            </div>
                        </form>
                        <p className="ml-8 pb-6">Dont have an account <Link className="text-blue-500" to='/register'>Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;