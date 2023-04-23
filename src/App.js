import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import VerifyEmail from "./VerifyEmail";
import Login from "./Login";
import { useState, useEffect } from "react";
import { AuthProvider } from "./AuthContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./PrivateRoute";
import { Navigate } from "react-router-dom";
import Dashboard from "./Admin/Pages/Dashboard";
import Sidebar from "./Admin/Sidebar";
import PostList from "./Components/Student/allStudent/PostList";
import TeacherForm from "./Components/Teacher/allteacher/TeacherForm";
import DetailList from "./Components/Teacher/allteacher/DetailList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Registration from "./Components/Student/allStudent/Registration";
import  Update  from "./Components/Student/allStudent/Update";
import TimeTable from "./Components/time-table/nur-ukg/TimeTable";
import TableList from "./Components/time-table/nur-ukg/TableList";
import FeesList from "./Components/fees/FeesList";
import FeesForm from "./Components/fees/FeesForm";
import ShowList from "./Components/Teacher/allteacher/ShowList";
import LeaveForm from "./Components/leave/LeaveForm";
import LeaveList from "./Components/leave/LeaveList";
import SalleryForm from "./Components/sallery/SalleryForm";
import SalleryList from "./Components/sallery/SalleryList";








function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <Dashboard />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <Dashboard />
                  </Sidebar>
                </PrivateRoute>
              }
            />
 
   
       <Route
              exact
              path="/registration"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <Registration />
                  </Sidebar>
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/postlist"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <PostList />
                  </Sidebar>
                </PrivateRoute>
              }
            />

         <Route
              exact
              path="/edit/:id"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <Update />
                  </Sidebar>
                </PrivateRoute>
              }
            />

           <Route
              exact
              path="/teacherform"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <TeacherForm />
                  </Sidebar>
                </PrivateRoute>
              }
            />


             <Route
              exact
              path="/detaillist"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <DetailList />
                  </Sidebar>
                </PrivateRoute>
              }
            />


            <Route
              exact
              path="/showlist"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <ShowList />
                  </Sidebar>
                </PrivateRoute>
              }/>


          <Route
              exact
              path="/timetable"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <TimeTable />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            

           <Route
              exact
              path="/tablelist"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <TableList />
                  </Sidebar>
                </PrivateRoute>
              }
            />

           <Route
              exact
              path="/feesform"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <FeesForm />
                  </Sidebar>
                </PrivateRoute>
              }
            /> 


           <Route
              exact
              path="/feeslist"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <FeesList />
                  </Sidebar>
                </PrivateRoute>
              }
            />

<Route
              exact
              path="/leaveform"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <LeaveForm />
                  </Sidebar>
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/leavelist"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <LeaveList />
                  </Sidebar>
                </PrivateRoute>
              }
            />

             <Route
              exact
              path="/salleryform"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <SalleryForm />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            

           <Route
              exact
              path="/sallerylist"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <SalleryList />
                  </Sidebar>
                </PrivateRoute>
              }
            />



         










            <Route
              path="/login"
              element={
                !currentUser?.emailVerified ? (
                  <Login />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/register"
              element={
                !currentUser?.emailVerified ? (
                  <Register />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route path="/verify-email" element={<VerifyEmail />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}
export default App;
