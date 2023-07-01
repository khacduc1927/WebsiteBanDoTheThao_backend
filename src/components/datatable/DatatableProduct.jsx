import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const DatatableProduct = () => {

    const userColumns = [
        { field: "id", headerName: "ID", width: 70, },
        { field: "tenSanPham", headerName: "Tên Sản Phẩm", width: 150, },
        {
            field: "hinhAnh",
            headerName: "Hình Ảnh",
            width: 100,
            renderCell: (params) => {
                return (
                    <div className="cellWithImg">
                        <img className="cellImg" src={params.row.hinhAnh} alt="avatar" />
                    </div>
                );
            },
        },
        { field: "moTaNgan", headerName: "Mô Tả Ngắn", width: 150, },
        { field: "moTaChiTiet", headerName: "Mô Tả Chi Tiết", width: 150, },
        { field: "maDanhMuc", headerName: "Mã DM", width: 90, },
        { field: "maNhanHieu", headerName: "Mã CD", width: 90, },
        // {
        //     field: "thungRac",
        //     headerName: "Thùng Rác",
        //     width: 100,
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

    const [data, setSanPham] = useState([]);

    function loadSanPham() {
        axios.get("http://localhost:8080/api/v1/SanPham").then((res) => {
            setSanPham(res.data);
        });
    }

    function deleteSanPham(id) {
        axios.delete(`http://localhost:8080/api/v1/SanPham/${id}`).then(window.location.reload());
    }

    useEffect(() => {
        loadSanPham();
    }, []);

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/sanpham/sua/" + params.id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Sửa</div>
                        </Link>
                        <Link to={"/sanpham/chitiet/" + params.id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Chi Tiết</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => deleteSanPham(params.id)}
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
                Quản Lý Sản Phẩm
                <Link to="/sanpham/themmoi" className="link">
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

export default DatatableProduct;
