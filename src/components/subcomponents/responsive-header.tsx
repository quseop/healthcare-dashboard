import SearchInput, {SearchInputMobile} from "@/components/subcomponents/search";
import {ThemeToggler} from "@/components/subcomponents/theme-toggle";
import Account from "@/components/subcomponents/account";
import Notifications from "@/components/subcomponents/notifications";

const ResponsiveHeader = () => {
    return (
        <header className="sticky bg-white dark:bg-[#0B1C2C] justify-between max-sm:px-2 items-center gap-10 flex py-5 px-10  w-full">
            <SearchInputMobile />
            {/* Search Input */}
            <SearchInput />
            {/* Theme Toggle*/}
            <div className="flex gap-10 w-full max-sm:hidden items-center justify-end">
                <ThemeToggler />
                {/* Notifications and Mail*/}
                <Notifications />
                {/* Account Overview */}
                <Account />
            </div>

        </header>
    )
}

export default ResponsiveHeader;
