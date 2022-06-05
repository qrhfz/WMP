import { Link, NavLink } from "react-router-dom"

export const Nav = () => {

    const isActive = ({ isActive }: any) => isActive ? "text-green-700" : ""
    return <nav className='flex flex-row justify-evenly p-4 font-bold text-sm border-b-2'>
        <NavLink className={isActive} to={"/"}><div> Songs</div></NavLink>
        <NavLink className={isActive} to={"/albums"}><div>Albums</div></NavLink>
        <NavLink className={isActive} to={"/artists"}><div>Artists</div></NavLink>
        <NavLink className={isActive} to={"/search"}><div>Search</div></NavLink>
    </nav>
}