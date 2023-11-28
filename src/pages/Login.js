import React, { useState } from 'react';
import http from '../utils/http';

const Login = () => {
  const [form, setForm] = useState({
    phone: '',
    password: '',
  });

  const changeInput = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const login = async ({ phone, password }) => {
    try {
      const { data } = await http.get('/check_login', {
        params: {
          phone,
          password,
        },
      });

      if (data.status === 1) {
        localStorage.setItem('ADMIN_ID', JSON.stringify(data.customer_id));
        window.location.reload();
      }
    } catch (error) {}
  };
  return (
    <div id="form_selector">
      <div className="grap">
        <div className="title">---Admin---</div>
        <div className="grap_input">
          <div className="grap_email">
            <input
              className="input_email"
              id="phone"
              name="phone"
              style={{ paddingLeft: 10 }}
              type="text"
              placeholder="Phone"
              onChange={changeInput}
            />
            <span className="message" />
          </div>
          <div className="grap_email">
            <input
              className="input_pass"
              id="password"
              name="password"
              style={{ paddingLeft: 10 }}
              type="password"
              placeholder="Password"
              onChange={changeInput}
            />
            <span className="message" />
          </div>
          <div className="grap_button">
            <button onClick={() => login(form)} className="button_model">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
