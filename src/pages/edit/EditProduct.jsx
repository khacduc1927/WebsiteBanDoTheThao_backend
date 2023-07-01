import "./edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const EditProduct = ({ title }) => {
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
        tinhTrang: tinhTrang,
        thungRac: thungRac,
    };
    const { id } = useParams();

    useState(() => {
        axios.get(`http://localhost:8080/api/v1/SanPham/${id}`).then((res) => {
            setTenSanPham(res.data.tenSanPham);
            setMoTaNgan(res.data.moTaNgan);
            setMoTaChiTiet(res.data.moTaChiTiet);
            setSoLuong(res.data.soLuong);
            setHinhAnh(res.data.hinhAnh);
            setGiaBan(res.data.giaBan);
            setGiaBanKhuyenMai(res.data.giaBanKhuyenMai);
            setMaDanhMuc(res.data.maDanhMuc);
            setMaNhanHieu(res.data.maNhanHieu);
            setThungRac(res.data.thungRac);
            setTinhTrang(res.data.tinhTrang)
        });
    });

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
        axios.put(`http://localhost:8080/api/v1/SanPham/${id}`, data).then(navigate("/sanpham"));
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
                                    : hinhAnh
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
                            <div className="formInput">
                                <FormControl style={{ marginLeft: 50 }}>
                                    <InputLabel id="demo-simple-select-label">Tình Trạng</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        onChange={(e) => setTinhTrang(e.target.value)}
                                        style={{ width: 150 }}
                                    >
                                        <MenuItem value={0}>Inactive</MenuItem>
                                        <MenuItem value={1}>Active</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="formInput">
                                <FormControl style={{ marginLeft: 0 }}>
                                    <InputLabel id="demo-simple-select-label">Thùng Rác</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        onChange={(e) => setThungRac(e.target.value)}
                                        style={{ width: 150 }}
                                    >
                                        <MenuItem value={0}>False</MenuItem>
                                        <MenuItem value={1}>True</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div><button type="submit" onClick={submitForm}>Chỉnh Sửa</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
