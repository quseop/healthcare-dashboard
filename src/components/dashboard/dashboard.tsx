import SideNavigationBar from "@/components/subcomponents/side-navigation-bar";
import DashboardMetrics from "@/components/dashboard/metrics/dashboard-metrics";
import ResponsiveHeader from "@/components/subcomponents/responsive-header";

export function Dashboard() {
    return (
        <main className="flex w-full h-screen">
            {/*Side Navigation Bar*/}
            <SideNavigationBar />
            <main className="w-full flex flex-col gap-10 bg-[#f0f0f0] h-screen">
                <ResponsiveHeader />
                {/*Dashboard Metrics*/}
                <DashboardMetrics />
            </main>
        </main>
    )
}
