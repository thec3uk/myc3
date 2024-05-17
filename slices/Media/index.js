import * as React from 'react'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Image from 'next/image'
import FullBleedMedia, {
  fullScreenContainerClassNames,
  autoHeightContainerClassNames,
} from './fullbleed'

const ImageMedia = ({
  slice
}) => {
  const {
    image,

    fullheight,
  } = slice.primary

  const containerClasses = fullheight
    ? fullScreenContainerClassNames
    : autoHeightContainerClassNames
  return (
    <>
    { slice.variation === "default" ?
    (<FullBleedMedia reducedPadding={!fullheight}>
      <Image src={image.url} alt={image.alt} className={containerClasses} width={image.dimensions.width} height={image.dimensions.height} />
    </FullBleedMedia>): slice.variation === "blockImage" ? (
      <section className="grid items-center justify-center grid-cols-2 my-6 md:grid-cols-3 px-4">
        <Image src={image.url} alt={image.alt} className="md:col-start-2 max-h-32 max-w-32 -mb-12 mt-16"  width={image.dimensions.width} height={image.dimensions.height} />
       </section>
    ):<></>
    }</>

  )
}

export default ImageMedia
