import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { QLNDAction } from "../../Redux/Action/QuanLYNDAction";

export default function Logins(props) {
  const dispatch = useDispatch();
  const { userlogin } = useSelector((state) => state.QLNDReducer);
  console.log(userlogin, "user");

  const Formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      // các hàm validation của từng trường dữ liệu
      taiKhoan: Yup.string().required("tài khoản không được để trống"),

      matKhau: Yup.string().required("Mật khẩu ko được để trống"),
    }),
    onSubmit: (values) => {
      const action = QLNDAction(values);
      dispatch(action);
      console.log("value", values);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        Formik.handleSubmit(e);
      }}
      className="left"
    >
      <div className="top_link">
        <a href="/">
          <img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" />
          Return home
        </a>
      </div>
      <div className="contact">
        <div>
          <h3>SIGN IN</h3>
          <input
            name="taiKhoan"
            value={Formik.values.taiKhoan}
            onChange={Formik.handleChange}
            type="text"
            placeholder="USERNAME"
          />
          {Formik.touched.taiKhoan && Formik.errors.taiKhoan ? (
            <div className="text-danger">{Formik.errors.taiKhoan}</div>
          ) : null}
          <input
            name="matKhau"
            value={Formik.values.matKhau}
            onChange={Formik.handleChange}
            type="password"
            placeholder="PASSWORD"
          />
          {Formik.touched.matKhau && Formik.errors.matKhau ? (
            <div className="text-danger">{Formik.errors.matKhau}</div>
          ) : null}
          <p style={{ fontSize: "15px", fontWeight: "600" }}>
            If you do not have an account, please click the{" "}
            <NavLink to="/Register">Register</NavLink>
          </p>
          <button className="submit">LET'S GO</button>
        </div>
      </div>
    </form>
  );
}
