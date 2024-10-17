"use client";
import Image from "next/image";
import React, { useState } from "react";
import contact from "../../../public/contact.svg";
import axios from "axios";
import { getCaptchaToken } from "@/server/utils/captcha";


function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		message: "",
	});

	const handleSubmit = async (e) => {
		const token = await getCaptchaToken();
		const newData = {...formData, token}

		
		try {
			const apiUrl = process.env.NEXT_PUBLIC_API_URL;

			const response = await Promise.race([axios.post(`${apiUrl}/api/send-contact-info`, newData)]);
		} catch (error) {
			console.log(error);
		}
	};



	return (
		<div className="g__mobile-container ">
			<div className="bg-white relative rounded-md shadow-[0px_2px_5px_1px_#22222210] px-5 sm:px-16 pt-10 pb-32 sm:pb-14 max-w-[770px] mx-auto mb-[120px] space-y-5 sm:space-y-10">
				<form onSubmit={handleSubmit} className="space-y-5 sm:space-y-10">
					<div className="flex flex-col sm:flex-row gap-5">
						<div className="flex-1">
							<p className="font-[500] text-[#262626] pb-1">First Name</p>
							<input
								type="text"
								placeholder="John"
								value={formData.firstName}
								onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
								className="w-full bg-[#F5F5F5] border-[1px] border-[#E6E6E6] py-1.5 rounded-md outline-none px-2.5"
							/>
						</div>
						<div className="flex-1">
							<p className="font-[500] text-[#262626] pb-1">Last Name</p>
							<input
								type="text"
								placeholder="Doe"
								value={formData.lastName}
								onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
								className="w-full bg-[#F5F5F5] border-[1px] border-[#E6E6E6] py-1.5 px-2.5 rounded-md outline-none"
							/>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row gap-5">
						<div className="flex-1">
							<p className="font-[500] text-[#262626] pb-1">Email</p>
							<input
								type="email"
								placeholder="demo@gmail.com"
								value={formData.email}
								onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
								className="w-full bg-[#F5F5F5] border-[1px] border-[#E6E6E6] py-1.5 px-2.5 rounded-md outline-none"
							/>
						</div>
						<div className="flex-1">
							<p className="font-[500] text-[#262626] pb-1">Phone Number</p>
							<input
								type="phone"
								placeholder="+1 012 3456 789"
								value={formData.phoneNumber}
								onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
								className="w-full bg-[#F5F5F5] border-[1px] border-[#E6E6E6] py-1.5 px-2.5 rounded-md outline-none"
							/>
						</div>
					</div>
					<div>
						<p className="font-[500] text-[#262626] pb-1">Message</p>
						<textarea
							type="text"
							rows="10"
							placeholder="Write your message..."
							value={formData.message}
							onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
							className="w-full bg-[#F5F5F5] border-[1px] border-[#E6E6E6] py-2 px-3 rounded-md resize-none outline-none"
						/>
						<div className="mt-5 flex justify-end">
							<button  type="submit" className="bg-[#FA9D00] px-10 py-3 sm:py-2.5 rounded-md font-[500] w-full sm:w-auto">
								Send Message
							</button>
						</div>
					</div>
					
				</form>
				<Image src={contact} height={97} width={242} className="absolute bottom-4 left-[50%] translate-x-[-50%] sm:translate-x-0 sm:left-4" alt="" />
			</div>
		</div>
	);
}

export default ContactForm;
