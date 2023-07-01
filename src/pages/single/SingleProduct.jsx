import "./singleProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const SingleProduct = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/SanPham/${id}`).then((res) => {
            setProduct(res.data);
        });
    });
    console.log(product);

    return (
        <div className="singleProduct">
            <Sidebar />
            <div className="singleContainerProduct">
                <Navbar />
                <div className="topProduct">
                    <div className="leftProduct">
                        <Link to={"/sanpham/sua/" + id} style={{ textDecoration: "none" }}>
                            <div className="editButtonProduct">Chỉnh Sửa</div>
                        </Link>
                        <h1 className="titleProduct">Thông Tin Sản Phẩm</h1>
                        <div className="itemProduct">
                            <img
                                src={product.hinhAnh}
                                alt=""
                                className="itemImgProduct"
                            />
                            <div className="detailsProduct">
                                <h1 className="itemTitleProduct">Tên Sản Phẩm: {product.tenSanPham}</h1>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Mô Tả Ngắn:</span>
                                    <span className="itemValueProduct">{product.moTaNgan}</span>
                                </div>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Mô Tả Chi Tiết:</span>
                                    <span className="itemValueProduct">{product.moTaChiTiet}</span>
                                </div>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Số Lượng:</span>
                                    <span className="itemValueProduct">{product.soLuong}</span>
                                </div>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Giá Bán:</span>
                                    <span className="itemValueProduct">{product.giaban}</span>
                                </div>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Giá Bán Khuyến Mãi:</span>
                                    <span className="itemValueProduct">{product.giaBanKhuyenMai}</span>
                                </div>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Ngày Tạo:</span>
                                    <span className="itemValueProduct">{product.ngayTao}</span>
                                </div>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Người Tạo:</span>
                                    <span className="itemValueProduct">{product.nguoiTao}</span>
                                </div>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Ngày Cập Nhật:</span>
                                    <span className="itemValueProduct">{product.ngayCapNhat}</span>
                                </div>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Người Cập Nhật:</span>
                                    <span className="itemValueProduct">{product.nguoiCapNNhat}</span>
                                </div>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Danh Mục:</span>
                                    <span className="itemValueProduct">
                                        {product.danhMuc}
                                    </span>
                                </div>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Nhãn Hiệu:</span>
                                    <span className="itemValueProduct">
                                        {product.nhanHieu}
                                    </span>
                                </div>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Tình Trạng:</span>
                                    <span className="itemValueProduct">
                                        {product.tinhTrang}
                                    </span>
                                </div>
                                <div className="detailItemProduct">
                                    <span className="itemKeyProduct">Thùng Rác:</span>
                                    <span className="itemValueProduct">
                                        {product.thungRac}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
