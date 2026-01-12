import { useNavigate, useRouteError } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-10 text-center border border-gray-100">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center">
            <BiErrorCircle className="text-5xl text-red-500" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {error?.status || "Oops!"}
        </h1>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {error?.statusText || error?.message || "Something went wrong."}
        </p>

        <button
          onClick={() => navigate("/")}
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
