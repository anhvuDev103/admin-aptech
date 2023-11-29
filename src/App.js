import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AuthManager from './pages/AuthManager';
import RegisterCarManager from './pages/RegisterCarManager';
import BookingManager from './pages/BookingManager';
import Login from './pages/Login';

function App() {
  const isLogin = !!JSON.parse(localStorage.getItem('ADMIN_ID'));
  return (
    <div className={isLogin ? '' : 'login'}>
      {!isLogin ? (
        <div className="row">
          <Header />
          <Sidebar />
          <div class="col-2"></div>
          <div className="col-10">
            <Routes>
              <Route path="quan-ly-xac-minh" element={<AuthManager />} />
            </Routes>
            <Routes>
              <Route
                path="quan-ly-dang-ky-xe"
                element={<RegisterCarManager />}
              />
            </Routes>
            <Routes>
              <Route path="quan-ly-booking" element={<BookingManager />} />
            </Routes>
            {/* <Routes>
              <Route path="quan-ly-nguoi-dung" element={<UserManager />} />
            </Routes> */}
          </div>
        </div>
      ) : (
        <Login />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
