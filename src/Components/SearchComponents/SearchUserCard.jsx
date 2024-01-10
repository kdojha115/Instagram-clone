import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const SearchUserCard = () => {
    return (
        <div className="py-2  flex justify-between items-center">
            <div className="flex items-center cursor-pointer">
                <img className="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_640.jpg" alt="" />

                <div className="ml-3">
                    <p>Full Name</p>
                    <p className="opacity-70">username</p>
                </div>
            </div>
            <IoCloseOutline className="cursor-pointer"/>
        </div>
    )
}

export default SearchUserCard;