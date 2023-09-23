type ChildrenTypes = {
 children?: React.ReactNode
}

type LensTypes = {
 cls: string
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
 placeholder: string
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
