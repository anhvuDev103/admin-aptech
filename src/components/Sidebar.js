import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div class="col-2 sidebar_wrap">
      <ul class="nav_sidebar">
        <NavLink
          to={'/quan-ly-xac-minh'}
          href=""
          class="nav_link chang_color_admin"
        >
          <li class="sidebar_icon">
            <i class="fa-solid fa-gauge me-3"></i>Quản Lý Xác Minh
          </li>
        </NavLink>
        <NavLink to={'/quan-ly-dang-ky-xe'} href="" class="nav_link">
          <li class="sidebar_icon side_item3">
            <i class="fa-solid fa-cart-shopping me-3"></i>Quản Lý Đăng Kí Xe
          </li>
        </NavLink>
        <NavLink to={'/quan-ly-booking'} href="" class="nav_link">
          <li class="sidebar_icon side_item3">
            <i class="fa-brands fa-product-hunt me-3"></i>Quản Lý Booking
          </li>
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
