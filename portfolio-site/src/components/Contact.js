export default function Contact() {
    return (
        <div id="contact" className="bg-primary py-10 flex flex-col md:flex-row justify-around items-center">
            <div className="pb-5 md:"> 
                <h2 className="text-white text-2xl md:text-4xl font-bold ">Get in touch!</h2>
            </div>
            <div className="">
                <span className="flex gap-4 items-center pb-2">
                    <svg fill="#ffffff" width="32px" height="32px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"></path> </g></svg>
                    <h3 className="text-white">denizisik@std.iyte.edu.tr</h3>
                </span>
                <span className="flex gap-4 items-center pb-3">
                    <svg fill="#ffffff" width="32px" height="32px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z" fill-rule="evenodd"></path> </g></svg>
                    <a href="https://www.linkedin.com/in/deniz-isik-me/" target="_blank" className="text-white pt-2 hover:text-gray-400">Deniz Işık</a>
                </span>
                <span className="flex gap-4 items-center pb-2">
                    <svg fill="#ffffff" className="scale-[1.2]" width="32px" height="32px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-fiverr-circle"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path><path d="M13.427 13.148v-5h-5v-.312c0-.517.42-.938.938-.938h.937V5.023h-.937a2.816 2.816 0 0 0-2.813 2.813v.312h-1.25v1.875h1.25v3.125h-1.25v1.875h4.375v-1.875h-1.25v-3.125h3.143v3.125h-1.268v1.875h4.375v-1.875h-1.25z"></path><circle cx="12.402" cy="5.971" r="1.001"></circle></g></svg>
                    <a href="https://www.fiverr.com/laurance18?up_rollout=true" target="_blank" className="text-white pt-2 hover:text-gray-400">Deniz Işık</a>
                </span>
            </div>

        </div>
    )
}