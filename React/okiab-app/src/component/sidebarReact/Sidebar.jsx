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
                <div>
                    {
                        SidebarMenu.map((items) => {
                            return (
                                <>
                                    <NavLink to={items.path}>
                                        <div>{items.name}</div>
                                    </NavLink>
                                </>
                            )


                        })
                    }
                </div>

                <div className='col-9'>
                    <Outlet />
                </div>
            </div>
        </section>

    )
}

export default Sidebar