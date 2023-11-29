import { IMAGES_URL } from '../constants/urls';
import { convertPrice } from '../utils/common';
import Button from './Button';
import Img from './Img';
// import './styles/Sidebar.scss';
const CarRow = ({ car, accept, reject }) => {
  const carImage = car?.image?.split('-')[0];
  return (
    <>
      <div className="CarRow">
        <Img className="car-img" src={`${IMAGES_URL}/${carImage}`} alt="car" />
        <div className="info">
          <div className="name">{car?.model_name}</div>
          <div className="car-info">
            <div className="car-price mt-2">
              <span className="price">{convertPrice(+car?.price)}</span> / ngày
            </div>
          </div>
          <div className="status">Biển số: {car?.number_plate}</div>
          <div className="status">Năm sản suất: {car?.year_manufacture}</div>
          <div className="status">
            Đăng ký bởi: {car?.name_display} - Số điện thoại {car?.phone}
          </div>
          <div className="sen"></div>
          <div className="actions">
            <Button className="btn_css" onClick={() => accept(car.car_id)}>
              Chấp nhận
            </Button>
            <Button className="btn_css" onClick={() => reject(car.car_id)}>
              Từ Chối
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarRow;
