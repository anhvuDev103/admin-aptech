import React from 'react';

const AuthManager = () => {
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
          <tr>
            <th scope="row">1</th>
            <td>001203023055</td>
            <td>Nguyễn Trung Đức</td>
            <td>14/05/2003</td>
            <td style={{ textAlign: 'center' }}>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Chấp Nhận
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ backgroundColor: 'red', borderColor: 'red' }}
              >
                Từ Chối
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ backgroundColor: 'red', borderColor: 'red' }}
              >
                xem chi tiết
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>001203023055</td>
            <td>Nguyễn Trung Đức</td>
            <td>14/05/2003</td>
            <td style={{ textAlign: 'center' }}>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Chấp Nhận
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ backgroundColor: 'red', borderColor: 'red' }}
              >
                Từ Chối
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ backgroundColor: 'red', borderColor: 'red' }}
              >
                xem chi tiết
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AuthManager;
