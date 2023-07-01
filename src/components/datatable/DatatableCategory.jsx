import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const DatatableCategory = () => {

    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "tenDanhMuc", headerName: "Tên Danh Mục", width: 200, },
        { field: "moTa", headerName: "Mô Tả", width: 250, },
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

    const [data, setCategory] = useState([]);

    function loadCategory() {
        axios.get("http://localhost:8080/api/v1/DanhMuc").then((res) => {
            setCategory(res.data);
        });
    }

    useEffect(() => {
        loadCategory();
    }, []);

    function deleteDanhMuc(id) {
        axios.delete(`http://localhost:8080/api/v1/DanhMuc/${id}`).then(window.location.reload());
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/danhmuc/sua/" + params.id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Sửa</div>
                        </Link>
                        <Link to={"/danhmuc/chitiet/" + params.id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Chi Tiết</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => deleteDanhMuc(params.id)}
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
                Quản Lý Danh Mục
                <Link to="/danhmuc/themmoi" className="link">
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

export default DatatableCategory;
