import hero_bg from "@/assets/main_hero.jpg"
import Hero from "@/components/hero"
import LessonBox from "@/components/lesson-box"
import Container from "@/components/shared/Container"
import { data } from "@/constants"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Hero img={hero_bg} title="UpSkill Dropout" />
      <section className="py-20 px-4">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item) => (
              <Link href={item.link} key={item.link} target="blank">
                <LessonBox lesson={item} />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
