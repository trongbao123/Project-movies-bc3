import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { DangKyAction } from "../../Redux/Action/DangKyActions";
import "../Register/register.css";
export default function Register(props) {
  const dispatch = useDispatch();
  const { userlogin } = useSelector((state) => state.QLNDReducer);
  console.log(userlogin, "user");
  const Formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
    },
    validationSchema: Yup.object({
      // các hàm validation của từng trường dữ liệu
      taiKhoan: Yup.string()
        .required("Tài khoản không để trống")
        .min(6, "Tối thiểu 6 ký tự")
        .max(15, "Tối đa 15 ký tự"),
      matKhau: Yup.string()
        .required("Mật khẩu không để trống")
        .min(6, "Mật Khẩu Tối thiểu 6 ký tự")
        .max(12, "Mật khẩu Tối đa 12 ký tự"),
      email: Yup.string()
        .required("Email không để trống")
        .email("Email không đúng format"),
      soDt: Yup.string().required("số điện thoại không được để trống"),
      maNhom: Yup.string().required("mã nhóm không được để trống"),
      hoTen: Yup.string()
        .required("Họ tên không để trống")
        .matches(/^[A-Z a-z]+$/, "Họ tên không hợp lệ"),
    }),
    onSubmit: (values) => {
      const action = DangKyAction(values);
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
      className="login"
      style={{
        backgroundImage: "url(../img/homeappbg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        height: "723px",
      }}
    >
      <div className="login_box">
        <div className="left">
          <div className="top_link">
            <a href="/">
              <img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" />
            </a>
          </div>
          <div className="contact">
            <div>
              <h3>SIGN UP</h3>

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
              <input
                name="email"
                value={Formik.values.email}
                onChange={Formik.handleChange}
                type="email"
                placeholder="Email"
              />
              {Formik.touched.email && Formik.errors.email ? (
                <div className="text-danger">{Formik.errors.email}</div>
              ) : null}
              <input
                name="soDt"
                value={Formik.values.soDt}
                onChange={Formik.handleChange}
                type="text"
                placeholder="PHONE NUMBER"
              />
              {Formik.touched.soDt && Formik.errors.soDt ? (
                <div className="text-danger">{Formik.errors.soDt}</div>
              ) : null}
              <input
                name="maNhom"
                value={Formik.values.maNhom}
                onChange={Formik.handleChange}
                type="text"
                placeholder="GROUP ID"
              />
              {Formik.touched.maNhom && Formik.errors.maNhom ? (
                <div className="text-danger">{Formik.errors.maNhom}</div>
              ) : null}
              <input
                name="hoTen"
                value={Formik.values.hoTen}
                onChange={Formik.handleChange}
                type="text"
                placeholder="NAME"
              />
              {Formik.touched.hoTen && Formik.errors.hoTen ? (
                <div className="text-danger">{Formik.errors.hoTen}</div>
              ) : null}
              <button className="submit">Sign Up</button>
            </div>
          </div>
        </div>
        <div
          className="right"
          style={{ backgroundImage: "url(../img/homeappbg.jpg)" }}
        >
          <div className="right-text">
            <img
              style={{ marginLeft: "190px", marginTop: "-80px" }}
              src="../img/logo-full.png"
            />
            <h5 className="text-white">A UX BASED CREATIVE AGENCEY</h5>
          </div>
          <div className="right-inductor">
            <img src="../img/logo-full.png" />
          </div>
        </div>
      </div>
    </form>
  );
}
