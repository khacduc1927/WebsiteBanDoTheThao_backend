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


const EditUser = ({ title }) => {

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
        tinhTrang: tinhTrang,
        thungRac: thungRac,
    };
    const { id } = useParams();

    useState(() => {
        axios.get(`http://localhost:8080/api/v1/KhachHang/${id}`).then((res) => {
            setHoTen(res.data.hoTen);
            setEmail(res.data.email);
            setDiaChi(res.data.diaChi);
            setTaiKhoan(res.data.taiKhoan);
            setMatKhau(res.data.matKhau);
            setSoDienThoai(res.data.soDienThoai);
            setTinhTrang(res.data.tinhTrang);
            setThungRac(res.data.thungRac);
        });
    });
    const userEdits = [
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
        axios.put(`http://localhost:8080/api/v1/KhachHang/${id}`, data).then(navigate("/khachhang"));

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
                            {userEdits.map((input) => (
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
                                <FormControl style={{ marginLeft: -200 }}>
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

export default EditUser;
