import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseVideo from "./Component/Course_video/CourseVideo";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Courses from "./Component/Courses/Courses";
import Authentication from "./Component/BecomeAnInstructor/Authentication";
import Footer from "./Component/Footer/Footer";
import CoursesDetails from "./Component/CoursesDetails/CoursesDetails";

import AccountSetting from "./Component/Account_setting/AccountSetting";
import MyLearning from "./Component/learning/MyLearning";
import Purchases from "./Component/my_Purchases/Purchases";

import Certificate from "./Component/Certificate/Certificate";
import ErrorPage from "./Component/ErrorPage";


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>

      
        <Route path='/' element={<Home/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/:id" element={<Authentication/>}></Route>
        <Route path="/instructor" element={<Authentication/>}></Route>
        <Route path="/courses/:id" element={<CoursesDetails title={"Web Development Masterclass - Online Certification Course"}/>}></Route>
        
        <Route  path="/learning/my-courses" element={<MyLearning redirect={true}/>}></Route>
        <Route  path="/learning/wishlist" element={<MyLearning redirect={false}/>}></Route>
        <Route  path="/profile/basic-information" element={<AccountSetting/>}></Route>
        <Route  path="/learning/my-purchase-history" element={<Purchases/>}></Route>
        <Route path="/learning/my-courses/course-name" element={<CourseVideo/>}></Route>
        <Route path="/learning/my-courses/course-name/certificate" element={<Certificate/>}></Route>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
