import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <img src="https://studywithshubh.tech/swsBrandImg.png" width="200" alt="swsbrandimg" />
                </div>
                <div>
                    <div className="text-center text-xl md:text-4xl">
                        Welcome to StudyWithShubh
                    </div>
                </div>

                <div className="flex justify-center space-x-10">
                    <div className="mt-30 bg-blue-600 text-white p-2 rounded-3xl">
                        <Link href={"/signup"}>SignUP to SWS</Link>
                    </div>

                    <div className="mt-30 bg-blue-600 text-white p-2 rounded-3xl">
                        <Link href={"/signin"}>SignIN to SWS</Link>
                    </div>
                </div>
            </div>
        </>
    )
}