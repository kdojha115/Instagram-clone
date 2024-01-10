import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
    BsBookmark,
    BsBookmarkFill,
    BsEmojiSmile,
    BsThreeDots,
} from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentCard from "./CommentCard";
import "./CommentModal.css";

const CommentModal = ({
    onClose,
    isOpen,
    isPostLiked,
    handlePostLike,
    isPostSaved,
    handlePostSaved,
}) => {
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className="h-[75vh] flex pr-3 ">
                            <div className="w-[45%] flex flex-col justify-center">
                                <img
                                    className="max-h-full w-full"
                                    src="https://cdn.pixabay.com/photo/2017/07/31/11/44/laptop-2557571_640.jpg"
                                    alt=""
                                />
                            </div>
                            <div className=" w-[55%] ">
                                <div className="flex justify-between items-center py-5">
                                    <div className="flex items-center pl-10">
                                        <div>
                                            <img
                                                className="w-9 h-9 rounded-full"
                                                src="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_640.jpg"
                                                alt=""
                                            />
                                        </div>

                                        <div className="ml-2">
                                            <p>username</p>
                                        </div>
                                    </div>
                                    <BsThreeDots />
                                </div>

                                <hr />

                                <div className="comment">
                                    {[1, 1, 1, 1, 1].map((item) => (
                                        <CommentCard />
                                    ))}
                                </div>

                                <div className="">
                                    <div className="flex justify-between items-center w-full  py-4">
                                        <div className="flex space-x-2 items-center px-4">
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

                                            <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />

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

                                    <div className="w-full py-2 px-4">
                                        <p>10 likes</p>
                                        <p className="opacity-50 text-sm">1 day ago</p>
                                    </div>

                                    <div className="  w-full">
                                        <div className="flex w-full items-center px-5 ">
                                            <BsEmojiSmile />
                                            <input
                                                className="commentInput"
                                                type="text"
                                                placeholder="Add a comment..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default CommentModal;
