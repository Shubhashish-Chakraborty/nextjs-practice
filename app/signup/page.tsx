import Link from "next/link";

export default function Signup() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">

            <div className="cursor-pointer">
                <Link href={"/"}>
                    <img src="https://studywithshubh.tech/swsBrandImg.png" width="200" alt="swsbrandimg" />
                </Link>
            </div>

            <div className="mt-5 text-center md:text-4xl text-xl">
                SignUp to SWS
            </div>

            <div className="mt-10 flex justify-center">
                <div>
                    <input type="text" placeholder="Username" className="bg-white rounded-3xl border-3 font-bold border-amber-400 p-1 text-center text-black" /> <br /><br />
                    <input type="password" placeholder="Password" className="bg-white rounded-3xl border-3 font-bold border-amber-400 text-center p-1 text-black" />
                </div>
            </div>


            <div className="flex justify-center">
                <div className="mt-5 bg-blue-700 cursor-pointer text-white p-2 rounded-xl">
                    SignUp
                </div>
            </div>

        </div>
    )
}