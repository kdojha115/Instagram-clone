import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

const ProfileUserDetails = () => {
    return (
        <div className="py-10 w-full">
            <div className="flex items-center">
                <div className=" w-[15%]">
                    <img className="w-32 h-32 rounded-full" src="https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg" alt="" />
                </div>

                <div className="space-y-5 ">
                    <div className="flex space-x-10 items-center">
                        <p>Username</p>
                        <button>Edit Profile</button>
                        <AiOutlineSetting />
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <span className="font-semibold mr-2"> 10</span>
                            <span>posts</span>
                        </div>

                        <div>
                            <span className="font-semibold mr-2">5</span>
                            <span>follower</span>
                        </div>
                        <div>
                            <span className="font-semibold mr-2">7</span>
                            <span>following</span>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Full Name</p>
                        <p className="font-thin text-sm">
                            🎓 Engineering Grad | 
                            👨‍💻 Coder | 
                            🎂 29 July | 
                            🙏 Single
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserDetails