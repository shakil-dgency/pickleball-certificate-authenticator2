"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/footer_logo.svg";
import Lottie from "lottie-react";
import check from "../../../public/IsverifiedOk/check.json";

function BodyContent({ post }) {
	const date=(dateStr)=>{
		const date = new Date(dateStr);

		const formattedDate = date.toLocaleDateString("en-GB");

		return formattedDate;

	}
	return (
		<div>
			<div className="bg-[#EDEDED] py-5">
				<div className="g__container">
					<div className="text-[24px] sm:text-[36px] font-barlow font-[600] flex">
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
						<p className="text-[36px] font-[600] text-[#212222] font-barlow">Item Description</p>
						<p className="font-[400] text-[20px] text-[#262626] pt-3">{post?.item_description}</p>
					</div>
					<div className="max-w-[500px]">
						<p className="text-[36px] font-[600] text-[#212222] font-barlow">Match Used</p>
						<p className="font-[400] text-[20px] text-[#262626] pt-3">{post?.match_used}</p>
					</div>
					<div className="max-w-[500px]">
						<p className="text-[36px] font-[600] text-[#212222] font-barlow">Item Details</p>
						<p className="font-[400] text-[20px] text-[#262626] pt-3">{post?.item_details}</p>
					</div>
					<div className="">
						<p className="text-[36px] font-[600] text-[#212222] font-barlow">Signed By</p>
						<div className="flex gap-4 pt-3">
							<Image src={post?.signed_by_picture} height={100} width={100} alt="" className="flex-none" />
							<div className="max-w-[200px]">
								<p className="text-[20px] text-[#262626] font-[500]">{post?.signed_by_player_name}</p>
								<p className="text-[14px] text-[#262626]">{post?.signed_by_profession}</p>
							</div>
						</div>
					</div>
					<div className="">
						<p className="text-[36px] font-[600] text-[#212222] font-barlow">Date Signed</p>
						<p className="font-[400] text-[20px] text-[#262626] pt-3">{date(post?.signed_date)}</p>
					</div>
				</div>
				<div className="flex-1 flex flex-col items-center pt-[50px]">
					<Image src={logo} height={135} width={135} className="" alt="" />
					<h2 className="pt-4 pb-8">Item Picture</h2>
					<div className="max-w-[500px]">
						<Image src={post?.item_images} height={550} width={500} className="h-[550px] w-auto object-cover" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default BodyContent;
