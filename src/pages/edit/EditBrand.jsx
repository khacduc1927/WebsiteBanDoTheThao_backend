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


const EditBrand = ({ title }) => {

    const [tenNhanHieu, setTenNhanHieu] = useState("");
    const [moTa, setMoTa] = useState("");
    const [tinhTrang, setTinhTrang] = useState("");
    const [thungRac, setThungRac] = useState("");

    const data = {
        tenNhanHieu: tenNhanHieu,
        moTa: moTa,
        tinhTrang: tinhTrang,
        thungRac: thungRac,
    };

    const { id } = useParams();

    useState(() => {
        axios.get(`http://localhost:8080/api/v1/NhanHieu/${id}`).then((res) => {
            setTenNhanHieu(res.data.tenNhanHieu);
            setMoTa(res.data.moTa);
            setTinhTrang(res.data.tinhTrang);
            setThungRac(res.data.thungRac);
        });
    });

    const brandInputs = [
        {
            id: 1,
            label: "Tên Nhãn Hiệu",
            type: "text",
            placeholder: "Tên nhãn hiệu",
            value: tenNhanHieu,
            onChange: (e) => setTenNhanHieu(e.target.value),
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
        axios.put(`http://localhost:8080/api/v1/NhanHieu/${id}`, data).then(navigate("/nhanhieu"));
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
                            {brandInputs.map((input) => (
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
                                        value={tinhTrang}
                                        label="Age"
                                        onChange={(e) => setTinhTrang(e.target.value)}
                                        style={{ width: 150 }}
                                    >
                                        <MenuItem value={0}>Inactive</MenuItem>
                                        <MenuItem value={1}>Active</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="formInput">
                                <FormControl style={{ marginLeft: 140 }}>
                                    <InputLabel id="demo-simple-select-label">Thùng Rác</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={thungRac}
                                        label="Age"
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

export default EditBrand;
