import Home from "./pages/home/Home";
import ListUser from "./pages/list/ListUser";
import SingleUser from "./pages/single/SingleUser";
import NewUser from "./pages/new/NewUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProduct from "./pages/list/listProduct";
import ListCategory from "./pages/list/listCategory";
import ListBrand from "./pages/list/listBrand";
import NewProduct from "./pages/new/newProduct";
import SingleProduct from "./pages/single/SingleProduct";
import EditProduct from "./pages/edit/EditProduct";
import EditUser from "./pages/edit/EditUser";
import NewCategory from "./pages/new/NewCategory";
import NewBrand from "./pages/new/NewBrand";
import SingleCategoy from "./pages/single/SingleCategory";
import SingleBrand from "./pages/single/SingleBrand";
import EditCategory from "./pages/edit/EditCategory";
import EditBrand from "./pages/edit/EditBrand";
import ListOrder from "./pages/list/listOrder";
import DetailOrder from "./pages/single/DetailOrder";
import LoginPage from "./pages/login/LoginPage";
import ListAdmin from "./pages/list/listAdmin";
import SingleAdmin from "./pages/single/SingleAdmin";
import NewAdmin from "./pages/new/NewAdmin";
import EditAdmin from "./pages/edit/EditAdmin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="login">
            <Route index element={<LoginPage />} />
          </Route>
          <Route path="khachhang">
            <Route index element={<ListUser />} />
            <Route path="chitiet">
              <Route path={":id"} element={<SingleUser title="Chi tiết khách hàng" />} />
            </Route>
            <Route path="sua">
              <Route path={":id"} element={<EditUser title="Chỉnh sửa khách hàng" />} />
            </Route>
            <Route
              path="themmoi"
              element={<NewUser title="Thêm mới khách hàng" />}
            />
          </Route>
          <Route path="sanpham">
            <Route index element={<ListProduct />} />
            <Route path="chitiet">
              <Route path={":id"} element={<SingleProduct title="Chi tiết sản phẩm" />} />
            </Route>
            <Route path="sua">
              <Route path={":id"} element={<EditProduct title="Chỉnh sửa sản phẩm" />} />
            </Route>
            <Route
              path="themmoi"
              element={<NewProduct title="Thêm mới sản phẩm" />}
            />
          </Route>
          <Route path="danhmuc">
            <Route index element={<ListCategory />} />
            <Route path="chitiet">
              <Route path={":id"} element={<SingleCategoy title="Chi tiết danh mục" />} />
            </Route>
            <Route path="sua">
              <Route path={":id"} element={<EditCategory title="Chỉnh sửa danh mục" />} />
            </Route>
            <Route
              path="themmoi"
              element={<NewCategory title="Thêm mới danh mục" />}
            />
          </Route>
          <Route path="nhanhieu">
            <Route index element={<ListBrand />} />
            <Route path="chitiet">
              <Route path={":id"} element={<SingleBrand title="Chi tiết nhãn hiệu" />} />
            </Route>
            <Route path="sua">
              <Route path={":id"} element={<EditBrand title="Chỉnh sửa nhãn hiệu" />} />
            </Route>
            <Route
              path="themmoi"
              element={<NewBrand title="Thêm mới nhãn hiệu" />}
            />
          </Route>
          <Route path="donhang">
            <Route index element={<ListOrder />} />
            <Route path="chitiet">
              <Route path={":id"} element={<DetailOrder title="Chi tiết đơn đặt hàng" />} />
            </Route>
          </Route>
          <Route path="admin">
            <Route index element={<ListAdmin />} />
            <Route path="chitiet">
              <Route path={":id"} element={<SingleAdmin title="Chi tiết admin" />} />
            </Route>
            <Route path="sua">
              <Route path={":id"} element={<EditAdmin title="Chỉnh sửa admin" />} />
            </Route>
            <Route
              path="themmoi"
              element={<NewAdmin title="Thêm mới admin" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
