import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import PhotoServices from "../pages/PhotoServices/PhotoServices";
import PhotoSouvenirs from "../pages/PhotoSouvenirs/PhotoSouvenirs";
import OfficeServices from "../pages/OfficeServices/OfficeServices";
import Other from "../pages/Other/Other";
import Order from "../pages/Order/Order";
import Contacts from "../pages/Contacts/Contacts";
import Layout from "../components/Layout/Layout";

import ScrollToTop from "../utils/ScrollToTop";

function App() {

	const [selectedOfficeId, setSelectedOfficeId] = useState(1);
	const handleOfficeChange = (newOfficeId) => {
		setSelectedOfficeId(newOfficeId);
	};

	return (

			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Main />}/>
					<Route path="/photo-services" element={
						<Layout selectedOfficeId={selectedOfficeId} onOfficeChange={handleOfficeChange}>
							<PhotoServices selectedOfficeId={selectedOfficeId} />
						</Layout>
					} />
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