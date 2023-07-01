import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Axe Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <p className="title">CÁC CHỨC NĂNG</p>
                    <Link to="/sanpham" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Quản Lý Sản Phẩm</span>
                        </li>
                    </Link>
                    <Link to="/danhmuc" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Quản Lý Danh Mục</span>
                        </li>
                    </Link>
                    <Link to="/nhanhieu" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Quản Lý Nhãn Hiệu</span>
                        </li>
                    </Link>
                    <Link to="/khachhang" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Quản Lý Khách Hàng</span>
                        </li>
                    </Link>
                    <Link to="/donhang" style={{ textDecoration: "none" }}>
                        <li>
                            <CreditCardIcon className="icon" />
                            <span>Quản Lý Đơn Hàng</span>
                        </li>
                    </Link>
                    <Link to="/admin" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Quản Lý Tài Khoản</span>
                        </li>
                    </Link>
                    <p className="title">HỆ THỐNG</p>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Cài Đặt</span>
                    </li>
                    <p className="title">ADMIN</p>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <li>
                            <ExitToAppIcon className="icon" />
                            <span>Đăng Xuất</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
