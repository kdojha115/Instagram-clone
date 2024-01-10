import React from "react";
import "../SearchComponents/SearchComponent.css";
import SearchUserCard from "./SearchUserCard";

const SearchComponent = () => {
    return (
        <div className="SearchContainer">
            <div className="px-3 pb-5">
                <h1 className="text-xl pb-5 font-bold">Search</h1>
                <input type="text" className="searchInput" placeholder="Search..." />
                {/* <span className="close-button" onclick="clearInput()">×</span> */}
            </div>

            <div className="flex justify-between items-center p-2 ">
                <p className="font-semibold">Recent</p>
                <p className="text-blue-500 text-sm font-bold hover:text-blue-900">Clear All</p>
            </div>

            <div className="px-3 pt-5 SearchHistory">
                {[1,1,1,1,1,1,1,1,1,1].map((item)=> <SearchUserCard/>)}
            </div>
        </div>
    )
}

export default SearchComponent;