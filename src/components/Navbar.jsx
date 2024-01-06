import { NavLink } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {

    const navLinks = <>
        <NavLink><li>Home</li></NavLink>
        <NavLink><li>About</li></NavLink>
        <NavLink><li>Article</li></NavLink>
        <NavLink><li>Services</li></NavLink>
        <button className="bg-[#40A3F8] py-2 px-4 text-white rounded-md">Get Started</button>
    </>
    return (
        <div className="bg-[#edf7fc] sticky top-0 ">
            <Container>
                <nav className="flex justify-between py-4 ">
                    <div>
                        <h1 className="text-2xl font-semibold text-[#40A3F8]">HeathCare.</h1>
                    </div>
                    <div className="flex items-center gap-8 list-none">
                        {navLinks}
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;