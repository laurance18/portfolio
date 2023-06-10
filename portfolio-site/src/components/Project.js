import {isMobile} from 'react-device-detect';

export default function Projects(props) {
    return (
        
        props.position !== "switched" || isMobile ? (
            <div className={`flex flex-col mx-8 my-5 p-4 rounded-lg bg-secondary`}>     
                <h4 className={`text-blue-400 italic font-bold text-xl md:px-5 pb-4 w-full`}>{props.name}</h4>
                <span className="flex items-center flex-col md:flex-row gap-2 md:gap-5">
                    <img src={props.image} alt={props.name} className="w-full md:w-1/2" />
                    <span className="text-center w-full md:w-1/2 text-gray-300 pt-4 self-center">
                        <p className="pb-5">{props.desc}</p>
                        <p>You can visit the website by clicking <a className="text-blue-800 hover:text-blue-600" href={props.link} target="_blank">this link.</a></p>
                    </span>
                </span>
            </div>
        ) : (
            <div className={`flex flex-col mx-8 my-5 p-4 rounded-lg bg-secondary`}>     
                <h4 className={`text-blue-400 italic font-bold text-xl md:px-5 pb-4 w-full`}>{props.name}</h4>
                <span className="flex items-center flex-col md:flex-row gap-2 md:gap-5">
                    <span className="text-center w-full md:w-1/2 text-gray-300 pt-4 self-center">
                        <p className="pb-7">{props.desc}</p>
                        <p>You can visit the website by clicking <a className="text-blue-800 hover:text-blue-600" href={props.link} target="_blank">this link.</a></p>
                    </span>
                    <img src={props.image} alt={props.name} className="w-full md:w-1/2" />
                </span>
            </div>
        )
        
    )
}