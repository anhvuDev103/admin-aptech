import React from 'react';
import { NavLink } from 'react-router-dom';
// import './styles/Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="col-2 sidebar_wrap">
      <ul className="nav_sidebar">
        <NavLink
          to={'/quan-ly-xac-minh'}
          href=""
          style={{ borderBottom: '1px solid #ddd' }}
          className="nav_link chang_color_admin sidebar_icon c_admin"
        >
          <li class="">Quản Lý Xác Minh</li>
        </NavLink>
        <NavLink
          to={'/quan-ly-dang-ky-xe'}
          href=""
          style={{ borderBottom: '1px solid #ddd' }}
          className="nav_link  sidebar_icon c_admin"
        >
          <li class="">Quản Lý Đăng Kí Xe</li>
        </NavLink>
        <NavLink
          to={'/quan-ly-booking'}
          href=""
          style={{ borderBottom: '1px solid #ddd' }}
          className="nav_link  sidebar_icon"
        >
          <li class="">Quản Lý Booking</li>
        </NavLink>

        {/* <NavLink to={'/quan-ly-nguoi-dung'} href="" class="nav_link">
          <li class="sidebar_icon side_item3">
            <i class="fa-solid fa-user me-3"></i>Quản Lý người dùng
          </li>
        </NavLink> */}
        <a
          href=""
          class="nav_link"
          onClick={() => localStorage.removeItem('ADMIN_ID')}
        >
          <li class="sidebar_icon side_item3">
            <i class="fa-solid fa-wrench me-3"></i>Đăng xuất
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Sidebar;
