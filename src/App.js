import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
// import Scholarship from "./pages/scholarship/Scholarship";
import LockNav from "./components/lockNav/LockNav";
import "./style.scss";
import { useState } from "react";

function App() {
	const darkMode = false;
   const [lang,setLang]=useState("eng")
   const handleLang=()=>{
	if(lang==="eng"){
		setLang("mal")
	}
	else{
		setLang("eng")
	}
   }
	const Log = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<LockNav />
				<Login />
			</div>
		);
	};

	const Reg = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<LockNav />
				<Register />
			</div>
		);
	};

	const Hom = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<Navbar lang={lang} handleLang={handleLang}/>
				<Home lang={lang} handleLang={handleLang}/>
				{/* <Scholarship/> */}
			 </div>
		);
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Hom />,
		},
		{
			path: "/login",
			element: <Log />,
		},
		{
			path: "/register",
			element: <Reg />,
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
