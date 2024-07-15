import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const Login = () => {
    const { signIn, user, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data;
        // console.log(email, password)

        signIn(email, password)
            .then(() => {
                toast("login successful")
                navigate(location?.state || "/")
            })
            .catch(() => {
                return toast("invalid-credential")
            })
    }

    if (user || loading) { return }

    return (
        <section className="bg-[#F5F5DC]">
            <div className="container flex items-center justify-center py-14 px-6 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full border-2 border-[#6F42C1] p-10 rounded-xl shadow-xl max-w-md">
                    <img className="w-auto mx-auto h-7 sm:h-8" src="https://i.ibb.co/tsknk7d/icon.png" alt="" />
                    <h1 className="mt-3 text-2xl text-center font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">sign In</h1>

                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <input name="email" type="email" {...register("email", { required: true })} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                        {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input name="password" {...register("password", { required: true })} type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                        {errors.password && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#6F42C1] rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign in
                        </button>


                        <div className="mt-6 text-center ">
                            <Link to="/register" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                Don’t have an account yet? Register
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;