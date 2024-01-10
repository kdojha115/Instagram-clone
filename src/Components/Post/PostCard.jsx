import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
    BsBookmark,
    BsBookmarkFill,
    BsEmojiSmile,
    BsThreeDots,
} from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import CommentModal from "../Comment/CommentModal";
import "./PostCard.css";

const PostCard = () => {
    const [showDropDown, setShowDropDown] = useState(false);

    const [isPostLiked, setIsPostLiked] = useState(false);

    const [isPostSaved, setIsPostSaved] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate();

    const handleOpenCommentModel = () => {
        onOpen();
    };

    const handleOpenProfile = () => {
        navigate("/username")
    }

    const handlePostSaved = () => {
        setIsPostSaved(!isPostSaved);
    };

    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    };

    const handleClick = () => {
        setShowDropDown(!showDropDown);
    };
    return (
        <div>
            <div className=" rounded-md w-full">
                <div className="flex justify-between items-center w-full py-4 px-5">
                    <div className="flex items-center">
                        <img
                            className="w-12 h-12 rounded-full cursor-pointer"
                            onClick={handleOpenProfile}
                            src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_640.jpg"
                            alt=""
                        />

                        <div className="pl-2">
                            <p className="font-semibold text-sm cursor-pointer" onClick={handleOpenProfile} >username</p>
                            <p className="font-thin text-sm ">location</p>
                        </div>
                    </div>

                    <div className="dropdown">
                        <BsThreeDots className="dots" onClick={handleClick} />
                        <div className="dropdown-content">
                            {showDropDown && (
                                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                                    Delete
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <img
                        className="w-full"
                        src="https://cdn.pixabay.com/photo/2017/07/31/11/44/laptop-2557571_640.jpg"
                        alt=""
                    />
                </div>

                <div className="flex justify-between items-center w-full px-5 py-4">
                    <div className="flex space-x-2 items-center ">
                        {isPostLiked ? (
                            <AiFillHeart
                                className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                                onClick={handlePostLike}
                            />
                        ) : (
                            <AiOutlineHeart
                                className="text-2xl hover:opacity-50 cursor-pointer"
                                onClick={handlePostLike}
                            />
                        )}

                        <FaRegComment
                            onClick={handleOpenCommentModel}
                            className="text-xl hover:opacity-50 cursor-pointer"
                        />

                        <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
                    </div>

                    <div className="cursor-pointer">
                        {isPostSaved ? (
                            <BsBookmarkFill
                                className="text-xl hover:opacity-50 cursor-pointer"
                                onClick={handlePostSaved}
                            />
                        ) : (
                            <BsBookmark
                                className="text-xl hover:opacity-50 cursor-pointer"
                                onClick={handlePostSaved}
                            />
                        )}
                    </div>
                </div>

                <div className="w-full  px-5">
                    <p className="font-semibold text-sm">10 likes</p>

                    <span className="font-semibold text-sm">username</span>
                    <span className="text-sm ml-1 caption">Coffee in hand, laptop open, conquering the day one task at a time. #WorkModeActivated</span>

                    <p className="opacity-50 cursor-pointer " onClick={handleOpenCommentModel}>view all 10 comments</p>
                </div>

                <div className="border-b  w-full">
                    <div className="flex w-full items-center px-2 ">
                        
                        <input
                            className="commentInput"
                            type="text"
                            placeholder="Add a comment..."
                        />
                        <BsEmojiSmile />

                    </div>
                </div>
            </div>



            <CommentModal
                handlePostLike={handlePostLike}
                onClose={onClose}
                isOpen={isOpen}
                handlePostSaved={handlePostSaved}
                isPostLiked={isPostLiked}
                isPostSaved={isPostSaved}
            />
        </div>
    );
};

export default PostCard;
