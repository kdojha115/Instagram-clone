import React from "react"
import HomeRight from "../../Components/HomeRight/HomeRight"
import PostCard from "../../Components/Post/PostCard"
import StoryCircle from "../../Components/Story/StoryCircle"
import "./HomePage.css"

const HomePage = () => {

    
    return (
        <div className="w-full">
            <div className="mt-8 flex w-[100%] justify-center " >
                <div className="w-[70%] okay  px-5 ">
                    <div className="storyDiv  flex  storyCss  py-2 px-4 rounded-md  w-full ">
                        {[1,1,1,1,1,1,1,1].map((item) => <StoryCircle/>)}
                    </div>

                    <div className="storyCss">
                        <div className=" space-y-10 w-[70%] mt-[16px]">
                            {[1,1].map((item) => <PostCard/>)}
                        </div>
                    </div>
                    
                </div>

                <div className="w-[30%] p-5 mt-2">
                    <HomeRight/>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage