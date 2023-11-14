import hero_bg from "@/assets/js-dom-hero.jpg"
import meme_Img from "@/assets/js-dom-meme.png"
import Hero from "@/components/hero"
import AccessingTheDom from "@/components/js-dom/AccessingTheDom"
import DOMIntro from "@/components/js-dom/DOMIntro"
import EventHandling from "@/components/js-dom/EventHandling"
import ManipulatingTheDom from "@/components/js-dom/ManipulatingTheDom"
import StylingTheDom from "@/components/js-dom/StylingTheDom"
import TraversingTheDom from "@/components/js-dom/TraversingTheDom"
import Main from "@/components/main"
import Meme from "@/components/shared/Meme"

export default function JSDOM() {
	return (
		<>
			<Hero
				img={hero_bg}
				title="JS DOM"
			/>
			<Main>
				<DOMIntro />
				<AccessingTheDom />
				<ManipulatingTheDom />
				<TraversingTheDom />
				<EventHandling />
				<StylingTheDom />
				<Meme img={meme_Img} />
			</Main>
		</>
	)
}
