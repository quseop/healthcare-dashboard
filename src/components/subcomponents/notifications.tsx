import {Bell, Mail} from "lucide-react";

const Notifications = () => {
    return(
        <span className="flex w-48 text-gray-600 dark:text-[#A0B3C9] border-x dark:border-[#A0B3C9] py-3 justify-evenly">
            <Bell />
            <Mail />
        </span>
    )
}

export default Notifications;
