import "./singleUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCategoy = () => {

    const { id } = useParams();

    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/DanhMuc/${id}`).then((res) => {
            setCategory(res.data);
        });
    });

    return (
        <div className="singleUser">
            <Sidebar />
            <div className="singleContainerUser">
                <Navbar />
                <div className="topUser">
                    <div className="leftUser">
                        <Link to={"/danhmuc/sua/" + id} style={{ textDecoration: "none" }}>
                            <div className="editButtonProduct">Chỉnh Sửa</div>
                        </Link>
                        <h1 className="titleUser">Chi Tiết Danh Mục</h1>
                        <div className="itemUser">
                            <div className="detailsUser">
                                <h1 className="itemTitleUser">{category.tenDanhMuc}</h1>
                                <div className="detailItemUser">
                                    <span className="itemKeyUser">Mô Tả:</span>
                                    <span className="itemValueUser">{category.moTa}</span>
                                </div>
                                <div className="detailItemUser">
                                    <span className="itemKeyUser">Tình Trạng:</span>
                                    <span className="itemValueUser">{category.tinhTrang}</span>
                                </div>
                                <div className="detailItemUser">
                                    <span className="itemKeyUser">Thùng Rác:</span>
                                    <span className="itemValueUser">{category.thungRac}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightUser">
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoy;
