import {Activity} from "lucide-react";

const SideNavigationBar = () =>
    (<aside className="h-full px-3 w-[20vw] border-r bg-white">

        <header className="w-full flex gap-2 items-center justify-center h-20 border-b">
            <Activity className="text-black" />
            <h1 className="text-3xl text-center text-black">Health<span className="text-red-500">Care</span></h1>
        </header>

    </aside>)

export default SideNavigationBar;
