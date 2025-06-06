import {Search} from "lucide-react";

const SearchInput = () => {
    return (
        <div className="w-[30%]">
            <form className="relative p-3 rounded-2xl border gap-2.5 border-gray-300 w-full flex items-center">
                <Search className="text-gray-600" size={20} />
                <input
                    placeholder="Search"
                    className="placeholder-gray-500 text-black outline-none left-20"
                />
            </form>
        </div>
    )
}

export default SearchInput;
