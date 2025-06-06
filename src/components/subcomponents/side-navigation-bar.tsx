import {
    Activity,
    BedSingle, CalendarDays, CheckSquare2, CreditCard,
    EllipsisVertical, Layers,
    LayoutDashboard, LogOut, Mail, NotepadText, Package, Stethoscope,
    UserCircle, UserCircle2, UsersRound
} from "lucide-react";
import Link from "next/link";

const SideNavigationBar = () => {

    const applications = [
        {
            title: "Doctor",
            icon: <Stethoscope size={20}/>,
        },
        {
            title: "Patient",
            icon: <UsersRound size={20}/>,
        },
        {
            title: "Departments",
            icon: <Layers size={20}/>,
        },
        {
            title: "Schedule",
            icon: <CalendarDays size={20}/>
        },
        {
            title:  "Appointment",
            icon: <CheckSquare2 size={20}/>,
        },
        {
            title: "Report",
            icon: <NotepadText size={20}/>
        },
        {
            title: "Human Resources",
            icon: <UserCircle2 size={20}/>,
        },
        {
            title: "Bed Manager",
            icon: <BedSingle size={20}/>,
        }
    ]
    const others = [
        <>
            <CreditCard size={20}/> Payment
        </>,
        <>
            <Mail size={20}/> Mail
        </>,
        <>
            <Package size={20}/> Widgets
        </>
    ]

    return (
        <section className="h-full px-3 w-[20vw] border-r bg-white">
            {/*Company Logo*/}
            <header className="w-full px-2 flex items-center justify-between h-20 border-b">
                <div className="flex items-center gap-2">
                    <Activity className="text-black" />
                    <h1 className="text-3xl text-center text-black">Health<span className="text-red-500">Care</span></h1>
                </div>
                <EllipsisVertical className="text-black" size={20} />
            </header>

            <nav className="w-full flex flex-col gap-3 py-15">
                <Link className="flex w-full gap-2 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                    <LayoutDashboard/> Dashboard
                </Link>
                <Link className="flex w-full gap-2 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                    <UserCircle/> Your Account
                </Link>
            </nav>

            {/* Applications */}
            <nav className="flex text-black flex-col text-xl gap-2">
                <p className="text-gray-400 text-sm px-1">APPLICATIONS</p>
                {
                    applications.map((app, index) => (
                        <Link key={index} className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                            {app.icon} {app.title}
                        </Link>
                    ))
                }
            </nav>

            {/* Others */}
            <nav className="flex items-start text-black flex-col text-xl gap-2 py-10">
                <p className="text-gray-400 text-sm px-1">OTHERS</p>
                {
                    others.map((other, index)=> (
                        <Link key={index} className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                            {other}
                        </Link>
                    ))
                }
                <button className="flex gap-2.5 text-red-500 p-2">
                    <LogOut /> Logout
                </button>
            </nav>
        </section>
    )
}

export default SideNavigationBar;
