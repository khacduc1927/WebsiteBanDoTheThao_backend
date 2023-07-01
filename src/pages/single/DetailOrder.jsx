import "./DetailOrder.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";


const DetailOrder = () => {

    const { id } = useParams();

    const [donHang, setDonHang] = useState([]);
    const [khachHang, setKhachHang] = useState([]);
    const [data, setChiTietDonDatHang] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/DonDatHang/${id}`).then((res) => {
            setDonHang(res.data);
        });
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/KhachHang/${donHang.maKhachHang}`).then((res) => {
            setKhachHang(res.data);
        });
    });

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/ChiTietDonDatHang/tenDonHang?tenDonHang=" + donHang.tenDonHang).then((res) => {
            setChiTietDonDatHang(res.data);
        });
    });

    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "tenDonHang", headerName: "Tên Đơn Hàng", width: 220, },
        { field: "tenSanPham", headerName: "Mã Khách Hàng", width: 150, },
        { field: "soLuong", headerName: "Số Lượng", width: 150, },
        { field: "giaBan", headerName: "Giá Bán", width: 150, },
    ];

    function deleteChiTietDonDatHang(id) {
        axios.delete(`http://localhost:8080/api/v1/ChiTietDonDatHang/${id}`);
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div
                            className="deleteButton"
                            onClick={() => deleteChiTietDonDatHang(params.id)}
                        >
                            Xóa
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="OrderDetail">
            <Sidebar />
            <div className="ContainerOrderDetail">
                <Navbar />
                <div className="topOrderDetail">
                    <div className="leftOrderDetail">
                        <h1 className="titleOrderDetail">Thông Tin Người Mua Hàng</h1>
                        <div className="itemOrderDetail">
                            <img
                                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                alt=""
                                className="itemImgOrderDetail"
                            />
                            <div className="detailsOrderDetail">
                                <h1 className="itemTitleOrderDetail">{khachHang.hoTen}</h1>
                                <div className="detailItemOrderDetail">
                                    <span className="itemKeyOrderDetail">Tài Khoản:</span>
                                    <span className="itemValueOrderDetail">{khachHang.taiKhoan}</span>
                                </div>
                                <div className="detailItemOrderDetail">
                                    <span className="itemKeyOrderDetail">Email:</span>
                                    <span className="itemValueOrderDetail">{khachHang.email}</span>
                                </div>
                                <div className="detailItemOrderDetail">
                                    <span className="itemKeyOrderDetail">Số Điện Thoại:</span>
                                    <span className="itemValueOrderDetail">+{khachHang.soDienThoai}</span>
                                </div>
                                <div className="detailItemOrderDetail">
                                    <span className="itemKeyOrderDetail">Địa Chỉ:</span>
                                    <span className="itemValueOrderDetail">
                                        {khachHang.diaChi}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="datatable">
                    <div className="datatableTitle">
                        Chi Tiết Đơn Hàng
                    </div>
                    <DataGrid
                        className="datagrid"
                        rows={data}
                        columns={userColumns.concat(actionColumn)}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailOrder;
