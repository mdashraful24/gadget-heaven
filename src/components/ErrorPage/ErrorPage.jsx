import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md space-y-5">
                    <h1 className="text-5xl font-bold">404</h1>
                    <p className="text-lg">Sorry, we couldn't find this page. But don't worry, you can find many other things on our <Link to={"/"} className="underline text-[#9538E2] leading-8">homepage</Link>.</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;