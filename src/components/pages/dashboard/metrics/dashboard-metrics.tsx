import MetricBlock, {MetricBlockProps} from "@/components/pages/dashboard/metrics/metric-block";
import {BedSingle, Stethoscope, UserRoundCheck, Users2Icon} from "lucide-react";



const DashboardMetrics = () => {

    const iconStyle = "text-black dark:bg-[#CBD8E2] bg-[#f9f9f9] p-3 shadow-lg rounded-full"

    const metrics:MetricBlockProps[] = [
        {
            title: "Visitors",
            value: "4,592",
            icon: <UserRoundCheck size={50} className={iconStyle} />,
            description: "Stay informed with real-time data to enhance patient care and visitor management."
        },
        {
            title: "Doctors",
            value: "260",
            icon: <Stethoscope size={50} className={iconStyle} />,
            description: "Stay updated with essential details to streamline " +
                "medical support and management."
        },
        {
            title: "Patients",
            value: "540",
            icon: <Users2Icon size={50} className={iconStyle} />,
            description: "Keep track of patient information at a glance, with easy access to key " +
                "details for personalised care"
        },
        {
            title: "Total Bed",
            value: "1205",
            icon: <BedSingle size={50} className={iconStyle} />,
            forBeds: true,
            general: 215,
            private: 110,
        }
    ]

    return (
        <section className="grid grid-cols-4 max-sm:grid-cols-1 max-sm:gap-5 gap-10 max-sm:py-[-3] max-sm:px-2 px-10 w-full">
            {
                metrics.map((metric, index) => (
                    <MetricBlock
                        key={index}
                        title={metric.title}
                        value={metric.value}
                        icon={metric.icon}
                        forBeds={metric.forBeds}
                        general={metric.general}
                        private={metric.private}
                        totalAvailable={metric.totalAvailable}
                        description={metric.description}
                    />
                ))
            }
        </section>
    )
}

export default DashboardMetrics;
