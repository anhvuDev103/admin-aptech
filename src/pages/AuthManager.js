import React, { useEffect, useState } from 'react';
import http from '../utils/http';
import { toast } from 'react-toastify';
import { IMAGES_URL, IMAGES_VERIFY_CS } from '../constants/urls';
import Img from '../components/Img';

import no_car from '../../src/assets/imgs/no_car.png';
// import '../components/styles/Sidebar.scss';

const AuthManager = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await http.get('/get_customer_verify');
      setData(data);
    })();
  }, []);

  const accept = async (customer_id) => {
    const { data } = await http.put('/valid_verify_customer', {
      customer_id,
    });

    window.location.reload();
  };

  const reject = async (customer_id) => {
    const { data } = await http.put('/invalid_verify_customer', {
      customer_id,
    });

    window.location.reload();
  };

  return (
    <div className="xac_minh_danh_tinh">
      {data.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Số CCCD</th>
              <th scope="col">Họ Và Tên</th>
              <th scope="col">Ngày Sinh</th>
              <th scope="col">Ảnh mặt trước</th>
              <th scope="col">Ảnh mặt sau</th>
              <th scope="col" style={{ textAlign: 'center' }}>
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={d.customer_id}>
                <th scope="row">{i + 1}</th>
                <td>{d.id_number}</td>
                <td>{d.full_name}</td>
                <td>{d.birthday}</td>
                <td>
                  <Img
                    className="car-img"
                    width="150px"
                    src={`${IMAGES_VERIFY_CS}/${d.id_frontside}`}
                    alt="Lỗi ảnh"
                  />
                </td>
                <td>
                  <Img
                    className="car-img"
                    width="150px"
                    src={`${IMAGES_VERIFY_CS}/${d.id_backside}`}
                    alt="Lỗi ảnh"
                  />
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button
                    type="button"
                    className="button-24 button-24_cl"
                    onClick={() => accept(d.customer_id)}
                  >
                    Chấp Nhận
                  </button>
                  <button
                    type="button"
                    className="button-24 ms-3"
                    onClick={() => reject(d.customer_id)}
                  >
                    Từ Chối
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <div className='d-flex justify-content-center mt-3'>
            <Img className="car-img" width="300px" src={no_car} alt="car" />
          </div>
          <div className='d-flex justify-content-center'>
            <div>Không có bản ghi phù hợp</div>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthManager;
