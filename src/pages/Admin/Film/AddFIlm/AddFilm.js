import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { InputNumber, Form, Input, DatePicker, Switch } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { values } from "lodash";
import { useDispatch } from "react-redux";
import { ThemPhimAction } from "../../../../Redux/Action/QuanLyPhimAction";
import { GROUP } from "../../../../util/setting/config";
import { render } from "react-dom";

export default function AddFilm(props) {
  const { RangePicker } = DatePicker;

  const [componentDisabled, setComponentDisabled] = useState(true);
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const Formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    validationSchema: Yup.object({
      // các hàm validation của từng trường dữ liệu
      tenPhim: Yup.string().required("Tên Phim không để trống"),
      trailer: Yup.string().required("trailer không để trống"),
      moTa: Yup.string().required("Mô tả không được để trống"),
      ngayKhoiChieu: Yup.string().required(
        "Ngày Khởi chiếu không được để trống"
      ),
    }),
    onSubmit: (value) => {
      value.maNhom = GROUP;
      let formdata = new FormData();
      for (let key in value) {
        if (key !== "hinhAnh") {
          formdata.append(key, value[key]);
        } else {
          formdata.append("File", value.hinhAnh, value.hinhAnh.name);
        }
      }
      console.log(value);
      dispatch(ThemPhimAction(formdata));
    },
  });

  const handlechangeDataPicker = (value) => {
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
    Formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
    console.log(ngayKhoiChieu, "set");
  };

  const handleChangeInputNumber = (name) => {
    return async (value) => {
      await Formik.setFieldValue(name, value);
    };
  };

  const handlechangeimg = async (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
        console.log(e.target.result);
      };
      // đem dữ liệu lưu vào formik
      await Formik.setFieldValue("hinhAnh", file);
    }
    // console.log(file,'file')
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        Formik.handleSubmit(e);
      }}
    >
      <h3 className="text-center" style={{ fontSize: 30, fontWeight: 600 }}>
        Thêm Mới Phim
      </h3>

      <div className="mt-5" style={{ marginLeft: "180px" }}>
        <Form.Item label="Tên Phim">
          <Input
            className="ml-2"
            style={{ width: "71%" }}
            name="tenPhim"
            type="text"
            value={Formik.values.tenPhim}
            onChange={Formik.handleChange}
          />
          {Formik.touched.tenPhim && Formik.errors.tenPhim ? (
            <div className="text-danger ml-2">{Formik.errors.tenPhim}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            className="ml-4"
            style={{ width: "70%" }}
            name="trailer"
            type="text"
            value={Formik.values.trailer}
            onChange={Formik.handleChange}
          />
          {Formik.touched.trailer && Formik.errors.trailer ? (
            <div className="text-danger ml-4">{Formik.errors.trailer}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            className="ml-4"
            style={{ width: "70%" }}
            name="moTa"
            type="text"
            value={Formik.values.moTa}
            onChange={Formik.handleChange}
          />
          {Formik.touched.moTa && Formik.errors.moTa ? (
            <div className="text-danger ml-4">{Formik.errors.moTa}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Ngày khởi Chiếu">
          <DatePicker onChange={handlechangeDataPicker} />
          {Formik.touched.ngayKhoiChieu && Formik.errors.ngayKhoiChieu ? (
            <div className="text-danger ">{Formik.errors.ngayKhoiChieu}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Đang Chiếu" valuePropName="checked">
          <Switch
            className="ml-2"
            onChange={(value) => {
              Formik.setFieldValue("dangChieu", value);
            }}
          />
        </Form.Item>
        <Form.Item label="Sắp Chiếu" valuePropName="checked">
          <Switch
            className="ml-3"
            onChange={(value) => {
              Formik.setFieldValue("sapChieu", value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Hot"
          valuePropName="checked"
          onChange={Formik.handleChange}
        >
          <Switch
            className="ml-5"
            onChange={(value) => {
              Formik.setFieldValue("hot", value);
            }}
          />
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber
            className="ml-4"
            min={1}
            max={5}
            name="danhGia"
            value={Formik.values.danhGia}
            onChange={handleChangeInputNumber("danhGia")}
          />
        </Form.Item>
        <Form.Item
          label="Hình Ảnh"
          accept="image/jpeg,image/jpg,image/gif,image/png"
          valuePropName="fileList"
        >
          <input type="file" className="ml-2" onChange={handlechangeimg} />

          <br />
          <img
            className="ml-2"
            onChange={handlechangeimg}
            width={150}
            height={150}
            src={imgSrc}
            alt="..."
          />
        </Form.Item>
        <Form.Item label="Tác Vụ">
          <button className="btn bg-primary ml-4 text-white" type="submit">
            Thêm Phim
          </button>
        </Form.Item>
      </div>
    </form>
  );
}
