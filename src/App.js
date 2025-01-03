import "./App.css";
import theme from "./theme";

import React, { useMemo, useState, lazy, Suspense } from "react";
import { useCookies } from "react-cookie";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import Header from "./components/header";
import Footer from "./components/footer";
import { AppContext } from "./utils/AppContext";
import CookieBanner from "./components/cookie-banner";
import Loader from "./components/loader";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Products = lazy(() => import("./pages/products"));
const BuyNow = lazy(() => import("./pages/buy-now"));
const Blanco = lazy(() => import("./pages/blanco"));
const Reposado = lazy(() => import("./pages/reposado"));
const Cristalino = lazy(() => import("./pages/cristalino"));
const AgeGate = lazy(() => import("./components/age-gate"));
const CookiesUS = lazy(() => import("./pages/cookies/cookies-us"));
const CookiesCA = lazy(() => import("./pages/cookies/cookies-ca"));
const CookiesUK = lazy(() => import("./pages/cookies/cookies-uk"));
const CookiesEU = lazy(() => import("./pages/cookies/cookies-eu"));
const PrivacyUS = lazy(() => import("./pages/privacy/privacy-us"));
const PrivacyCA = lazy(() => import("./pages/privacy/privacy-ca"));
const PrivacyUK = lazy(() => import("./pages/privacy/privacy-uk"));
const PrivacyEU = lazy(() => import("./pages/privacy/privacy-eu"));
const Disclaimer = lazy(() => import("./pages/disclaimer"));
const Imprint = lazy(() => import("./pages/imprint"));
const NotFound = lazy(() => import("./pages/not-found"));

function App() {
	const [cookies] = useCookies(["age_verified", "accept_cookies"]);
	const [userReject, setUserReject] = useState(null);

	const providerValue = useMemo(
		() => ({
			userReject: [userReject, setUserReject],
		}),
		[userReject, setUserReject]
	);
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<AppContext.Provider value={providerValue}>
					{!cookies.age_verified ? (
						<Suspense fallback={<Loader />}>
							<AgeGate />
						</Suspense>
					) : (
						<>
							<Header />
							<Routes>
								<Route
									index
									exact={true}
									path='/'
									element={
										<Suspense fallback={<Loader index={true} />}>
											<Home />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/about'
									element={
										<Suspense fallback={<Loader />}>
											<About />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/products'
									element={
										<Suspense fallback={<Loader />}>
											<Products />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/buy-now'
									element={
										<Suspense fallback={<Loader />}>
											<BuyNow />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/blanco'
									element={
										<Suspense fallback={<Loader />}>
											<Blanco />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/reposado'
									element={
										<Suspense fallback={<Loader />}>
											<Reposado />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/cristalino'
									element={
										<Suspense fallback={<Loader />}>
											<Cristalino />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/cookie-policy-us'
									element={
										<Suspense fallback={<Loader />}>
											<CookiesUS />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/cookie-policy-ca'
									element={
										<Suspense fallback={<Loader />}>
											<CookiesCA />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/cookie-policy-uk'
									element={
										<Suspense fallback={<Loader />}>
											<CookiesUK />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/cookie-policy-eu'
									element={
										<Suspense fallback={<Loader />}>
											<CookiesEU />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/disclaimer'
									element={
										<Suspense fallback={<Loader />}>
											<Disclaimer />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/imprint'
									element={
										<Suspense fallback={<Loader />}>
											<Imprint />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/privacy-statement-us'
									element={
										<Suspense fallback={<Loader />}>
											<PrivacyUS />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/privacy-statement-ca'
									element={
										<Suspense fallback={<Loader />}>
											<PrivacyCA />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/privacy-statement-uk'
									element={
										<Suspense fallback={<Loader />}>
											<PrivacyUK />
										</Suspense>
									}
								/>
								<Route
									exact={true}
									path='/privacy-statement-eu'
									element={
										<Suspense fallback={<Loader />}>
											<PrivacyEU />
										</Suspense>
									}
								/>
								<Route
									path='*'
									element={
										<Suspense fallback={<Loader />}>
											<NotFound />
										</Suspense>
									}
								/>
							</Routes>
							{!cookies.accept_cookies ? userReject ? "" : <CookieBanner /> : ""}
							<Footer />
						</>
					)}
				</AppContext.Provider>
			</Router>
		</ThemeProvider>
	);
}

export default App;
