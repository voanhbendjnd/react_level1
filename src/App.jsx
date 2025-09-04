import './components/todo/todo.css'
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './services/api.service';
import { useContext, useEffect } from 'react';
import { AuthContext } from './components/context/auth.context';
import { Spin } from 'antd';


const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);
  const delay = (milSecond) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, milSecond)
    })
  }
  useEffect(() => {
    getAccount();
  }, [])
  const getAccount = async () => {
    const res = await getAccountAPI();
    // await delay(1000)
    if (res.data) {
      setUser(res.data.user)
    }
    setIsAppLoading(false)
  }
  return (
    <>
      {isAppLoading ?
        <div style={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          top: "51%",
          right: "50%",
          gap: "10px"
        }}>
          <Spin />
          <p>
            Loading...
          </p>
        </div>


        :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      }

    </>
  )
}

export default App
