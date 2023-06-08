export default function Navbar() {
    return (
        <nav className="bg-secondary flex justify-between xl:justify-between items-center py-4 px-6">
            <h2 className="text-white xl:text-xl text-sm">Deniz Işık</h2>
            <div className="nav--links">
                <a href="#about" className="text-white xl:text-base text-[10px] hover:text-gray-300 px-2 xl:px-4">Skills</a>
                <a href="#about" className="text-white xl:text-base text-[10px] hover:text-gray-300 px-2 xl:px-4">Projects</a>
                <a href="#about" className="text-white xl:text-base text-[10px] hover:text-gray-300 px-2 xl:px-4">Contact</a>
            </div>
        </nav>
    )
}