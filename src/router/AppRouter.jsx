import { Navigate, Route, Routes } from "react-router-dom"
import { MainPage } from "../Spotify/Pages/MainPage"


const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path="/*" element={<Navigate to='/' />}/>
    </Routes>
  )
}

export default AppRouter