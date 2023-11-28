import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import http from '../utils/http';
import CarRowRent from '../components/CarRowRent';

const BookingManager = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await http.get('/get_booking_verify');
      setData(data);
    })();
  });

  const accept = async (booking_id) => {
    const { data } = await http.put('/change_status_booking', {
      booking_id,
      boocking_status_id: 2,
    });

    if (data.status === 1) {
      toast('Accepted booking!');
      return;
    }

    toast('Failed!');
  };

  const reject = async (booking_id) => {
    const { data } = await http.put('/change_status_booking', {
      booking_id,
      boocking_status_id: 5,
    });

    if (data.status === 1) {
      toast('Rejected booking!');
      return;
    }

    toast('Failed!');
  };

  return (
    <div className="xac_minh_danh_tinh">
      {data.map((d) => (
        <CarRowRent car={d} key={d.booking_id} />
      ))}
    </div>
  );
};

export default BookingManager;
