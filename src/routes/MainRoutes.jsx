import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import LandingPage from '../components/landing-page/LandingPage'
import AdminTest from '../containers/admin/pages/AdminTest'
import AdminRoute from './admin/AdminRoute'
import UserRoute from './user/UserRoute'
import GetAllTests from '../containers/user/GetAllTests'
import CurrentTest from '../containers/user/CurrentTest'
import SigninPage from '../containers/public/SigninPage'
import SignupPage from '../containers/public/SignupPage'
import AdminCreateTest from '../containers/admin/pages/adminCreateTestRealEnglishWords/AdminCreateTest'

const MainRoutes = () => {
   return (
      <div>
         <Routes>
            {/* Guest */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<SigninPage />} />
            <Route path="/sign-up" element={<SignupPage />} />

            {/* User */}
            <Route element={<ProtectedRoute />}>
               <Route path="/user/" element={<UserRoute />}>
                  <Route path="tests" element={<GetAllTests />} />
                  <Route path="tests/:testId" element={<CurrentTest />} />
               </Route>
            </Route>

            {/* Admin */}
            <Route element={<ProtectedRoute />}>
               <Route path="/admin/" element={<AdminRoute />}>
                  <Route path="test" element={<AdminTest />} />
                  <Route path="createtest" element={<AdminCreateTest />} />
               </Route>
            </Route>
         </Routes>
      </div>
   )
}

export default MainRoutes
