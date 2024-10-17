"use client"
import React from "react";
import Lottie from "lottie-react";
import alert from "../../../public/IsverifiedFaild/alert.json"
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

function HeroFailed() {
	const handleReload = () => {
		window.location.reload();
	};
	return (
		<div className="w-full  bg-[url('/IsverifiedFaild/verification_failed.png')] bg-no-repeat bg-cover ">
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
			<div className="g__mobile-container max-w-[850px] mx-auto text-center pb-[100px] pt-[60px] sm:pt-[80px] sm:pb-[160px] ">
				<div className="flex justify-center mb-3 -mt-5">
					
					<Lottie loop={true} animationData={alert} className="h-[150px] w-[150px]" />
				</div>
				<h1>Signature verification failed</h1>
				<p className="text-[#b0b0b0] mt-2.5 text-base md:text-lg">Please make sure you have entered a valid serial number and try again.</p>
			</div>
		</div>
	);
}

export default HeroFailed;
