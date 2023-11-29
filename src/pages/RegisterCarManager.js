import React, { useEffect, useState } from 'react';
import http from '../utils/http';
import CarRow from '../components/CarRow';
import Img from '../components/Img';

import no_car from '../../src/assets/imgs/no_car.png';

const RegisterCarManager = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await http.get('/get_verify_car');
      setData(data);
    })();
  }, []);

  const accept = async (car_id) => {
    await http.put('/change_status_car', {
      car_id,
      car_status_id: 3,
    });

    window.location.reload();
  };

  const reject = async (car_id) => {
    await http.put('/change_status_car', {
      car_id,
      car_status_id: 2,
    });

    window.location.reload();
  };

  return (
    <div className="xac_minh_danh_tinh">
      {data.length > 0 ? (
        data.map((d) => (
          <CarRow car={d} key={d.booking_id} accept={accept} reject={reject} />
        ))
      ) : (
        <Img className="car-img" src={no_car} alt="car" />
      )}
    </div>
  );
};

export default RegisterCarManager;
