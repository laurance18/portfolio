import {BrowserView, MobileView} from 'react-device-detect';
import githubLogo from '../assets/githubLogo.png'

export default function Footer() {
    return(
        <>
            <BrowserView>
                <footer className="bg-gradient-to-b from-primary to-secondary flex justify-center items-center gap-3 py-2 static bottom-0 w-full">
                    <a href="https://github.com/laurance18" className="duration-700 hover:rotate-[360deg] hover:scale-110"><img src={githubLogo} alt="githubLogo" /></a> 
                    <p className="text-gray-200 text-sm">Made by Laurance18</p>
                </footer>
            </BrowserView>
            <MobileView>
                <footer className="bg-gradient-to-b from-primary to-secondary flex justify-center items-center gap-3 pt-2 pb-3 static bottom-0 w-full">
                    <a href="https://github.com/laurance18" className="duration-700 hover:rotate-[360deg] hover:scale-110"><img src={githubLogo} alt="githubLogo" /></a> 
                    <p className="text-gray-200 text-[10px]">Made by Laurance18</p>
                </footer>
            </MobileView>
        </>
    )
}