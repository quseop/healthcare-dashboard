import {
    Activity,
    BedSingle, CalendarDays, CheckSquare2, CreditCard,
    EllipsisVertical, Layers,
    LayoutDashboard, LogOut, Mail, NotepadText, Package, Stethoscope,
    UserCircle, UserCircle2, UsersRound
} from "lucide-react";
import Link from "next/link";

const SideNavigationBar = () =>
    (<aside className="h-full px-3 w-[20vw] border-r bg-white">

        {/*Company Logo*/}
        <header className="w-full flex items-center justify-between h-20 border-b">
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
            <Link className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                <Stethoscope size={20}/> Doctor
            </Link>
            <Link className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                <UsersRound size={20}/> Patient
            </Link>
            <Link className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                <Layers size={20}/> Departments
            </Link>
            <Link className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                <CalendarDays size={20}/> Schedule
            </Link>
            <Link className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                <CheckSquare2 size={20}/> Appointment
            </Link>
            <Link className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                <NotepadText size={20}/> Report
            </Link>
            <Link className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                <UserCircle2 size={20}/> Human Resources
            </Link>
            <Link className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                <BedSingle size={20}/> Bed Manager
            </Link>
        </nav>

        {/* Others */}
        <nav className="flex items-start text-black flex-col text-xl gap-2 py-10">
            <p className="text-gray-400 text-sm px-1">OTHERS</p>
            <Link className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                <CreditCard size={20}/> Payment
            </Link>
            <Link className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                <Mail size={20}/> Mail
            </Link>
            <Link className="flex w-full gap-2.5 items-center text-black rounded-lg p-2 text-xl hover:bg-blue-100 " href="/">
                <Package size={20}/> Widgets
            </Link>
            <button className="flex gap-2.5 text-red-500 p-2">
                <LogOut /> Logout
            </button>
        </nav>


    </aside>)

export default SideNavigationBar;
