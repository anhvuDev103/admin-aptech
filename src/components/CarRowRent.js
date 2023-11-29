import './styles/CarRow.scss';

import { toast } from 'react-toastify';
import http from '../utils/http';
import { IMAGES_URL } from '../constants/urls';
import Img from './Img';
import { convertPrice } from '../utils/common';
import { RENTAL_TAB_OPTIONS } from '../constants/labels';
import { AddressIcon } from './Svg';
import Button from './Button';
import no_car from '../../src/assets/imgs/no_car.png';

const CarRowRent = ({ car, accept, reject }) => {
  const carImage = car?.image?.split('-')[0];

  return (
    <>
      {CarRowRent.length === 0 && (
        <div>
          <img
            style={{
              margin: '64px auto 0',
              display: 'block',
            }}
            width={220}
            src={no_car}
            alt="no_car"
          />
          <div className="text-center fw-bold">Không có bản ghi phù hợp</div>
        </div>
      )}
      {CarRowRent.length > 0 && (
        <div className="CarRow">
          <Img className="car-img" src={no_car} alt="car" />

          <Img
            className="car-img"
            src={`${IMAGES_URL}/${carImage}`}
            alt="car"
          />

          <div className="info grap_info">
            <div className="name ">{car?.model_name}</div>
            <div className="car-info">
              <div className="block-info smallTxt car_pro_name_rate">
                Ngày bắt đầu:
                <span>
                  {car?.start_date} - {car?.start_time}:00
                </span>
              </div>
              <div className="block-info smallTxt car_pro_name_rate">
                Ngày trả xe:
                <span>
                  {car?.end_date} - {car?.end_time}:00
                </span>
              </div>
              <div className="car-price">
                <span className="total_price">Tổng số tiền :</span>{' '}
                <span className="price price_total">
                  {convertPrice(+car?.total)}
                </span>
              </div>
              <div className="status mt-1">
                Tạo bởi: {car?.name} - Số điện thoại {car?.phone}
              </div>
              <div className="status status2 mt-2">
                Trạng thái: {RENTAL_TAB_OPTIONS[car?.boocking_status_id]}
              </div>
              <div className="address mt-2">
                <AddressIcon className="icon" />
                <span className="title address_c">{car?.address}</span>
              </div>
            </div>
          </div>
          <div className="info">
            <div
              className="actions"
              style={{
                marginTop: 12,
              }}
            >
              <div className="info grap_sen"></div>
              <Button
                className="btn_css"
                onClick={() => accept(car.booking_id)}
              >
                Chấp nhận
              </Button>
              <Button
                className="btn_css"
                onClick={() => reject(car.booking_id)}
              >
                Từ Chối
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarRowRent;
