"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/footer_logo.svg";
import Lottie from "lottie-react";
import check from "../../../public/IsverifiedOk/check.json";
import { FaArrowDownLong } from "react-icons/fa6";

import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function BodyContent({ post }) {
	const inputRef = useRef(null);
	const printDocument = () => {
		let downLoad;
	};

	const date = (dateStr) => {
		const date = new Date(dateStr);

		const formattedDate = date.toLocaleDateString("en-GB");

		return formattedDate;
	};
	return (
		<div>
			<div className="bg-[#EDEDED] py-5">
				<div className="g__container">
					<div className="text-[24px] sm:text-[40px] font-barlow font-[600] flex">
						Serial Number -{" "}
						<span className="font-[400] flex items-center gap-3">
							{post?.certificate_number} <Lottie loop={true} animationData={check} className="h-[25px] sm:h-[30px] w-[25px] sm:w-[30px]" />
						</span>
					</div>
				</div>
			</div>
			<div className="g__container flex flex-col sm:flex-row gap-5 pb-[120px]">
				<div className="flex-1 space-y-[50px] sm:border-r-[1px] pt-[50px] ">
					<div className="max-w-[500px]">
						<p className="text-[28px] sm:text-[32px] font-[600] text-[#212222] font-barlow">Item Description</p>
						<p className="font-[400] text-base sm:text-[18px] text-[#262626] pt-3">{post?.item_description}</p>
					</div>
					<div className="max-w-[500px]">
						<p className="text-[28px] sm:text-[32px] font-[600] text-[#212222] font-barlow">Match Used</p>
						<p className="font-[400] text-base sm:text-[18px] text-[#262626] pt-3">{post?.match_used}</p>
					</div>
					<div className="max-w-[500px]">
						<p className="text-[28px] sm:text-[32px] font-[600] text-[#212222] font-barlow">Match Details</p>
						<p className="font-[400] text-base sm:text-[18px] text-[#262626] pt-3">{post?.match_details}</p>
					</div>
					<div className="max-w-[500px]">
						<p className="text-[28px] sm:text-[32px] font-[600] text-[#212222] font-barlow">Item Details</p>
						<p className="font-[400] text-base sm:text-[18px] text-[#262626] pt-3">{post?.item_details}</p>
					</div>
					<div className="">
						<p className="text-[28px] sm:text-[32px] font-[600] text-[#212222] font-barlow">Signed By</p>
						<div className="flex items-center gap-4 pt-3">
							<Image src={post?.signed_by_picture} height={100} width={100} alt="" className="flex-none" />
							<div className="max-w-[200px]">
								<p className="text-[20px] text-[#262626] font-[500]">{post?.signed_by_player_name}</p>
								<p className="text-[14px] text-[#262626]">{post?.signed_by_profession}</p>
							</div>
						</div>
					</div>
					<div className="">
						<p className="text-[28px] sm:text-[32px] font-[600] text-[#212222] font-barlow">Date Signed</p>
						<p className="font-[400] text-base sm:text-[18px] text-[#262626] pt-3">{date(post?.signed_date)}</p>
					</div>
				</div>
				<div className="flex-1 flex flex-col items-center pt-[50px]">
					<Image src={logo} height={135} width={135} className="" alt="" />
					<p className="pt-4 pb-8 text-[36px] font-[600]">Item Picture</p>
					<div className="max-w-[500px]">
						<Image src={post?.item_images} height={550} width={500} className="h-[550px] w-auto object-cover" alt="" />
					</div>
				</div>
			</div>
			{/* <ViewPdf post={post} certificatelogo={certificatelogo} /> */}
			<div className="flex flex-col items-center mb-20">
				<p className="text-[28px] text-center">Download your certificate </p>
				<a href={`/pdf?${post?.certificate_number}`} target="_blank" download='certificate.pdf' className="group text-base font-500 px-8 py-2 bg-[#FA9D00] rounded-md mt-4 flex items-center gap-2.5 ">
					Download <FaArrowDownLong className="group-hover:animate-bounce" />
				</a>
			</div>

			{/* <div ref={inputRef} className="max-w-[850px] mx-auto bg-[url('/certificates.png')] bg-no-repeat bg-[length:100%_100%] bg-center px-10 ">
				<div className="flex flex-col justify-center items-center">
					<Image src={certificatelogo} width={289} height={66} alt="" className="mt-10" />
					<div className="text-[24px] sm:text-[32px] font-barlow font-[700] flex mt-4">
						Serial Number -{" "}
						<span className="font-[400] flex items-center gap-3">
							{post?.certificate_number} <Lottie loop={true} animationData={check} className="h-[25px] sm:h-[30px] w-[25px] sm:w-[30px]" />
						</span>
					</div>
				</div>
				<div className="space-y-8 mt-8 pb-[350px]">
					<div className="">
						<p className="text-[18px] sm:text-[20px] font-[600] text-[#212222] font-barlow">Item Description</p>
						<p className="font-[400] text-base text-[#262626] pt-2">{post?.item_description}</p>
					</div>
					<div className="flex items-center">
						<p className="text-[18px] sm:text-[20px] font-[600] text-[#212222] font-barlow">Match Used - </p>
						<p className="font-[400] text-[18px] sm:text-[20px] text-[#262626] ml-1.5"> {post?.match_used}</p>
					</div>
					<div className="">
						<p className="text-[18px] sm:text-[20px] font-[600] text-[#212222] font-barlow">Match Details</p>
						<p className="font-[400] text-base text-[#262626] pt-2">{post?.match_details}</p>
					</div>
					<div className="">
						<p className="text-[18px] sm:text-[20px] font-[600] text-[#212222] font-barlow">Item Details</p>
						<p className="font-[400] text-base  text-[#262626] pt-2">{post?.item_details}</p>
					</div>
					<div className="flex items-center">
						<p className="text-[18px] sm:text-[20px] font-[600] text-[#212222] font-barlow">Date Signed -</p>
						<p className="font-[400] text-[18px] sm:text-[20px] text-[#262626] ml-1.5">{date(post?.signed_date)}</p>
					</div>
					<div className="">
						<p className="text-[18px] sm:text-[20px] font-[600] text-[#212222] font-barlow">Signed By</p>
						<div className="flex items-center gap-4 pt-3">
							<Image src={post?.signed_by_picture} height={60} width={60} alt="" className="flex-none rounded-full" />
							<div className="max-w-[200px]">
								<p className="text-[16px] text-[#262626] font-[500]">{post?.signed_by_player_name}</p>
								<p className="text-[12px] text-[#262626]">{post?.signed_by_profession}</p>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
}

export default BodyContent;
