import SideNavigationBar from "@/components/subcomponents/side-navigation-bar";
import DashboardMetrics from "@/components/dashboard/metrics/dashboard-metrics";
import ResponsiveHeader from "@/components/subcomponents/responsive-header";
import {ChartLineMultiple} from "@/components/dashboard/charts/area-chart";
import {CalendarEng} from "@/components/dashboard/calendar/calendar";
import PatientList from "@/components/dashboard/patient-table/patient-list";

export function Dashboard() {
    return (
        <main className="flex w-full h-screen">
            {/*Side Navigation Bar*/}
            <SideNavigationBar />
            <main className="w-full flex flex-col gap-10 bg-[#f0f0f0] overflow-auto h-screen">
                {/*Dashboard Header*/}
                <ResponsiveHeader />
                {/*Dashboard Metrics*/}
                <DashboardMetrics />
                {/*Charts and Calendar*/}
                <div className="w-full flex px-10 gap-5">
                    <section className="relative w-full">
                        <ChartLineMultiple />
                    </section>
                    <CalendarEng />
                </div>
                {/* Patient Overview */}
                <PatientList />
            </main>
        </main>
    )
}
