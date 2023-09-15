import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import {Course999 } from "../Components/Course999";
import { CourseFree } from "../Components/CourseFree";



export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/course-999" element={<Course999 />} />
        <Route path="/course-free" element={<CourseFree/>}/>


    </Routes>
    </>
  )
}