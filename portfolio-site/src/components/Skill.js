export default function Skill(props) {
    return ( 
        <>
            <div
                class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-secondary">
                <span className="flex justify-center items-center gap-2 mb-3">
                    <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {props.name}
                    </h5>
                    {props.icon}
                </span>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {props.desc}
                </p>
                </div>
        </>
    )
}