import SearchInput from "@/components/subcomponents/search";
import ThemeToggle from "@/components/subcomponents/theme-toggle";
import Account from "@/components/subcomponents/account";
import Notifications from "@/components/subcomponents/notifications";

const ResponsiveHeader = () => {
    return (
        <header className="sticky bg-white justify-between items-center gap-10 flex py-5 px-10 w-full">
            {/* Search Input */}
            <SearchInput />
            {/* Theme Toggle*/}
            <div className="flex gap-10 w-full items-center justify-end">
                <ThemeToggle />
                {/* Notifications and Mail*/}
                <Notifications />
                {/* Account Overview */}
                <Account />
            </div>

        </header>
    )
}

export default ResponsiveHeader;
