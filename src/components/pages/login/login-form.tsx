import Link from "next/link";

const LoginForm = () => {
    return(
        <form className="flex w-[60%] flex-col gap-10">

            <div className="flex gap-4 flex-col">
                <h3 className="text-4xl font-light">Login</h3>
                <p className="text-[#999]">Enter your email and password to login</p>
            </div>
            {/*-------------------------------------------------------------------------------*/}
            <p className="flex flex-col">
                <label>Email</label>
                <input
                    type="text"
                    placeholder="username@healthcare.com"
                    className="p-2 border-2 rounded border-gray-300"
                />
            </p>
            {/*-------------------------------------------------------------------------------*/}
            <p className="flex flex-col">
                <label>Password</label>
                <input
                    type="password"
                    placeholder="********"
                    className="p-2 border-2 rounded border-gray-300"
                />
            </p>
            <div className="flex flex-col gap-2">
                <button className="bg-[#8B3DDB] text-white p-2 rounded">
                    Sign in
                </button>
                <p className="text-[#999] text-sm">Don&#39;t have an account? Contact Support.</p>
                <Link href="#" className="text-[#8B3DDB]">Forgot Password?</Link>
            </div>

        </form>
    )
}

export default LoginForm;
