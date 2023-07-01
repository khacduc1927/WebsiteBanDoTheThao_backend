import React, { useState, useEffect } from 'react';
import "./LoginPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [tenAdmin, setTenAdmin] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [data, setUser] = useState([]);
  const [authErrorMsg, setAuthErrorMsg] = useState("");
  function submitForm(e) {
    e.preventDefault();
    axios.get("http://localhost:8080/api/v1/Admin/tenAdmin?tenAdmin=" + tenAdmin).then((res) => {
      setUser(res.data);
    });
    if (matKhau == data.matKhau) {
      navigate('../');
    } else {
      setAuthErrorMsg(data.matKhau)
    };
  }

  const navigate = useNavigate();
  return (
    <main className='bg-secondary'>
      <div className='container'>
        <div className='sc-login'>
          <div className="login-content px-5 py-4">
            <div className="login-title fs-20">Đăng Nhập Admin</div>
            <form>
              <div className='form-element'>
                <label htmlFor='username' className="form-label">Tài Khoản: </label>
                <input className="form-control" type="text" id="username" required onChange={(e) => setTenAdmin(e.target.value)} />
              </div>
              <div className='form-element'>
                <label className='form-label' htmlFor='password'>Mật Khẩu:</label>
                <input className="form-control" type="password" id="password" required onChange={(e) => setMatKhau(e.target.value)} />
              </div>
              <button type="submit" className="btn-login fs-16" onClick={submitForm}>Đăng Nhập</button>
              <div className='login-error-msg text-center my-3'>
                <p className='text-danger'>
                  {authErrorMsg}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoginPage