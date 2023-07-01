import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const DatatableOrder = () => {



    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "tenDonHang", headerName: "Tên Đơn Hàng", width: 200, },
        { field: "maKhachHang", headerName: "Mã Khách Hàng", width: 200, },
        { field: "ngayDatHang", headerName: "Ngày Đặt Hàng", width: 200, },
        // {
        //     field: "thungRac",
        //     headerName: "Thùng Rác",
        //     width: 200,
        //     renderCell: (params) => {
        //         if (params.row.thungRac == 1) {
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
        {
            field: "tinhTrang",
            headerName: "Tình Trạng",
            width: 200,
            renderCell: (params) => {
                if (params.row.tinhTrang == 0) {
                    return (
                        <div className={`cellWithStatus ngung_hoat_dong`}>
                            Đã Hủy
                        </div>
                    );
                }
                else if (params.row.tinhTrang == 1) {
                    return (
                        <div className={`cellWithStatus hoat_dong`}>
                            Đơn Hàng Mới
                        </div>
                    );
                }
                else {
                    return (
                        <div className={`cellWithStatus pending`}>
                            Đã Xác Nhận
                        </div>
                    );
                }
            },
        },
    ];

    const [data, setDonHang] = useState([]);

    function loadDonHang() {
        axios.get("http://localhost:8080/api/v1/DonDatHang").then((res) => {
            setDonHang(res.data);
        });
    }

    useEffect(() => {
        loadDonHang();
    }, []);

    function xacnhanDonHang(id) {
        axios.get(`http://localhost:8080/api/v1/DonDatHang/${id}`).then((res) => {
            const data = {
                tenDonHang: res.data.tenDonHang,
                tongTien: res.data.tongTien,
                ngayDatHang: res.data.ngayDatHang,
                tinhTrang: 2,
                thungRac: res.data.thungRac,
                maKhachHang: res.data.maKhachHang
            };
            axios.put(`http://localhost:8080/api/v1/DonDatHang/${id}`, data).then(window.location.reload());
        });
    }

    function deleteDonHang(id) {
        axios.delete(`http://localhost:8080/api/v1/DonDatHang/${id}`).then(window.location.reload());
    }

    function huyDonHang(id) {
        axios.get(`http://localhost:8080/api/v1/DonDatHang/${id}`).then((res) => {
            const data = {
                tenDonHang: res.data.tenDonHang,
                tongTien: res.data.tongTien,
                ngayDatHang: res.data.ngayDatHang,
                tinhTrang: 0,
                thungRac: res.data.thungRac,
                maKhachHang: res.data.maKhachHang
            };
            axios.put(`http://localhost:8080/api/v1/DonDatHang/${id}`, data).then(window.location.reload());
        });
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 300,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div
                            className="xacnhanButton"
                            onClick={() => xacnhanDonHang(params.id)}
                        >
                            Xác Nhận
                        </div>
                        <div
                            className="deleteButton"
                            onClick={() => huyDonHang(params.id)}
                        >
                            Hủy Đơn
                        </div>
                        <Link to={"/donhang/chitiet/" + params.id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Chi Tiết</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => deleteDonHang(params.id)}
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
                Quản Lý Nhãn Hiệu
                <Link to="/nhanhieu/themmoi" className="link">
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

export default DatatableOrder;
