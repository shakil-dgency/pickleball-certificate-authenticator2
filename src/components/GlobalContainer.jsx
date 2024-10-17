"use client"
import React from 'react'
import Hero from './Home/Hero/Hero'
import PurchaseIncludes from './Home/PurchaseIncludes'
import AboutAndGallery from './Home/AboutAndGallery'
import BodyContent from './IsVerifiedOk/BodyContent'
import HeroOk from "./IsVerifiedOk/HeroOk";
import HeroFailed from './IsVerificationFaild/HeroFailed'
import FailedMessage from './IsVerificationFaild/FailedMessage'
import { useGlobalState } from "@/context/GlobalStateContext";

function GlobalContainer() {
    const { post } = useGlobalState();
    
  return (
    <div>
        <div className="">
			{post === null && <div>
				<Hero />
				<PurchaseIncludes />
				<AboutAndGallery />
			</div>}

			{/* --------verification ok ----------- */}
			{post !== null && post!==undefined && <div>
				<HeroOk />
				<BodyContent post={post} />
			</div>}

			{/* ------------verification faild-------------- */}

			{post===undefined && <div>
				<HeroFailed />
				<FailedMessage />
			</div>}
		</div>
    </div>
  )
}

export default GlobalContainer