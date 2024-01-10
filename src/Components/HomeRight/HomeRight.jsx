import React from "react"
import SuggestionCard from "./SuggestionCard"

const HomeRight = () => {
    return (
        <div className="">

            <div className="m-4">

                <div className="flex items-center justify-between">

                    <div className="flex items-center">

                        <div>
                            <img className="w-12 h-12 rounded-full cursor-pointer" src="https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_640.jpg" alt="" />
                        </div>

                        <div className="ml-3">
                            <p className="font-semibold cursor-pointer">username</p>
                            <p className="opacity-70">FullName</p>
                        </div>

                    </div>

                    <div>
                        
                        <p className="text-blue-700 font-semibold hover:text-black text-sm cursor-pointer">Switch</p>

                    </div>

                </div>

                <div className="flex items-center justify-between mb-4 mt-4">

                    <p className="opacity-70 text-sm">Suggested for you</p>

                    <p className="text-sm cursor-pointer font-semibold">See All</p>

                </div>

                <div className="space-y-5 ">
                    {[1,1,1,1,1].map((item) => <SuggestionCard/>)}
                </div>

            </div>

        </div>
    )
}

export default HomeRight