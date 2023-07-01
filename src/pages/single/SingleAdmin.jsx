import "./singleUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleAdmin = () => {

    const { id } = useParams();

    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/Admin/${id}`).then((res) => {
            setAdmin(res.data);
        });
    });
    console.log(admin);

    return (
        <div className="singleUser">
            <Sidebar />
            <div className="singleContainerUser">
                <Navbar />
                <div className="topUser">
                    <div className="leftUser">
                        <Link to={"/admin/sua/" + id} style={{ textDecoration: "none" }}>
                            <div className="editButtonProduct">Chỉnh Sửa</div>
                        </Link>
                        <h1 className="titleUser">Thông Tin Tài Khoản Admin</h1>
                        <div className="itemUser">
                            <img
                                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                alt=""
                                className="itemImgUser"
                            />
                            <div className="detailsUser">
                                <h1 className="itemTitleUser">{admin.hoVaTen}</h1>
                                <div className="detailItemUser">
                                    <span className="itemKeyUser">Tài Khoản:</span>
                                    <span className="itemValueUser">{admin.tenAdmin}</span>
                                </div>
                                <div className="detailItemUser">
                                    <span className="itemKeyUser">Số Điện Thoại:</span>
                                    <span className="itemValueUser">+{admin.soDienThoai}</span>
                                </div>
                                <div className="detailItemUser">
                                    <span className="itemKeyUser">Địa Chỉ:</span>
                                    <span className="itemValueUser">
                                        {admin.diaChi}
                                    </span>
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

export default SingleAdmin;
