import meme_Img from "@/assets/assignment-meme-1.jpeg"
import hero_bg from "@/assets/main_hero.jpg"
import ImagesPage from "@/components/first-week-assignment-solution/ImagesPage"
import IndexPage from "@/components/first-week-assignment-solution/IndexPage"
import SolutionOneIntro from "@/components/first-week-assignment-solution/SolutionOneIntro"
import Hero from "@/components/hero"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"

export default function FirstWeekAssignmentSolution() {
	return (
		<>
			<Hero
				img={hero_bg}
				title="First Week's Assignment Solution"
			/>
			<Main>
				<SolutionOneIntro />
				<IndexPage />
				<ImagesPage />
				<Meme img={meme_Img} />
			</Main>
		</>
	)
}
