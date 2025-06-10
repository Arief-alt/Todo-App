import {StatsCard} from 'components';
import React from 'react';

const Completed = () => {
    const total = 0

    return (
        <main className="px-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-4xl">
                    Completed Tasks
                </h1>

                <p className="text-gray-400 text-lg">
                    Great job! You've completed 0 tasks.
                </p>
            </div>

            <div className="">
                <StatsCard
                    id={2}
                    name="Total Completed"
                    total={total}
                    color="text-green-400"
                    icon="/assets/icons/check-circle.png"
                />
            </div>

            <section className="p-6 flex flex-col bg-black border border-gray-100 shadow-400 rounded-xl">
                <div className="flex-col justify-center md:grid md:grid-cols-2 gap-6">
                    <div className="relative pt-1">
                        <img
                            src="/assets/icons/search.png"
                            alt="search"
                            className="absolute pl-3 pt-3 size-8"
                        />
                        <input
                            type="text"
                            maxLength={50}
                            placeholder="Search completed tasks..."
                            className="w-full p-2 pl-10 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-100 cursor-pointer"
                        />
                    </div>
                </div>
            </section>

            <section className="hover:scale-105 p-12 flex flex-col items-center justify-center bg-black border border-gray-100 shadow-400 rounded-xl">
                <div className="gap-2 flex flex-col justify-center items-center">
                    <img
                        src="/assets/icons/check-circle.png"
                        alt="task"
                        className="size-16"
                    />

                    <h1 className="font-semibold text-lg text-white">
                        No completed tasks
                    </h1>

                    <span className="text-gray-400 text-lg">
                        Complete some tasks to see them here!
                    </span>
                </div>
            </section>
        </main>
    )
}
export default Completed
