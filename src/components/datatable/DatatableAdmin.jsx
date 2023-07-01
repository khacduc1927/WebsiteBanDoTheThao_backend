import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const DatatableAdmin = () => {

    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "hoVaTen", headerName: "Họ Và Tên", width: 160, },
        { field: "tenAdmin", headerName: "Tên Admin", width: 150, },
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
    ];

    const [data, setAdmin] = useState([]);

    function loadAdmin() {
        axios.get("http://localhost:8080/api/v1/Admin").then((res) => {
            setAdmin(res.data);
        });
    }

    useEffect(() => {
        loadAdmin();
    }, []);

    function deleteAdmin(id) {
        axios.delete(`http://localhost:8080/api/v1/Admin/${id}`).then(window.location.reload());
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/admin/sua/" + params.id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Sửa</div>
                        </Link>
                        <Link to={"/admin/chitiet/" + params.id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Chi Tiết</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => deleteAdmin(params.id)}
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
                Quản Lý Tài Khoản
                <Link to="/admin/themmoi" className="link">
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

export default DatatableAdmin;
