import { useDisclosure } from "@chakra-ui/react"
import React from "react"
import { AiFillHeart } from "react-icons/ai"
import { FaComment } from "react-icons/fa"
import CommentModal from "../Comment/CommentModal"
import './ReqUserPostCard.css'

const ReqUserPostCard = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpenCommentModel = () => {
        onOpen();
    };

    return (
        <div>

        
            <div className="flex flex-col w-[23vw] h-[36vh]">
                <div className="post w-full h-full" onClick={handleOpenCommentModel}>
                    <img className="cursor-pointer" src="https://cdn.pixabay.com/photo/2023/04/20/10/19/coding-7939372_640.jpg" alt="" />
                    <div className="overlay">
                        <div className="overlay-text flex justify-between">
                            <div>
                                <AiFillHeart/>
                                <span>72</span>
                            </div>
                            <div>
                                <FaComment/>
                                <span>16</span>
                            </div>
                        </div>
                    </div>
                </div>
                <CommentModal onClose={onClose} isOpen={isOpen}/>
            </div>

            <div className="flex flex-col w-[23vw] h-[36vh] cropped-video-container">
                <div className="post w-full h-full" onClick={handleOpenCommentModel}>
                    <video width="100%" height="100%" >
                        <source src={"https://cdn.pixabay.com/vimeo/824281872/man-160975.mp4?width=360&hash=6695040ea1886e6961df641542a7749f845cfc00"} type="video/mp4" />
                    </video>
                    <div className="overlay">
                        <div className="overlay-text flex justify-between">
                            <div>
                                <AiFillHeart/>
                                <span>72</span>
                            </div>
                            <div>
                                <FaComment/>
                                <span>16</span>
                            </div>
                        </div>
                    </div>
                </div>
                <CommentModal onClose={onClose} isOpen={isOpen}/>
            </div>


            
        </div>
    )
}

export default ReqUserPostCard