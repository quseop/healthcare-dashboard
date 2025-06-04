import SideNavigationBar from "@/components/subcomponents/side-navigation-bar";
import DashboardMetrics from "@/components/dashboard/dashboard-metrics";

export function Dashboard() {
    return (
        <main className="flex w-full h-screen">
            {/*Side Navigation Bar*/}
            <SideNavigationBar />
            <main className="w-full h-screen">
                {/*Dashboard Metrics*/}
                <DashboardMetrics />
            </main>
        </main>
    )
}
