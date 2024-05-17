import * as React from 'react'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Image from 'next/image'
import FullBleedMedia, {
  fullScreenContainerClassNames,
  autoHeightContainerClassNames,
} from './fullbleed'

const ImageMedia = ({
  image,
  alt,
  fullheight,
}) => {
  const containerClasses = fullheight
    ? fullScreenContainerClassNames
    : autoHeightContainerClassNames
  return (
    <FullBleedMedia reducedPadding={!fullheight}>
      <Image src={image} alt={alt} className={containerClasses} />
    </FullBleedMedia>
  )
}

export default ImageMedia
