import Wrapper from "../components/Wrapper";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Mission from "../sections/Mission";
import OurWork from "../sections/OurWork";
import Plans from "../sections/Plans";
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
					<Plans />
					{/* <Faqs /> */}
					<Footer />
				</main>
			</Wrapper>
		</>
	)
}