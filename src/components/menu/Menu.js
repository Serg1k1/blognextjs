import Link from "next/link";

import './menu.css';

const Menu = () => {
    return (
        <nav className="menu">
            <Link href="/" className="homepage__link">HomePage</Link>
        </nav>
    )
}

export default Menu;