import React from 'react';
import {StatsCard} from 'components';

const Calendar = () => {
    const total = 0

    return (
        <main className="px-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-white font-bold text-4xl">
                    Calendar View
                </h1>

                <p className="text-gray-400 text-lg">
                    Stay on top of your deadlines and schedule.
                </p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard
                    id={1}
                    name="Overdue"
                    total={total}
                    color="text-red-400"
                    icon="/assets/icons/exclamation.png"
                />
                <StatsCard
                    id={4}
                    name="Due Today"
                    total={total}
                    color="text-orange-400"
                    icon="/assets/icons/pending.png"
                />
                <StatsCard
                    id={3}
                    name="Upcoming"
                    total={total}
                    color="text-blue-400"
                    icon="/assets/icons/calendar.png"
                />
            </section>

            <section className="flex flex-col">
                <div className="gap-6 grid xl:grid-cols-3">
                    <section className="hover:scale-105 px-4 py-4 gap-2 flex-col bg-black border border-gray-100 shadow-400 rounded-xl">
                        <section className="flex items-center justify-between">
                            <div className="flex">
                                <img
                                    src="/assets/icons/exclamation.png"
                                    alt="task"
                                    className="size-8"
                                />

                                <h1 className="pl-5 font-semibold text-2xl text-white">
                                    Overdue Tasks
                                </h1>
                            </div>

                            <div className="text-white px-2 bg-black border border-gray-100 shadow-400 rounded-lg">
                                <h1>0</h1>
                            </div>
                        </section>

                        <h1 className="py-20 text-center text-gray-400 text-lg">
                            No overdue tasks! Great job staying on track.
                        </h1>
                    </section>
                    <section className="hover:scale-105 px-4 py-4 gap-2 flex-col bg-black border border-gray-100 shadow-400 rounded-xl">
                        <section className="flex items-center justify-between">
                            <div className="flex">
                                <img
                                    src="/assets/icons/pending.png"
                                    alt="task"
                                    className="size-8"
                                />

                                <h1 className="pl-5 font-semibold text-2xl text-white">
                                    Due Today
                                </h1>
                            </div>

                            <div className="text-white px-2 bg-black border border-gray-100 shadow-400 rounded-lg">
                                <h1>0</h1>
                            </div>
                        </section>

                        <h1 className="py-20 text-center text-gray-400 text-lg">
                            No tasks due today. Enjoy your day!
                        </h1>
                    </section>
                    <section className="hover:scale-105 px-4 py-4 gap-2 flex-col bg-black border border-gray-100 shadow-400 rounded-xl">
                        <section className="flex items-center justify-between">
                            <div className="flex">
                                <img
                                    src="/assets/icons/calendar.png"
                                    alt="task"
                                    className="size-8"
                                />

                                <h1 className="pl-5 xl:font-semibold text-2xl text-white">
                                    Upcoming Tasks
                                </h1>
                            </div>

                            <div className="text-white px-2 bg-black border border-gray-100 shadow-400 rounded-lg">
                                <h1>0</h1>
                            </div>
                        </section>

                        <h1 className="py-20 text-center text-gray-400 text-lg">
                            No upcoming tasks with due dates.
                        </h1>
                    </section>
                </div>
            </section>
        </main>
    )
}
export default Calendar
