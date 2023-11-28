import React from 'react';

const Login = () => {
  return (
    <form action id="form_selector" method="post">
      <div className="grap">
        <div className="title">---Admin---</div>
        <div className="grap_input">
          <div className="grap_email">
            <input
              className="input_email"
              rules
              id="name"
              name="name"
              style={{ paddingLeft: 10 }}
              type="text"
              placeholder=" Name"
            />
            <span className="message" />
          </div>
          <div className="grap_email">
            <input
              className="input_pass"
              rules
              id="pass"
              name="pass"
              style={{ paddingLeft: 10 }}
              type="password"
              placeholder=" Password"
            />
            <span className="message" />
          </div>
          <div className="grap_button">
            <button className="button_model">Log in</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
