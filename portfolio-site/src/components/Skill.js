export default function Skill(props) {
    return ( 
        <div class="group h-40 w-80 [perspective:1000px] block rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-secondary">
                <div class="flex justify-center items-center relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="flex flex-col justify-center items-center inset-0 p-5">
                        <span className="flex justify-center items-center gap-2 mb-2">
                            <h5
                            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {props.name}
                            </h5>
                            {props.icon}
                        </span>
                        <div className="mt-2 h-4 relative w-60 rounded-full overflow-hidden">
                            <div className=" w-full h-full bg-gray-200 absolute"></div>
                            <div className={`h-full absolute ${props.color}`} style={{width: props.percentage}}></div>
                        </div>
                    </div>
                    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-4 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col items-center justify-center">
                            <p className="mb-5 text-base text-neutral-600 dark:text-neutral-200">
                                {props.desc}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    )
}