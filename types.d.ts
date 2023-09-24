type ChildrenTypes = {
 children?: React.ReactNode
}

type HeroOverlayTypes = {
 img: StaticImageData
}

type HeroContentTypes = {
 title: string
}

type HeroTypes = HeroOverlayTypes & HeroContentTypes

type LensTypes = {
 cls?: string
}

type CommentBoxTypes = {
 data: {
  comment: string
  sender: string
  date: string
 }
}

type StarTypes = {
 starName: `gray` | `white` | `purple` | `light`
 cls: string
}

type SectionTypes = ChildrenTypes & {
 cls?: string
 id?: string
}

type ButtonTypes = {
 text: string
 cls?: string
 handleClick?: () => void
}

type InputTypes = {
 label?: string
 id: string
 type: string
 value: string
 handleInput: (e: any) => void
}

type AttrubutesInfoBoxTypes = ChildrenTypes & {
 title: string
}

type HeadingTypes = ChildrenTypes & {
 title?: string
 accentTitle?: string
 center?: boolean
}

type TimelineCardTypes = {
 data: {
  id: number
  date: string
  title: string
  paragraph: string
 }
}

type PrizeCardTypes = {
 data: {
  id: number
  rank: string
  price: string
  img: StaticImageData
 }
}

type PartnerTypes = {
 data: {
  id: number
  img: StaticImageData
 }
}

type TimelineCardDirTypes = TimelineCardTypes & {
 dir: `l` | `r`
}

type NumberType = {
 data: number
}

type PartnersLineType = {
 dir: `h` | `v`
}

type FooterContactBoxTypes = {
 data: {
  id: number
  name: string
  text: string[]
 }
}
