import { useEffect, useState } from "react";

const useBuyNow = () => {
	const [isLoading, setIsLoading] = useState(true);
	var scriptURL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

	useEffect(() => {
		function ShopifyBuyInit() {
			var client = window.ShopifyBuy.buildClient({
				domain: "checkout-2.bigthirst.com",
				storefrontAccessToken: "9ea9713c369de740b2377a487e2ead24",
			});
			window.ShopifyBuy.UI.onReady(client)
				.then(function (ui) {
					ui.createComponent("collection", {
						id: "632530633013",
						node: document.getElementById("collection-component-1730304639059"),
						moneyFormat: "%24%7B%7Bamount%7D%7D",
						options: {
							product: {
								styles: {
									product: {
										"@media (min-width: 601px)": {
											"max-width": "calc(33.33333% - 30px)",
											"margin-left": "30px",
											"margin-bottom": "50px",
											width: "calc(33.33333% - 30px)",
										},
										img: {
											height: "calc(100% - 15px)",
											position: "absolute",
											left: "0",
											right: "0",
											top: "0",
										},
										imgWrapper: {
											"padding-top": "calc(75% + 15px)",
											position: "relative",
											height: "0",
										},
									},
									title: {
										"font-family": "Roboto, sans-serif",
										color: "#000000",
									},
									button: {
										"font-family": "Roboto, sans-serif",
										"font-weight": "bold",
										"font-size": "18px",
										"padding-top": "17px",
										"padding-bottom": "17px",
										":hover": {
											"background-color": "#b8161a",
										},
										"background-color": "#6c0d0f",
										":focus": {
											"background-color": "#b8161a",
										},
									},
									quantityInput: {
										"font-size": "18px",
										"padding-top": "17px",
										"padding-bottom": "17px",
									},
									price: {
										"font-family": "Roboto, sans-serif",
										"font-size": "18px",
										color: "#025031",
									},
									compareAt: {
										"font-family": "Roboto, sans-serif",
										"font-size": "15.299999999999999px",
										color: "#025031",
									},
									unitPrice: {
										"font-family": "Roboto, sans-serif",
										"font-size": "15.299999999999999px",
										color: "#025031",
									},
								},
								contents: {
									button: false,
									description: true,
									buttonWithQuantity: true,
								},
								googleFonts: ["Roboto"],
							},
							productSet: {
								styles: {
									products: {
										"@media (min-width: 601px)": {
											"margin-left": "-30px",
										},
									},
								},
							},
							modalProduct: {
								contents: {
									img: false,
									imgWithCarousel: true,
									button: false,
									buttonWithQuantity: true,
								},
								styles: {
									product: {
										"@media (min-width: 601px)": {
											"max-width": "100%",
											"margin-left": "0px",
											"margin-bottom": "0px",
										},
									},
									button: {
										"font-family": "Roboto, sans-serif",
										"font-weight": "bold",
										"font-size": "18px",
										"padding-top": "17px",
										"padding-bottom": "17px",
										":hover": {
											"background-color": "#b8161a",
										},
										"background-color": "#6c0d0f",
										":focus": {
											"background-color": "#b8161a",
										},
									},
									quantityInput: {
										"font-size": "18px",
										"padding-top": "17px",
										"padding-bottom": "17px",
									},
									title: {
										"font-family": "Helvetica Neue, sans-serif",
										"font-weight": "bold",
										"font-size": "26px",
										color: "#4c4c4c",
									},
									price: {
										"font-family": "Helvetica Neue, sans-serif",
										"font-weight": "normal",
										"font-size": "18px",
										color: "#4c4c4c",
									},
									compareAt: {
										"font-family": "Helvetica Neue, sans-serif",
										"font-weight": "normal",
										"font-size": "15.299999999999999px",
										color: "#4c4c4c",
									},
									unitPrice: {
										"font-family": "Helvetica Neue, sans-serif",
										"font-weight": "normal",
										"font-size": "15.299999999999999px",
										color: "#4c4c4c",
									},
								},
								googleFonts: ["Roboto"],
								text: {
									button: "Add to cart",
								},
							},
							option: {},
							cart: {
								styles: {
									button: {
										"font-family": "Roboto, sans-serif",
										"font-weight": "bold",
										"font-size": "18px",
										"padding-top": "17px",
										"padding-bottom": "17px",
										":hover": {
											"background-color": "#b8161a",
										},
										"background-color": "#6c0d0f",
										":focus": {
											"background-color": "#b8161a",
										},
									},
									title: {
										color: "#000000",
									},
									header: {
										color: "#000000",
									},
									lineItems: {
										color: "#000000",
									},
									subtotalText: {
										color: "#000000",
									},
									subtotal: {
										color: "#000000",
									},
									notice: {
										color: "#000000",
									},
									currency: {
										color: "#000000",
									},
									close: {
										color: "#000000",
										":hover": {
											color: "#000000",
										},
									},
									empty: {
										color: "#000000",
									},
									noteDescription: {
										color: "#000000",
									},
									discountText: {
										color: "#000000",
									},
									discountIcon: {
										fill: "#000000",
									},
									discountAmount: {
										color: "#000000",
									},
								},
								text: {
									total: "Subtotal",
								},
								contents: {
									note: true,
								},
								popup: false,
								googleFonts: ["Roboto"],
							},
							toggle: {
								styles: {
									toggle: {
										"font-family": "Roboto, sans-serif",
										"font-weight": "bold",
										"background-color": "#6c0d0f",
										":hover": {
											"background-color": "#b8161a",
										},
										":focus": {
											"background-color": "#b8161a",
										},
									},
									count: {
										"font-size": "18px",
									},
								},
								googleFonts: ["Roboto"],
							},
							lineItem: {
								styles: {
									variantTitle: {
										color: "#000000",
									},
									title: {
										color: "#000000",
									},
									price: {
										color: "#000000",
									},
									fullPrice: {
										color: "#000000",
									},
									discount: {
										color: "#000000",
									},
									discountIcon: {
										fill: "#000000",
									},
									quantity: {
										color: "#000000",
									},
									quantityIncrement: {
										color: "#000000",
										"border-color": "#000000",
									},
									quantityDecrement: {
										color: "#000000",
										"border-color": "#000000",
									},
									quantityInput: {
										color: "#000000",
										"border-color": "#000000",
									},
								},
							},
						},
					});
				})
				.then(() => {
					setIsLoading(false); // Set loading to false after component is created
				});
		}

		function loadScript() {
			// Check if script already exists
			if (document.querySelector(`script[src="${scriptURL}"]`)) {
				// If script exists but ShopifyBuyInit hasn't run yet
				if (window.ShopifyBuy && window.ShopifyBuy.UI) {
					ShopifyBuyInit();
				}
				return;
			}

			var script = document.createElement("script");
			script.async = true;
			script.src = scriptURL;
			script.onload = ShopifyBuyInit;
			script.onerror = () => {
				setIsLoading(false); // Set loading to false even if script fails
				console.error("Failed to load Shopify Buy Button script");
			};

			(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(script);
		}

		// Main initialization logic
		if (window.ShopifyBuy) {
			if (window.ShopifyBuy.UI) {
				ShopifyBuyInit();
			} else {
				loadScript();
			}
		} else {
			loadScript();
		}

		// Cleanup function
		return () => {
			const existingScript = document.querySelector(`script[src="${scriptURL}"]`);
			if (existingScript) {
				existingScript.remove();
			}
		};
	}, [scriptURL]);

	return { isLoading };
};

export default useBuyNow;
