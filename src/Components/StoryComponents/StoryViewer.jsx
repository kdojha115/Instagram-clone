import { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import styled from "styled-components";
import "../StoryComponents/ProgressBar.css";
import ProgressBar from "./ProgressBar";


const StoryViewerContainer= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
`
const StoryImage= styled.img`
    max-height: 90vh;
    object-fit: contain;
`

const StoryViewer = ( {stories}) => {

    const [curentStoryIndex, setCurentStoryIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNextStory = () => {
        if(curentStoryIndex < stories.length-1){
            setCurentStoryIndex(curentStoryIndex+1);
            setActiveIndex(activeIndex+1);
        }
        else if(curentStoryIndex === stories.length-1){
            setCurentStoryIndex(0);
            setActiveIndex(0);
        }
    }

    const handleOnClickLeft = () =>{
        if(activeIndex !== 0) {
            setActiveIndex(activeIndex - 1)
            setCurentStoryIndex(curentStoryIndex - 1)
        }
            
    }

    const handleOnClickRight = () =>{
        if(activeIndex !== stories.length-1) {
            setActiveIndex(activeIndex + 1)
            setCurentStoryIndex(curentStoryIndex + 1)
        }
            
    }

    useEffect(() => {
        
        const interval = setInterval(() => {handleNextStory()},2000)

        return ()=> clearInterval(interval);

    }, [curentStoryIndex])

    return (
        <div className="relative w-full">
            <StoryViewerContainer>
                <div className="flex flex-col">
                    <div className="absolute top-0 flex w-full">
                        {stories.map((item, index) => <ProgressBar key={index} duration={2000} index={index} activeIndex={activeIndex}/>)}
                    </div>

                    <div className="mt-10 ml-10 flex flex-row items-center">
                        <div >
                            <img className="w-12 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_640.jpg" alt="" />
                        </div>
                        <div className="flex flex-row ml-3">
                            <p className=" storyUsername font-semibold text-sm">username</p>
                            <p className="storyTime ml-3 text-sm font-semibold">2 h</p>
                        </div>
                                
                    </div>
                    <div className="flex flex-row justify-center items-center">

                    
                        <div className="h-[50%] w-[15%]   m-5 ml-5">
                            { activeIndex !== 0 && <StoryImage className="h-full w-full  opacity-60" src={stories?.[curentStoryIndex-1].image} />}
                        </div>
                        
                        <div className="w-[4%]">
                        { activeIndex !== 0 && <div onClick={handleOnClickLeft} className="h-5 w-5 m-2 rounded-full bg-white items-center flex justify-center opacity-50 hover:opacity-90">
                            <LuChevronLeft />
                        </div>}
                        </div>
                        
                        
                        <div className="flex w-[40vw] mb-4  justify-center">
                            <StoryImage src={stories?.[curentStoryIndex].image} />
                        </div>

                            

                        <div className="w-[4%]">
                        { activeIndex !== stories.length-1 && <div onClick={handleOnClickRight} className="h-5 w-5 m-2 rounded-full bg-white items-center justify-center flex opacity-50 hover:opacity-90">
                            <LuChevronRight />
                        </div>}
                        </div>
                        

                        <div className="h-[50%] w-[15%]  m-5 mr-5">
                            {activeIndex !== stories.length-1 && <StoryImage className="h-full w-full opacity-60" src={stories?.[curentStoryIndex+1].image} />}
                        </div>
                        
                    </div>

                </div>
            </StoryViewerContainer>
        </div>
    )
}

export default StoryViewer;