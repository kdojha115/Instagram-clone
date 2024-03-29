import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GrEmoji } from "react-icons/gr";
import "./CreatePostModal.css";


const CreatePostModal = ({onClose, isOpen}) => {

    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState();
    const [caption, setCaption] = useState("");

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.file[0];
        if(droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/")){
            setFile(droppedFile)
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect="copy";
        setIsDragOver(true);
    }

    const handleDragLeave = () => {
        setIsDragOver(false)
    }

    const handleOnChange = (e) => {

        const file = e.target.files[0];
        if(file && (file.type.startsWith("image/") || file.type.startsWith("video/"))){
            setFile(file);
        }
        else{
            setFile(null);
            alert("please select an image or video")
        }
    }

    const handleCaptionChange = (e) => {
        setCaption(e.target.value)
    }

    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen}  isCentered>
            <ModalOverlay />
            <ModalContent>

                <div className="flex justify-between py-1  items-center">
                    <p className="flex items-center ml-[43%] font-semibold">Create new Post</p>

                    <Button className="border-0 mr-1"  variant={"ghost"} size="sm" colorScheme={'blue'}>
                        Share
                    </Button>
                </div>
                <hr/>
                <ModalBody>

                    <div className="h-[70vh] justify-between pb-3 flex">

                        <div className="w-[62%] ">
                            {!file && <div
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            className="drag-drop h-full "
                            >
                                <div>
                                    <FaPhotoVideo className="text-3xl"/>
                                    <p>Drag Photo or Video here</p>
                                </div>
                                <label htmlFor="file-upload" className="custom-file-upload">Select From Computer</label>
                                <input className="fileInput" type="file" id="file-upload" accept="image/*, video/*" onChange={handleOnChange} />
                            </div>}

                            {file && <img className="max-h-full " src={URL.createObjectURL(file)} alt="" />}
                        </div>

                        <div className="w-[1px] border h-full"></div>

                        <div className="w-[38%]">

                            <div className="flex items-center px-2">
                                <img className="w-7 h-7 rounded-full" src="https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg" alt="" />
                                <p className="font-semibold ml-4">username</p>
                            </div>

                            <div className="px-2">
                                <textarea className="captionInput" placeholder="Write a caption..." onChange={handleCaptionChange} cols="" rows="7"></textarea>
                            </div>

                            <div className="px-2 mb-2 flex justify-between">
                                <GrEmoji className="h-6 w-6 cursor-pointer"/>
                                <p className="opacity-50 text-sm">{caption?.length}/2,200</p>
                            </div>

                            <hr/>

                            <div className="p-2 flex justify-between items-center">
                                <input className="locationInput" type="text" placeholder="Add Location" name="location"/>
                                <GoLocation className="cursor-pointer"/>
                            </div>

                            <hr/>

                        </div>
                    </div>

                </ModalBody>
            
            </ModalContent>
            </Modal>
        </div>
    )
}

export default CreatePostModal;