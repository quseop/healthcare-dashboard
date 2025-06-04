import {ArrowUp, Ellipsis, Stethoscope} from "lucide-react";

const MetricBlock = () => {
    return (
        <div className="w-full flex flex-col text-black p-7 gap-5 rounded-xl h-60 bg-[#f9f9f9] hover:bg-[#0000f0]">
            {/*Icon*/}
            <section className="grid items-center grid-cols-[4vw_1fr_1vw]">
                <Stethoscope size={50} className="text-black p-3 shadow-lg rounded-full " />
                <p className="text-xl">Doctors</p>
                <Ellipsis size={25} />
            </section>
            <section className="flex gap-5 items-center">
                <p className="text-4xl font-bold">260</p>
                <p className="font-medium text-sm flex items-center"><ArrowUp size={15} />15.5%</p>
            </section>
            <section className="flex gap-5 items-center">
                <p className="text-sm">
                    Stay updated with essential details
                    to streamline medical
                    support and management.
                </p>
            </section>
        </div>
    )
}

export default MetricBlock;
