import SideNavigationBar from "@/components/subcomponents/side-navigation-bar";
import DashboardMetrics from "@/components/dashboard/metrics/dashboard-metrics";
import ResponsiveHeader from "@/components/subcomponents/responsive-header";
import {ChartLineMultiple} from "@/components/dashboard/charts/area-chart";

export function Dashboard() {
    return (
        <main className="flex w-full h-screen">
            {/*Side Navigation Bar*/}
            <SideNavigationBar />
            <main className="w-full flex flex-col gap-10 bg-[#f0f0f0] h-screen">
                {/*Dashboard Header*/}
                <ResponsiveHeader />
                {/*Dashboard Metrics*/}
                <DashboardMetrics />
                <section className="relative w-[60%] px-10">
                    <ChartLineMultiple />
                </section>
            </main>
        </main>
    )
}
