import {ArrowUp, Ellipsis} from "lucide-react";
import {JSX} from "react";


interface MetricBlockProps {
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
        <div className="w-full flex flex-col transition-colors text-black p-7 gap-5 rounded-xl h-60 bg-[#f9f9f9] hover:bg-blue-100">
            {/*First row of the block*/}
            <section className="grid items-center grid-cols-[4vw_1fr_1vw]">
                {props.icon}
                <p className="text-xl font-medium">{props.title}</p>
                <Ellipsis size={25} />
            </section>
            {/*Second row of the block*/}
            <section className="flex gap-5 items-center">
                <p className="text-4xl font-bold">{props.value}</p>
                {
                    !props.forBeds && (<p className="font-medium bg-[#f9f9f9] px-2 rounded-full text-sm flex items-center"><ArrowUp size={15} />15.5%</p>)
                }
                {
                    props.forBeds && (<p className="font-medium text-sm flex items-center">{props.totalAvailable} Available</p>)
                }
            </section>
            {/*Third row of the block*/}
            <section className="flex h-full gap-5 items-center">
                {
                    !props.forBeds && (<p className="text-sm">
                        Stay updated with essential details
                        to streamline medical
                        support and management.
                    </p>)
                }
                {
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
