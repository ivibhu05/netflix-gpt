import Header from "../header";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute p-10 bg-black w-4/12 mt-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="text-3xl font-bold pb-6 ">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <button className="p-3 my-6 bg-red-600 w-full rounded-lg text-xl">
          Sign In
        </button>
        <p className="text-center mb-4 text-white text-xl">Forgot Password?</p>
        <p className="text-gray-400 mb-5">
          New to Netflix?{" "}
          <span className="text-white font-bold">Sign up now.</span>
        </p>
        <p className="text-left">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="www.google.com" target="_blank" className="text-blue-600">
            Learn more.
          </a>
        </p>
      </form>
    </div>
  );
}
