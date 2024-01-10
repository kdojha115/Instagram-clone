import React from "react";
import StoryViewer from "../../Components/StoryComponents/StoryViewer";

const Story = () => {

    const story =[
        {
            image: "https://images.pexels.com/photos/16794803/pexels-photo-16794803/free-photo-of-building-on-a-pier.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image: "https://images.pexels.com/photos/10033269/pexels-photo-10033269.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image: "https://images.pexels.com/photos/5386829/pexels-photo-5386829.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image: "https://images.pexels.com/photos/10336043/pexels-photo-10336043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image: "https://images.pexels.com/photos/19469520/pexels-photo-19469520/free-photo-of-traditional-museum-by-the-square-in-berlin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
    ]

    return (
        <div>
            <StoryViewer stories={story}/>
        </div>
    )
}

export default Story;