import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = () => {

    const [isCommentLiked, setIsCommentLiked ] = useState();

    const handleLikeComment = () => {
        setIsCommentLiked(!isCommentLiked)
    }


    return (
        <div>
            <div className="flex items-center justify-between  py-5">
                <div className="flex items-center px-4">
                    <div>
                        <img className="h-9 w-9 rounded-full" src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_640.jpg" alt="" />
                    </div>

                    <div className="ml-3">
                        <p>
                            <span className="font-semibold">username</span>
                            <span className="ml-2">Nice Post</span>
                        </p>

                        <div className="flex items-center space-x-3 text-as opacity-60 pt-1">
                            <span>1 min ago</span>
                            <span>12 likes</span>
                        </div>
                    </div>
                </div>

                {isCommentLiked? <AiFillHeart onClick={handleLikeComment} className="test-xs hover:opacity-50 cursor-pointer text-red-600"/>: <AiOutlineHeart onClick={handleLikeComment} className="test-xs hover:opacity-50 cursor-pointer"/>}
            </div>
        </div>
    )
}

export default CommentCard