import MetricBlock from "@/components/dashboard/metrics/metric-block";
import {BedSingle, Stethoscope, UserRoundCheck, Users2Icon} from "lucide-react";

const DashboardMetrics = () => {
    return (
        <section className="grid grid-cols-4 gap-10 px-10 w-full">
            <MetricBlock
                title="Visitors"
                value="4,592"
                icon={<UserRoundCheck size={50} className="text-black bg-[#f9f9f9] p-3 shadow-lg rounded-full" />}
            />
            <MetricBlock
                title="Doctors"
                value="260"
                icon={<Stethoscope size={50} className="text-black bg-[#f9f9f9] p-3 shadow-lg rounded-full" />}
            />
            <MetricBlock
                title="Patients"
                value="540"
                icon={<Users2Icon size={50} className="text-black bg-[#f9f9f9] p-3 shadow-lg rounded-full" />}
            />
            <MetricBlock
                title="Total Bed"
                value="1205"
                icon={<BedSingle size={50} className="text-black bg-[#f9f9f9] p-3 shadow-lg rounded-full" />}
                forBeds={true}
                general={215}
                private={110}
            />
        </section>
    )
}

export default DashboardMetrics;
