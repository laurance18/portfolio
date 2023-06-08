import {BrowserView, MobileView} from 'react-device-detect';

export default function Navbar() {

    return (
        <>
            <BrowserView>
                <nav className="bg-gradient-to-t from-primary to-secondary flex justify-between items-center py-4 px-6">
                    <h2 className="text-white text-lg">Deniz Işık</h2>
                    <div className="nav--links">
                        <a href="#skills" className="text-white text-sm hover:text-gray-300 px-4">Skills</a>
                        <a href="#projects" className="text-white text-sm hover:text-gray-300 px-4">Projects</a>
                        <a href="#contacts" className="text-white text-sm hover:text-gray-300 px-4">Contact</a>
                    </div>
                </nav>
            </BrowserView>
            <MobileView>
                <nav className="bg-gradient-to-t from-primary to-secondary flex justify-between xl:justify-between items-center py-4 px-6">
                    <h2 className="text-white text-sm">Deniz Işık</h2>
                    <div className="nav--links">
                        <a href="#skills" className="text-white text-[10px] hover:text-gray-300 px-2">Skills</a>
                        <a href="#projects" className="text-white text-[10px] hover:text-gray-300 px-2">Projects</a>
                        <a href="#contacts" className="text-white text-[10px] hover:text-gray-300 px-2">Contact</a>
                    </div>
                </nav>
            </MobileView>
            
        </>
    )
}