import Wrapper from "../components/Wrapper";
import Header from "../sections/Header";
import Mission from "../sections/Mission";

export default function Home() {
	return (
		<>
			<Wrapper>
				<Header/>
				<main>
					<Mission/>
				</main>
			</Wrapper>
		</>
	)
}