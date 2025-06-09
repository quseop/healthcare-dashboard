import {Menu, Search} from "lucide-react";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const SearchInput = () => {
    return (
        <div className="w-[50%] max-sm:hidden">
            <form className="relative p-3 rounded-2xl border gap-2.5 border-gray-300 w-full flex items-center">
                <Search className="text-gray-600 dark:text-[#CBD8E2]" size={20} />
                <input
                    placeholder="Search"
                    className="placeholder-gray-500 dark:placeholder-[#CBD8E2] dark:text-[#CBD8E2] text-black outline-none left-20"
                />
            </form>
        </div>
    )
}

export default SearchInput;

export const SearchInputMobile = () => {
    return (
        <div className="w-full max-sm:flex hidden">
            <form className="relative p-3 rounded-2xl border gap-2.5 border-gray-300 w-full flex justify-between items-center">
                <Button variant="outline">
                    <Menu className="text-gray-600 dark:text-[#CBD8E2]" size={20} />
                </Button>
                <input
                    placeholder="Search"
                    className="placeholder-gray-500 w-full dark:placeholder-[#CBD8E2] dark:text-[#CBD8E2] text-black outline-none left-20"
                />
                <div className="relative w-10 h-10 aspect-square rounded-xl bg-black">
                    <Image
                        src="/usman-yousaf.jpg"
                        fill={true}
                        alt="avatar"
                        className="rounded-xl object-cover"
                    />
                </div>
            </form>
        </div>
    )
}
