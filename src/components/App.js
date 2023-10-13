import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import PhotoServices from "../pages/PhotoServices/PhotoServices";
import PhotoSouvenirs from "../pages/PhotoSouvenirs/PhotoSouvenirs";
import OfficeServices from "../pages/OfficeServices/OfficeServices";
import Other from "../pages/Other/Other";
import Order from "../pages/Order/Order";
import Contacts from "../pages/Contacts/Contacts";

import ScrollToTop from "../utils/ScrollToTop";


function App() {
	return (

			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" exact="true" element={<Main />}/>
					<Route path="/photo-services" element={<PhotoServices />}/>
					<Route path="/photo-souvenirs" element={<PhotoSouvenirs />}/>
					<Route path="/office-sevices" element={<OfficeServices />}/>
					<Route path="/other" element={<Other />}/>
					<Route path="/order" element={<Order />}/>
					<Route path="/contacts" element={<Contacts />}/>
				</Routes>
			</BrowserRouter>

	)
}

export default App;