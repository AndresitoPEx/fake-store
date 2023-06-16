import { ShoppingBagIcon } from "@heroicons/react/24/outline"

import { NavLink } from "react-router-dom"
import { useContext } from "react"
import ShoppingCartContext from "../../Context"

const Nav = () => {

    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'


    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-ligth top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg"><NavLink to="/">Fake Shop</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to="/all">All</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to="/new">New</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to="/popular">Popular</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to="/sale">Sale</NavLink></li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/50">andresrt952@gmail.com</li>
                <li><NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to="/my-orders">MyOrders</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to="/my-acount">MyAcount</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? activeStyle : undefined} to="/sing-in">SingIn</NavLink></li>
                <li className="flex items-center"><ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
                    <div>{context.count}</div>
                </li>

            </ul>
        </nav>
    )
}

export default Nav