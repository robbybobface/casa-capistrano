import "./App.css";
import theme from "./theme";

import React, { useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Blanco from "./pages/blanco";
import Reposado from "./pages/reposado";
import Cristalino from "./pages/cristalino";
import AgeGate from "./components/age-gate";
import CookiesUS from "./pages/cookies/cookies-us";
import CookiesCA from "./pages/cookies/cookies-ca";
import CookiesUK from "./pages/cookies/cookies-uk";
import CookiesEU from "./pages/cookies/cookies-eu";
import PrivacyUS from "./pages/privacy/privacy-us";
import PrivacyCA from "./pages/privacy/privacy-ca";
import PrivacyUK from "./pages/privacy/privacy-uk";
import PrivacyEU from "./pages/privacy/privacy-eu";
import Disclaimer from "./pages/disclaimer";
import Imprint from "./pages/imprint";
import NotFound from "./pages/not-found";

import { AppContext } from "./utils/AppContext";

function App() {
	const [cookies, setCookie] = useCookies(["age_verified", "accept_cookies"]);
	const [userReject, setUserReject] = useState(null);

	const providerValue = useMemo(
		() => ({
			userReject: [userReject, setUserReject],
		}),
		[userReject, setUserReject]
	);

	useEffect(() => {
		// setCookie("ageVerified", "verified", { path: "/", expires: new Date(Date.now() + 60 * 1000) });
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<AppContext.Provider value={providerValue}>
					{!cookies.age_verified ? (
						<AgeGate />
					) : (
						<>
							<Header />
							<Routes>
								<Route exact={true} path='/' element={<Home />} />
								<Route exact={true} path='/about' element={<About />} />
								<Route exact={true} path='/products' element={<Products />} />
								<Route exact={true} path='/blanco' element={<Blanco />} />
								<Route exact={true} path='/reposado' element={<Reposado />} />
								<Route exact={true} path='/cristalino' element={<Cristalino />} />
								<Route exact={true} path='/cookie-policy-us' element={<CookiesUS />} />
								<Route exact={true} path='/cookie-policy-ca' element={<CookiesCA />} />
								<Route exact={true} path='/cookie-policy-uk' element={<CookiesUK />} />
								<Route exact={true} path='/cookie-policy-eu' element={<CookiesEU />} />
								<Route exact={true} path='/disclaimer' element={<Disclaimer />} />
								<Route exact={true} path='/imprint' element={<Imprint />} />
								<Route exact={true} path='/privacy-statement-us' element={<PrivacyUS />} />
								<Route exact={true} path='/privacy-statement-ca' element={<PrivacyCA />} />
								<Route exact={true} path='/privacy-statement-uk' element={<PrivacyUK />} />
								<Route exact={true} path='/privacy-statement-eu' element={<PrivacyEU />} />
								<Route exact={true} path='*' element={<NotFound />} />

								{/* <Link hrefLang='en-US' /> */}
								{/* <Route exact={true} path='/login' element={<Login />} />
					<Route exact={true} path='/manage-program-info' element={<ManageProgramInfo />} />
					<Route exact={true} path='/manage-education' element={<ManageEducation />} />
					<Route exact={true} path='/module-tag-dashboard' element={<ModuleTagDashboard />} />
					<Route exact={true} path='/manage-modules' element={<ManageModules />} />
					<Route exact={true} path='/manage-module/:mid' element={<ManageModule />} /> */}
							</Routes>
							<Footer />
						</>
					)}
				</AppContext.Provider>
			</Router>
		</ThemeProvider>
	);
}

export default App;
