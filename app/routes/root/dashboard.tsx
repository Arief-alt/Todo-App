import {CreateTask, StatsCard } from 'components'
import React, { useState } from 'react'

const Dashboard = () => {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const total = 0

    return (
        <main className="px-5 flex flex-col gap-6">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard
                    id={2}
                    name="Active Tasks"
                    total={total}
                    color="text-green-400"
                    icon="/assets/icons/circle.png"
                />
                <StatsCard
                    id={2}
                    name="Completed"
                    total={total}
                    color="text-green-400"
                    icon="/assets/icons/check-circle.png"
                />
                <StatsCard
                    id={3}
                    name="Total Tasks"
                    total={total}
                    color="text-blue-400"
                    icon="/assets/icons/analyse.png"
                />
            </section>

            <section className="p-6 flex flex-col bg-black border border-gray-100 shadow-400 rounded-xl">
                <div className="flex-col justify-center grid md:grid-cols-3 gap-6">
                    <div className="relative pt-1">
                        <img
                            src="/assets/icons/search.png"
                            alt="search"
                            className="absolute pl-3 pt-3 size-8"
                        />
                        <input
                            type="text"
                            maxLength={50}
                            placeholder="Search tasks..."
                            className="text-white w-full p-2 pl-10 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-100 cursor-pointer"
                        />
                    </div>

                    <div className="relative pt-1">
                        <select
                            className="text-white w-full md:w-48 p-2 rounded-lg bg-black border border-gray-600 appearance-none focus:outline-none focus:ring-1 focus:ring-gray-100 cursor-pointer"
                        >
                            <option value="All Priorities">All Priorities</option>
                            <option value="High Priority">High Priority</option>
                            <option value="Medium Priority">Medium Priority</option>
                            <option value="Low Priority">Low Priority</option>
                        </select>
                    </div>

                    <div className="hover:scale-105 flex items-center justify-center md:justify-end">
                        <button
                            onClick={() => {
                                setShowCreateTask(true);
                            }}
                            type="submit"
                            className="flex items-center gap-2 px-3 py-2 w-32 rounded-lg bg-dark-blue cursor-pointer border border-gray-600"
                        >
                            <img
                                src="/assets/icons/plus.png"
                                alt="task"
                                className="size-5"
                            />

                            <h1 className="text-white">New Task</h1>
                        </button>
                    </div>
                </div>
            </section>

            <section className="hover:scale-105 p-12 flex flex-col items-center justify-center bg-black border border-gray-100 shadow-400 rounded-xl">
                <div className="gap-2 flex flex-col justify-center items-center">
                    <img
                        src="/assets/icons/circle.png"
                        alt="task"
                        className="size-16"
                    />

                    <h1 className="font-semibold text-lg text-white">
                        No tasks found
                    </h1>

                    <span className="text-gray-400 text-lg">
                        Create your first task to get started!
                    </span>
                </div>
            </section>

            {showCreateTask && (
                <div className="bg-opacity-50 backdrop-blur-sm fixed inset-0 flex items-center justify-center z-50">
                    <div className="inset-0 bg-black bg-opacity-50" onClick={() => setShowCreateTask(false)}></div>
                    <div className="relative">
                        <CreateTask onClose={() => setShowCreateTask(false)} />
                    </div>
                </div>
            )}
        </main>
    )
}
export default Dashboard
