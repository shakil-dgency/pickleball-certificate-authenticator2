"use client";
import React from "react";
import Lottie from "lottie-react";
import check from "../../../public/IsverifiedOk/check.json";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

function Hero() {
	const handleReload = () => {
		window.location.reload();
	};
	return (
		<div className="w-full  bg-[url('/IsverifiedOk/verified_hero.png')] bg-no-repeat bg-cover ">
			<div className="max-w-[1100px] mx-auto">
				<div className="h-[inherit] sm:h-[68px] self-start sm:self-auto sm:flex sm:items-center pt-[25px] sm:pt-10 ml-2.5 md:ml-0 mb-[30px] sm:mb-0">
					<Link
						href="/"
						onClick={handleReload}
						className="text-white text-center font-[400] text-[12px] md:text-[14px] flex items-center decoration-[1px]  underline underline-offset-4 "
					>
						<BiChevronLeft className="text-xl" /> SEARCH AGAIN
					</Link>
				</div>
			</div>
			<div className="g__mobile-container  max-w-[750px] mx-auto text-center pb-[100px] pt-[60px] sm:pt-[80px] sm:pb-[160px] ">
				<div className="flex justify-center mb-6">
					<Lottie loop={true} animationData={check} className="h-[150px] w-[150px]" />
				</div>
				<h1>Signature Verified</h1>
				<p className="text-[#b0b0b0] mt-2.5 text-base md:text-lg">
					Verify the authenticity of your autographed item. Simply enter the serial number provided by Pickleball Certified Authentic in the box below
					to confirm its legitimacy.
				</p>
			</div>
		</div>
	);
}

export default Hero;
