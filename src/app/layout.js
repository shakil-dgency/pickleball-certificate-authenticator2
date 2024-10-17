import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";

import { GlobalStateProvider } from "@/context/GlobalStateContext";
import Script from "next/script";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"], // Specify the available font weights here
});

export const metadata = {
	title: "Pickleball Certificate Authenticator",
	description: "Generated by create next app",
	icons: {
		icon: [
			{
				url: "/favicon.svg", // Path to your SVG favicon
				sizes: "192x192", // For SVG, use "any"
			},
		],
	},
	link: [
		{
			rel: "preload",
			href: "/home/hero.png",
			as: "image",
			type: "image/png",
		},
		{
			rel: "preload",
			href: "/IsverifiedOk/verified_hero.png",
			as: "image",
			type: "image/png",
		},
		{
			rel: "preload",
			href: "/IsverifiedFaild/verification_failed.png",
			as: "image",
			type: "image/png",
		},
	],
};

// Export a generateMetadata function
// export function generateMetadata() {
// 	return {
// 		title: "Pickleball Certificate Authenticator",
// 		description: "Generated by create next app",
// 		link: [
// 			{
// 				rel: "preload",
// 				href: "/public/home/hero.png",
// 				as: "image",
// 				type: "image/png",
// 			},
// 			{
// 				rel: "preload",
// 				href: "/public/IsverifiedOk/verified_hero.png",
// 				as: "image",
// 				type: "image/png",
// 			},
// 			{
// 				rel: "preload",
// 				href: "/public/IsverifiedFaild/verification_failed.png",
// 				as: "image",
// 				type: "image/png",
// 			},
// 		],
// 	};
// }

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${roboto.className} antialiased flex flex-col min-h-screen`}>
				<GlobalStateProvider>
					<Navbar />
					{children}
					<Footer />
				</GlobalStateProvider>
				<Script strategy="beforeInteractive" src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`} />
			</body>
		</html>
	);
}
