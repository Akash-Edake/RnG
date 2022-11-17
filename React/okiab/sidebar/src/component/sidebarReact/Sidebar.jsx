import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Sidebar = () => {

    const SidebarMenu = [
        {
            path: "/",
            name: "Dashboard",
        },
        {
            path: "/about",
            name: "About",
        },
        {
            path: "/comment",
            name: "Comment",
        },
        {
            path: "/product",
            name: "Product",
        }
    ]
    return (
        <section>
            <div>
                <div className='text-white fw-bolder mt-4'>
                    {
                        SidebarMenu.map((items) => {
                            return (
                                <>
                                    <NavLink to={items.path} className="text-decoration-none text-white">
                                        <div>{items.name}</div>
                                    </NavLink>
                                </>
                            )


                        })
                    }
                </div>

            </div>
        </section>

    )
}

export default Sidebar