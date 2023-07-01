import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const NewProduct = ({ title }) => {
    const [file, setFile] = useState("");

    const [tenSanPham, setTenSanPham] = useState("");
    const [moTaNgan, setMoTaNgan] = useState("");
    const [moTaChiTiet, setMoTaChiTiet] = useState("");
    const [hinhAnh, setHinhAnh] = useState("");
    const [soLuong, setSoLuong] = useState("");
    const [giaBan, setGiaBan] = useState("");
    const [giaBanKhuyenMai, setGiaBanKhuyenMai] = useState("");
    const [maDanhMuc, setMaDanhMuc] = useState("");
    const [maNhanHieu, setMaNhanHieu] = useState("");
    const [tinhTrang, setTinhTrang] = useState("");
    const [thungRac, setThungRac] = useState("");
    const path = "http://localhost:8080/api/v1/getimage/";

    const data = {
        tenSanPham: tenSanPham,
        moTaNgan: moTaNgan,
        moTaChiTiet: moTaChiTiet,
        hinhAnh: hinhAnh,
        soLuong: soLuong,
        giaBan: giaBan,
        giaBanKhuyenMai: giaBanKhuyenMai,
        maDanhMuc: maDanhMuc,
        maNhanHieu: maNhanHieu,
        tinhTrang: 1,
    };

    const productInputs = [
        {
            id: 1,
            label: "Tên Sản Phẩm",
            type: "text",
            placeholder: "Tên sản phẩm",
            value: tenSanPham,
            onChange: (e) => setTenSanPham(e.target.value),
        },
        {
            id: 2,
            label: "Mô Tả Ngắn",
            type: "text",
            placeholder: "Mô tả ngắn",
            value: moTaNgan,
            onChange: (e) => setMoTaNgan(e.target.value),
        },
        {
            id: 3,
            label: "Mô Tả Chi Tiết",
            type: "textarea",
            placeholder: "Mô tả chi tiết",
            value: moTaChiTiet,
            onChange: (e) => setMoTaChiTiet(e.target.value),
        },
        {
            id: 4,
            label: "Số Lượng",
            type: "number",
            value: soLuong,
            onChange: (e) => setSoLuong(e.target.value),
        },
        {
            id: 5,
            label: "Giá Bán",
            type: "number",
            value: giaBan,
            onChange: (e) => setGiaBan(e.target.value),
        },
        {
            id: 6,
            label: "Giá Bán Khuyến Mãi",
            type: "number",
            value: giaBanKhuyenMai,
            onChange: (e) => setGiaBanKhuyenMai(e.target.value),
        },
        {
            id: 6,
            label: "Danh Mục",
            type: "number",
            value: maDanhMuc,
            onChange: (e) => setMaDanhMuc(e.target.value),
        },
        {
            id: 6,
            label: "Nhãn Hiệu",
            type: "number",
            value: maNhanHieu,
            onChange: (e) => setMaNhanHieu(e.target.value),
        },
    ];

    const navigate = useNavigate();

    function submitForm(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)
        axios.post(
            "http://localhost:8080/api/v1/upload-file",
            formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            }
        )
        axios.post("http://localhost:8080/api/v1/SanPham", data).then(navigate("/sanpham"));
    }

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Hình Ảnh: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => { setFile(e.target.files[0]); setHinhAnh(path + e.target.files[0].name) }}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {productInputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} value={input.value} onChange={input.onChange} />
                                </div>
                            ))}
                            <div style={{ marginRight: 170 }}><button type="submit" onClick={submitForm}>Thêm mới</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
