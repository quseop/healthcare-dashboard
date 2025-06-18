import SideNavigationBar from "@/components/subcomponents/side-navigation-bar";
import DashboardMetrics from "@/components/pages/dashboard/metrics/dashboard-metrics";
import ResponsiveHeader from "@/components/subcomponents/responsive-header";
import {ChartLineMultiple} from "@/components/pages/dashboard/charts/area-chart";
import {CalendarEng} from "@/components/pages/dashboard/calendar/calendar";
import PatientList from "@/components/pages/dashboard/patient-table/patient-list";

export function Dashboard() {
    return (
        <main className="flex w-full h-screen overflow-hidden">
            {/* Side Navigation Bar */}
            <SideNavigationBar />
            <section className="w-full flex flex-col bg-[#f0f0f0] dark:bg-[#112D44] h-screen">
                {/* Dashboard Header */}
                <ResponsiveHeader />
                <section className="w-full  flex flex-col max-sm:py-5 py-10 overflow-y-auto gap-10 max-sm:gap-5">
                    {/* Dashboard Metrics */}
                    <DashboardMetrics />
                    {/* Charts and Calendar */}
                    <div className="w-full grid grid-cols-[1fr_20vw]  max-sm:grid-cols-1 max-sm:px-2 px-10 gap-5">
                        <section className="relative w-full">
                            <ChartLineMultiple />
                        </section>
                        <CalendarEng />
                    </div>
                    {/* Patient Overview */}
                    <PatientList />
                </section>
            </section>
        </main>
    )
}
