import React from "react"
import { Route, Routes } from "react-router-dom"
import Sidebar from "../../Components/Sidebar/Sidebar"
import HomePage from "../HomePage/Homepage"
import Profile from "../Profile/Profile"
import Story from "../Story/Story"
// import Profile from "../Profile/profile"

const Router = () => {
    return (
        <div>
            <div className="flex">
                <div className="w-[20%] border border-l-slate-500 ">
                    <Sidebar/>
                </div>
                <div className="w-full">
                    <Routes>
                        <Route path="/" element={<HomePage/>}></Route>
                        <Route path="/username" element={<Profile/>}></Route>
                        <Route path="/story" element={<Story/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Router