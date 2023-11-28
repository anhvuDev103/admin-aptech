import React, { useEffect, useState } from 'react';
import http from '../utils/http';

const Header = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem('ADMIN_ID')) {
      (async () => {
        const { data } = await http.get('/get_customer', {
          params: {
            id: localStorage.getItem('ADMIN_ID'),
          },
        });

        setData(data);
      })();
    }
  }, []);

  return (
    <div class="col-12 row_header row">
      <div class="text-center header_title col-10 mt-3">
        Quản lý hệ thống Mioto
      </div>
      <div class="header_content col-2">
        xin chao <span>{data?.display_name || 'admin'}</span>
      </div>
    </div>
  );
};

export default Header;
