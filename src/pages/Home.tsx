import Wrapper from "../components/Wrapper";
import Faqs from "../sections/Faqs";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Mission from "../sections/Mission";
import OurWork from "../sections/OurWork";
import WhatWeDo from "../sections/WhatWeDo";

export default function Home() {
	return (
		<>
			<Wrapper>
				<Header/>
				<main>
					<Mission />
					<OurWork />
					<WhatWeDo />
					{/* <Faqs /> */}
					<Footer />
				</main>
			</Wrapper>
		</>
	)
}