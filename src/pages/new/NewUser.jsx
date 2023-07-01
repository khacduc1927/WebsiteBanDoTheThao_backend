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


const NewUser = ({ title }) => {

    const [hoTen, setHoTen] = useState("");
    const [email, setEmail] = useState("");
    const [taiKhoan, setTaiKhoan] = useState("");
    const [matKhau, setMatKhau] = useState("");
    const [soDienThoai, setSoDienThoai] = useState("");
    const [diaChi, setDiaChi] = useState("");
    const [tinhTrang, setTinhTrang] = useState("");
    const [thungRac, setThungRac] = useState("");

    const data = {
        hoTen: hoTen,
        email: email,
        taiKhoan: taiKhoan,
        matKhau: matKhau,
        soDienThoai: soDienThoai,
        diaChi: diaChi,
        tinhTrang: 1,
    };

    const userInputs = [
        {
            id: 1,
            label: "Họ Và Tên",
            type: "text",
            placeholder: "Họ và tên",
            value: hoTen,
            onChange: (e) => setHoTen(e.target.value),
        },
        {
            id: 2,
            label: "Email",
            type: "mail",
            placeholder: "@gmail.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
        },
        {
            id: 3,
            label: "Tài Khoản",
            type: "text",
            placeholder: "Tài khoản",
            value: taiKhoan,
            onChange: (e) => setTaiKhoan(e.target.value),
        },
        {
            id: 4,
            label: "Mật Khẩu",
            type: "password",
            value: matKhau,
            onChange: (e) => setMatKhau(e.target.value),
        },
        {
            id: 4,
            label: "Số Điện Thoại",
            type: "text",
            placeholder: "Số điện thoại",
            value: soDienThoai,
            onChange: (e) => setSoDienThoai(e.target.value),
        },
        {
            id: 5,
            label: "Địa Chỉ",
            type: "text",
            placeholder: "Địa chỉ",
            value: diaChi,
            onChange: (e) => setDiaChi(e.target.value),
        },
    ];

    const navigate = useNavigate();

    function submitForm(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/api/v1/KhachHang", data).then(navigate("/khachhang"));
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
                    <div className="right">
                        <form>
                            {userInputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} value={input.value} onChange={input.onChange} />
                                </div>
                            ))}
                            <div><button type="submit" onClick={submitForm}>Thêm mới</button></div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewUser;
