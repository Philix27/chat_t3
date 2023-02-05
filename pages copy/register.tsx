import React from "react";
import NavBar from "../lib/comps/navbar/navbar.comp";

export default function RegisterPage() {
  return (
    <div>
      <NavBar title={"Willi"} subtitle={""} rightText={""} subRightText={""} />
      <div className="section ">
        <form action="#" className="form">
          <div className="input_box">
            <label htmlFor="form-email" className="label">
              Email
            </label>
            <input
              type="text"
              id="form-email"
              placeholder="example@gmail.com"
              name="email"
              // value={user.email}
              // onChange={handleChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="form-password" className="label">
              Password
            </label>
            <input
              type="password"
              id="form-password"
              placeholder="Password"
              name="password"
              // value={user.password}
              // onChange={handleChange}
            />
          </div>

          <div className="buttons">
            <input
              type="submit"
              value="Login"
              // value="Sorry, cannot login."

              // onClick={() => {}}
              className="btn"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
