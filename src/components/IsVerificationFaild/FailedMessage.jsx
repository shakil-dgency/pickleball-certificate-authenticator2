
import React from "react";
import SearchBar from "../SearchBar";

function FailedMessage() {

	return (
		<div className="pt-[80px] pb-[120px]">
			<div className="g__mobile-container  max-w-[630px] mx-auto ">
				<SearchBar />
			</div>
			<div className="g__mobile-container  max-w-[770px] mx-auto mt-[50px]">
				<p className="text-[36px] font-[600] font-barlow text-[#212222]">Instructions to Search Again</p>
				<ul className="pt-3">
					<li className="text-[#565656]">
						* Please allow up to 21 days after the conclusion of the event for Pickleball Authentic Certified to upload all the certified items.
					</li>
					<li className="text-[#565656]">
						* If your search results do not show up after 30 days, please submit your serial number through our Contact Us form and we will get back
						to you.
					</li>
				</ul>
			</div>
		</div>
	);
}

export default FailedMessage;
