import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import {Course } from "../Components/Course";



export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/course" element={<Course />} />


    </Routes>
    </>
  )
}