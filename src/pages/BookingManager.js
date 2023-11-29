import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import http from '../utils/http';
import CarRowRent from '../components/CarRowRent';
import Button from '../components/Button';
import Img from '../components/Img';

import no_car from '../../src/assets/imgs/no_car.png';

const BookingManager = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await http.get('/get_booking_verify');
      setData(data);
    })();
  }, []);

  const accept = async (booking_id) => {
    const { data } = await http.put('/change_status_booking', {
      booking_id,
      boocking_status_id: 2,
    });

    window.location.reload();
  };

  const reject = async (booking_id) => {
    const { data } = await http.put('/change_status_booking', {
      booking_id,
      boocking_status_id: 5,
    });

    window.location.reload();
  };

  return (
    <div className="xac_minh_danh_tinh">
      {data.length > 0 ? (
        data.map((d) => (
          <CarRowRent
            car={d}
            key={d.booking_id}
            accept={accept}
            reject={reject}
          />
        ))
      ) : (
        <Img className="car-img" src={no_car} alt="car" />
      )}
    </div>
  );
};

export default BookingManager;
