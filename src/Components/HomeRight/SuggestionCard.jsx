import React from "react"

const SuggestionCard = () => {
    return (
        <div className="flex items-center justify-between">

            <div className="flex items-center">
                <img className="h-8 w-8 rounded-full cursor-pointer" src="https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg" alt="" />

                <div className="ml-2 ">
                    <p className="text-sm  font-semibold cursor-pointer">username</p>
                    <p className="text-sm font-semibold opacity-70">Follows you</p>
                </div>

            </div>

            <p className="text-blue-700 text-sm font-semibold cursor-pointer hover:text-black ">Follow</p>

        </div>
    )
}

export default SuggestionCard