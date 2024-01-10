import { AiFillCompass, AiFillHeart, AiFillHome, AiFillMessage, AiFillPlusCircle, AiOutlineCompass, AiOutlineFileSearch, AiOutlineHeart, AiOutlineHome, AiOutlineMessage, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiProfileFill, RiVideoFill, RiVideoLine } from "react-icons/ri";

export const mainu=[
    {title:"Home", icon: <AiOutlineHome className="text-2xl mr-5" />, iactiveIcon: <AiFillHome className="text-2xl mr-5"/>},
    {title:"Search", icon: <AiOutlineSearch className="text-2xl mr-5"/>, iactiveIcon: <AiOutlineFileSearch className="text-2xl mr-5"/>},
    {title:"Explore", icon: <AiOutlineCompass className="text-2xl mr-5"/>, iactiveIcon: <AiFillCompass className="text-2xl mr-5"/>},
    {title:"Reels", icon: <RiVideoLine className="text-2xl mr-5"/>, iactiveIcon: <RiVideoFill className="text-2xl mr-5"/>},
    {title:"Message", icon: <AiOutlineMessage className="text-2xl mr-5"/>, iactiveIcon: <AiFillMessage className="text-2xl mr-5"/>},
    {title:"Notification", icon:<AiOutlineHeart className="text-2xl mr-5"/>, iactiveIcon: <AiFillHeart className="text-2xl mr-5"/>},
    {title:"Create", icon: <AiOutlinePlus className="text-2xl mr-5"/>, iactiveIcon: <AiFillPlusCircle className="text-2xl mr-5"/>},
    {title:"Profile", icon: <CgProfile className="text-2xl mr-5"/>, iactiveIcon: <RiProfileFill className="text-2xl mr-5"/>}
]