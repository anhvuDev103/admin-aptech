import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AuthManager from './pages/AuthManager';
import RegisterCarManager from './pages/RegisterCarManager';
import BookingManager from './pages/BookingManager';
import UserManager from './pages/UserManager';

function App() {
  return (
    <div className="row">
      <Header />
      <Sidebar />
      <div class="col-2"></div>
      <div className="col-10">
        <Routes>
          <Route path="quan-ly-xac-minh" element={<AuthManager />} />
        </Routes>
        <Routes>
          <Route path="quan-ly-dang-ky-xe" element={<RegisterCarManager />} />
        </Routes>
        <Routes>
          <Route path="quan-ly-booking" element={<BookingManager />} />
        </Routes>
        <Routes>
          <Route path="quan-ly-nguoi-dung" element={<UserManager />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
