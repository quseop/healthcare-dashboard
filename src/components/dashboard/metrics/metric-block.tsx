import {ArrowUp, Ellipsis} from "lucide-react";
import {JSX} from "react";


export interface MetricBlockProps {
    title: string,
    value: string,
    icon: JSX.Element,
    description?: string,
    percentage?: number,
    forBeds?: boolean,
    general?: number,
    private?: number,
    totalAvailable?: number,
}


const MetricBlock = (props: MetricBlockProps) => {
    return (
        <div className="w-full flex flex-col transition-colors text-black dark:text-[#CBD8E2] p-7 max-sm:p-5 gap-5 rounded-xl h-60 bg-[#f9f9f9] dark:bg-[#0B1C2C] hover:bg-blue-100">
            {/*First row of the block*/}
            <section className="grid items-center grid-cols-[4vw_1fr_1vw] max-sm:gap-15 pr-2">
                {props.icon}
                <p className="text-xl font-medium">{props.title}</p>
                <Ellipsis size={25} />
            </section>
            {/*Second row of the block*/}
            <section className="flex gap-5 items-center">
                <p className="text-4xl font-bold">{props.value}</p>
                {
                    /**
                     * If it's not for beds, then show the percentage.
                     * */
                    !props.forBeds && (<p className="font-medium bg-background px-2 rounded-full text-sm flex items-center"><ArrowUp size={15} />15.5%</p>)
                }
                {
                    /**
                     * If it's for beds, then show the total available.
                     * */
                    props.forBeds && (<p className="font-medium text-sm flex items-center">{props.totalAvailable} Available</p>)
                }
            </section>
            {/*Third row of the block*/}
            <section className="flex h-full gap-5 items-center">
                {
                    /**
                     * If it's not for beds, then show the description.
                     * */
                    !props.forBeds && (<p className="text-sm">
                        {props.description}
                    </p>)
                }
                {
                    /**
                     * If it's for beds, then show the beds.
                     * */
                    props.forBeds
                    && (<div className="flex justify-between h-full w-full gap-5 items-center">
                        <p className="text-2xl leading-5">
                            {props.private} Bed <br />
                            <span className="text-sm">Private Bed</span>
                        </p>
                    <div className="w-0.5 h-[80%] bg-gray-200"></div>
                        <p className="text-2xl leading-5 text-end">
                            {props.general} Bed <br />
                            <span className="text-sm">General Bed</span>
                        </p>
                    </div>)
                }
            </section>
        </div>
    )
}

export default MetricBlock;
