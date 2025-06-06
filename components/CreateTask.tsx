import React from "react";
import { useState } from "react";

const CreateTask = ({onClose}: CreateTaskProps) => {
    return (
        <article className="w-102 justify-center items-center">
            <div className="gap-6 px-6 py-6 flex flex-col bg-black border border-gray-100 shadow-400 rounded-xl">
                <h1 className="font-semibold text-2xl">
                    Create New Task
                </h1>

                <section className="flex flex-col gap-2">
                    <h1 className="font-semibold font-sm">
                        Task Title
                    </h1>

                    <input
                        type="text"
                        maxLength={50}
                        placeholder="Enter task title..."
                        className="w-full p-2 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-100 cursor-pointer"
                    />
                </section>

                <section className="flex flex-col gap-2">
                    <h1 className="font-semibold font-sm">
                        Description
                    </h1>

                    <textarea
                        placeholder="Add task description..."
                        maxLength={200}
                        className="w-full p-2 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-100 cursor-pointer resize-none"
                        rows={1}
                        style={{ minHeight: '44px' }}
                        onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement;
                            target.style.height = 'auto';
                            target.style.height = target.scrollHeight + 'px';
                        }}
                    />
                </section>

                <div className="gap-6 grid grid-cols-2">
                    <section>
                        <h1 className="font-semibold font-sm">
                            Priority
                        </h1>

                        <select
                            className="w-full p-2 rounded-lg bg-black border border-gray-600 appearance-none focus:outline-none focus:ring-1 focus:ring-gray-100 cursor-pointer"
                        >
                            <option value="High Priority">High Priority</option>
                            <option value="Medium Priority">Medium Priority</option>
                            <option value="Low Priority">Low Priority</option>
                        </select>
                    </section>
                    <section>
                        <h1 className="font-semibold font-sm">
                            Due Date
                        </h1>

                        <input
                            type="text"
                            maxLength={10}
                            placeholder="dd/mm/yyyy"
                            className="w-full p-2 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-100 cursor-pointer"
                        />
                    </section>
                </div>

                <div className="gap-6 flex items-center justify-end">
                    <section>
                        <button
                            onClick={onClose}
                            type="submit"
                            className="flex items-center justify-center gap-2 px-3 py-2 w-32 rounded-lg bg-black cursor-pointer border border-gray-600"
                        >
                            <h1>Cancel</h1>
                        </button>
                    </section>
                    <section>
                        <button
                            onClick={() => {
                                console.log("New Task")

                                onClose()
                            }}
                            type="submit"
                            className="flex items-center justify-center gap-2 px-3 py-2 w-32 rounded-lg bg-dark-blue cursor-pointer border border-gray-600"
                        >
                            <h1>Create Task</h1>
                        </button>
                    </section>
                </div>
            </div>
        </article>
    )
}
export default CreateTask
