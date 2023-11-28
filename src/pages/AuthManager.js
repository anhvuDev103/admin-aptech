import React, { useEffect, useState } from 'react';
import http from '../utils/http';
import { toast } from 'react-toastify';

const AuthManager = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await http.get('/get_customer_verify');
      setData(data);
    })();
  });

  const accept = async (customer_id) => {
    const { data } = await http.put('/valid_verify_customer', {
      customer_id,
    });

    if (data.status === 1) {
      toast('Accepted user!');
      return;
    }

    toast('Failed!');
  };

  const reject = async (customer_id) => {
    const { data } = await http.put('/invalid_verify_customer', {
      customer_id,
    });

    if (data.status === 1) {
      toast('Rejected user!');
      return;
    }

    toast('Failed!');
  };

  return (
    <div className="xac_minh_danh_tinh">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Số CCCD</th>
            <th scope="col">Họ Và Tên</th>
            <th scope="col">Ngày Sinh</th>
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
              <td>{d.name_display}</td>
              <td>{d.birthday}</td>
              <td style={{ textAlign: 'center' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => accept(d.customer_id)}
                >
                  Chấp Nhận
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ backgroundColor: 'red', borderColor: 'red' }}
                  onClick={() => reject(d.customer_id)}
                >
                  Từ Chối
                </button>
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ backgroundColor: 'red', borderColor: 'red' }}
                >
                  xem chi tiết
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthManager;
