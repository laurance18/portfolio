import {BrowserView, MobileView} from 'react-device-detect';
import githubLogo from '../assets/githubLogo.png'

export default function Footer() {
    return(
            <footer className="bg-gradient-to-b from-primary to-secondary pt-2 pb-3 w-full border-t-black">
                <span className="flex justify-center items-center gap-3 p-1">
                    <a href="https://github.com/laurance18" className="duration-700 hover:rotate-[360deg] hover:scale-110"><img src={githubLogo} alt="githubLogo" /></a> 
                    <p className="text-gray-200 text-[12px] md:text-sm">Made by Laurance18</p>
                </span>
            </footer>
    )
}