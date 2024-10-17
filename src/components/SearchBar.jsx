"use client";
import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import Lottie from "lottie-react";
import search from "../../public/home/search.json";
import { useGlobalState } from "@/context/GlobalStateContext";

function SearchBar() {
	const { post, updatePost } = useGlobalState();
	const [certificateNumber, setCertificateNumber] = useState("");

	const handleGetCertificate = async () => {
		try {
			const certificate = await fetch(`/api/certificates/${certificateNumber}`);

			if (!certificate.ok) {
				throw new Error("Failed to fetch certificate");
			}

			const finalData = await certificate.json();
			updatePost(finalData);
		} catch (error) {
			console.error("Error:", error);
			updatePost(undefined);
		}
	};

	// console.log(certificateNumber);

	return (
		<div>
			<div className="flex">
				<ReactTyped strings={["Type 7 digit serial number","For example...","1234567"]} typeSpeed={40} backSpeed={50} attr="placeholder" loop className=" w-full">
					<input
						type="text"
						value={certificateNumber}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleGetCertificate();
							}
						}}
						onChange={(e) => setCertificateNumber(e.target.value)}
						className={`${post === undefined ? "bg-[#F5F5F5]" : ""} w-full py-[14px] px-2.5 sm:px-5 rounded-l-md outline-none text-base sm:text-[18px]`}
					/>
				</ReactTyped>

				<span
					onClick={handleGetCertificate}
					className="group bg-[#FA9D00] px-3 sm:px-8 flex justify-center items-center gap-1 font-[500] sm:text-[20px] rounded-r-md cursor-pointer"
				>
					<span className="group-hover:scale-90 duration-300">Search</span>{" "}
					<Lottie loop={true} animationData={search} className="h- w-[40px] group-hover:scale-125 duration-300" />
				</span>
			</div>
			<p className="text-[#D9D9D9] text-start font-[400] pt-2.5">(You can try: 1234567)</p>
		</div>
	);
}

export default SearchBar;
