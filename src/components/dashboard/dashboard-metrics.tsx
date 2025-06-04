import MetricBlock from "@/components/dashboard/metrics/metric-block";

const DashboardMetrics = () => {
    return (
        <section className="grid grid-cols-4 gap-10 px-10 w-full">
            <MetricBlock />
            <MetricBlock />
            <MetricBlock />
            <MetricBlock />
        </section>
    )
}

export default DashboardMetrics;
