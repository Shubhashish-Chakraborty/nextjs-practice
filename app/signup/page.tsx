"use client"
import Link from "next/link";
import axios from 'axios';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const router = useRouter();

    const handleSignup = async () => {
        try {
            
            if (username === "" || password === "" ) {
                setSuccessMessage("Enter VALID Username and password!")
                return;
            }


            const response = await axios.post("http://localhost:3000/api/v1/auth/user/signup", {
                username,
                password
            });

            if (response.data.success) {
                setSuccessMessage(`${username} Signed Up Successfully! Redirecting to Sign In...`);
                
                setTimeout(() => {
                    router.push("/signin"); // ✅ Redirects after 2 seconds
                }, 2000);
            } else {
                setSuccessMessage("Signup Failed! Please try again.");
            }
        } catch (error) {
            setSuccessMessage("Error signing up. Please try again.");
        }
    };

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
                    <input 
                        onChange={e => setUsername(e.target.value)} 
                        type="text" 
                        placeholder="Username" 
                        className="bg-white rounded-3xl border-3 font-bold border-amber-400 p-1 text-center text-black" 
                    /> 
                    <br /><br />

                    <input 
                        onChange={e => setPassword(e.target.value)} 
                        type="password" 
                        placeholder="Password" 
                        className="bg-white rounded-3xl border-3 font-bold border-amber-400 text-center p-1 text-black" 
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <div onClick={handleSignup} className="mt-5 bg-blue-700 cursor-pointer text-white p-2 rounded-xl">
                    SignUp
                </div>
            </div>

            {successMessage && (
                <div className="mt-4 text-yellow-500 font-bold text-lg">
                    {successMessage}
                </div>
            )}
        </div>
    );
}
