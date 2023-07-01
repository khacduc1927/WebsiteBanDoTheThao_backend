import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const DatatableUser = () => {

    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "hoTen", headerName: "Họ Tên", width: 160, },
        { field: "taiKhoan", headerName: "Tài Khoản", width: 150, },
        { field: "matKhau", headerName: "Mật Khẩu", width: 150, },
        { field: "soDienThoai", headerName: "Số Điện Thoại", width: 100, },
        { field: "diaChi", headerName: "Địa Chỉ", width: 150, },
        {
            field: "tinhTrang",
            headerName: "Tình Trạng",
            width: 100,
            renderCell: (params) => {
                if (params.row.tinhTrang == 1) {
                    return (
                        <div className={`cellWithStatus hoat_dong`}>
                            Active
                        </div>
                    );
                }
                else {
                    return (
                        <div className={`cellWithStatus ngung_hoat_dong`}>
                            Inactive
                        </div>
                    );
                }
            },
        },
        // {
        //     field: "thungRac",
        //     headerName: "Thùng Rác",
        //     width: 100,
        //     renderCell: (params) => {
        //         if (params.row.tinhTrang == 1) {
        //             return (
        //                 <div className={`cellWithStatus hoat_dong`}>
        //                     True
        //                 </div>
        //             );
        //         }
        //         else {
        //             return (
        //                 <div className={`cellWithStatus ngung_hoat_dong`}>
        //                     False
        //                 </div>
        //             );
        //         }
        //     },
        // },
    ];

    const [data, setUser] = useState([]);

    function loadUser() {
        axios.get("http://localhost:8080/api/v1/KhachHang").then((res) => {
            setUser(res.data);
        });
    }

    useEffect(() => {
        loadUser();
    }, []);

    function deleteKhachHang(id) {
        axios.delete(`http://localhost:8080/api/v1/KhachHang/${id}`).then(window.location.reload());
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/khachhang/sua/" + params.id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Sửa</div>
                        </Link>
                        <Link to={"/khachhang/chitiet/" + params.id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Chi Tiết</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => deleteKhachHang(params.id)}
                        >
                            Xóa
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Quản Lý Khách Hàng
                <Link to="/khachhang/themmoi" className="link">
                    Thêm mới
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
            />
        </div>
    );
};

export default DatatableUser;
