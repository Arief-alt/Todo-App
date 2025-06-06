import React from 'react';
import { useNavigate } from 'react-router';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <main
            className="justify-center items-center flex flex-col h-screen"
            style={{ backgroundImage: "url('/assets/images/bg.webp')" }}
        >
            <section className="px-10 py-5 border border-gray-100 shadow-400 rounded-xl flex-center">
                <h1 className="text-center font-bold text-3xl text-white">
                    Welcome to TaskFlow
                </h1>

                <p className="text-center font-bold text-lg text-white mt-2">
                    Your minimalist to-do app to organize tasks, focus, and get things done.
                </p>

                <div className="pt-5 flex items-center justify-center">
                    <button
                        onClick={() => {
                            navigate('/dashboard')
                        }}
                        type="submit"
                        className="flex items-center justify-center gap-2 px-3 py-2 w-100 rounded-lg bg-blue-400 cursor-pointer border border-gray-600 hover:bg-blue-500 transition-colors"
                    >
                        <h1>Continue to dashboard</h1>
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Welcome;