import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import PhotoServices from "../pages/PhotoServices/PhotoServices";
import PhotoSouvenirs from "../pages/PhotoSouvenirs/PhotoSouvenirs";
import OfficeServices from "../pages/OfficeServices/OfficeServices";
import Other from "../pages/Other/Other";
import Order from "../pages/Order/Order";
import Contacts from "../pages/Contacts/Contacts";

import ScrollToTop from "../utils/ScrollToTop";
import Layout from "./Layout/Layout";

function App() {
	return (
		<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Main />} />
						<Route path="/photo-services" element={<PhotoServices />} />
						<Route path="/photo-souvenirs" element={<PhotoSouvenirs />} />
						<Route path="/office-services" element={<OfficeServices />} />
						<Route path="/other" element={<Other />} />
						<Route path="/order" element={<Order />} />
						<Route path="/contacts" element={<Contacts />} />
					</Route>
				</Routes>
		</BrowserRouter>
	);
}

export default App;