import {BrowserView, MobileView} from 'react-device-detect';

export default function Navbar() {

    return (
        <nav className="bg-gradient-to-t from-primary to-secondary flex justify-between xl:justify-between items-center py-4 px-6">
            <h2 className="text-white text-sm md:text-lg">Deniz Işık</h2>
            <div className="nav--links">
                <a href="#skills" className="text-white text-[10px] md:text-sm hover:text-gray-300 md:px-4 px-2">Skills</a>
                <a href="#projects" className="text-white text-[10px] md:text-sm hover:text-gray-300 md:px-4 px-2">Projects</a>
                <a href="#contact" className="text-white text-[10px] md:text-sm hover:text-gray-300 md:px-4 px-2">Contact</a>
            </div>
        </nav>
    )
}