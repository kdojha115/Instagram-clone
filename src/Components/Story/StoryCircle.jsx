import React from "react";
import { useNavigate } from "react-router-dom";

const StoryCircle = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/story")
    }

    return (
        <div onClick={handleNavigate} className="cursor-pointer  px-3 flex flex-col items-center ">
            <img className="w-14 h-14 rounded-full " src="https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_640.jpg" alt="" />
            <p className="text-sm">username</p>
        </div>
    )
}

export default StoryCircle;