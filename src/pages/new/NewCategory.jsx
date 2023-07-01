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


const NewCategory = ({ title }) => {

    const [tenDanhMuc, setTenDanhMuc] = useState("");
    const [moTa, setMoTa] = useState("");
    const [tinhTrang, setTinhTrang] = useState("");
    const [thungRac, setThungRac] = useState("");

    const data = {
        tenDanhMuc: tenDanhMuc,
        moTa: moTa,
        tinhTrang: tinhTrang,
        thungRac: thungRac,
    };

    const categoryInputs = [
        {
            id: 1,
            label: "Tên Danh Mục",
            type: "text",
            placeholder: "Tên danh mục",
            value: tenDanhMuc,
            onChange: (e) => setTenDanhMuc(e.target.value),
        },
        {
            id: 2,
            label: "Mô Tả",
            type: "text",
            placeholder: "Mô tả",
            value: moTa,
            onChange: (e) => setMoTa(e.target.value),
        },
    ];

    const navigate = useNavigate();

    function submitForm(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/api/v1/DanhMuc", data).then(navigate("/danhmuc"));
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
                            {categoryInputs.map((input) => (
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

export default NewCategory;
