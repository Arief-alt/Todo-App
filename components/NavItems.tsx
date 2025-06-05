import React from 'react'
import {Link, NavLink} from "react-router";
import {sidebarItems} from "~/constant";
import { cn } from '~/lib/utils';

const NavItems = ({ handleClick } : {handleClick?: () => void}) => {
    return (
        <section className="bg-black flex flex-col px-6 h-full">
            <div className="flex flex-col py-10">
                <Link to="/">
                    <h1 className="text-green-600 font-bold text-3xl">
                        TaskFlow
                    </h1>
                </Link>

                <div className="pl-1 text-gray-400 text-sm">
                    Organize your life
                </div>
            </div>

            <div className="flex flex-col">
                <nav className="flex flex-col gap-2">
                    {sidebarItems.map(({id, icon, label, href}) => (
                        <NavLink key={id} to={href}>
                            {({ isActive }: { isActive: boolean }) => (
                                <div className={cn("flex rounded-xl items-center gap-3 px-3 py-3 shadow-emerald-400", {
                                    'bg-light-green border border-gray-100': isActive,
                                    'hover:bg-gray-100 text-gray-400': !isActive,
                                })} onClick={handleClick}>
                                    <img
                                        src={icon}
                                        alt={label}
                                        className="size-6"
                                    />
                                    <div className="text-sm">
                                        {label}
                                    </div>
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </section>
    )
}
export default NavItems
