import Image from "next/image";
import {Cog} from "lucide-react";

const Account = () => {
    return(
        <section className="flex gap-5 w-72 items-center justify-end">
            <span className="flex w-28 flex-col items-end">
                <p className="flex-nowrap text-gray-600 dark:text-[#CBD8E2]">Somelele Quse</p>
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                    <p className="text-gray-400 dark:text-[#A0B3C9]">Online</p>
                </div>
            </span>
            <div className="relative w-15 h-15 aspect-square rounded-full bg-black">
                <Image
                    src="/avatar.png"
                    fill={true}
                    alt="avatar"
                    className="rounded-full object-cover"
                />
            </div>
            <div className="flex max-sm:hidden items-center text-gray-500 border justify-center w-15 h-15 aspect-square rounded-full ">
                <Cog size={30} />
            </div>
        </section>
    )
}

export default Account;
