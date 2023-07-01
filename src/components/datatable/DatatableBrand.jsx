import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const DatatableBrand = () => {

    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "tenNhanHieu", headerName: "Tên Nhãn Hiệu", width: 200, },
        { field: "moTa", headerName: "Mô Tả", width: 200, },
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

    const [data, setUser] = useState([]);

    function loadUser() {
        axios.get("http://localhost:8080/api/v1/NhanHieu").then((res) => {
            setUser(res.data);
        });
    }

    useEffect(() => {
        loadUser();
    }, []);

    function deleteNhanHieu(id) {
        axios.delete(`http://localhost:8080/api/v1/NhanHieu/${id}`).then(window.location.reload());
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/nhanhieu/sua/" + params.id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Sửa</div>
                        </Link>
                        <Link to={"/nhanhieu/chitiet/" + params.id} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Chi Tiết</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => deleteNhanHieu(params.id)}
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

export default DatatableBrand;
