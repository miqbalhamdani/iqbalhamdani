import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import { css } from 'theme-ui'
import Divider from '@components/Divider'
import getImageVariant from '@components/utils/getImageVariant'

const styles = {
  regular: {
    minHeight: `23rem`,
    bg: `omegaLighter`,
    borderRadius: `lg`
  },
  wide: {
    borderRadius: `lg`
  },
  inCard: {
    borderRadius: t => `${t.radii.lg} ${t.radii.lg} 0 0`,
    mt: -4,
    mx: -4
  },
  inCardLarge: {
    borderRadius: t => `${t.radii.lg} ${t.radii.lg} 0 0`,
    mt: -5,
    mx: -5
  }
}

export const PostImage = ({
  title,
  thumbnail,
  wide,
  full,
  inCard,
  inCardLarge
}) => {
  if (!thumbnail) return null

  const variant = (wide && 'wide') || (full && 'full') || 'regular'
  const image = getImageVariant(thumbnail, 'hero')

  return (
    <>
      <Img
        image={image}
        alt={title}
        css={css({
          bg: `omegaLighter`,
          ...styles[variant],
          ...(inCard && styles.inCard),
          ...(inCardLarge && styles.inCardLarge)
        })}
        imgStyle={
          variant === 'wide' || variant === 'full' ? styles.full : undefined
        }
      />
      <Divider space={3} />
    </>
  )
}

PostImage.propTypes = {
  wide: PropTypes.bool,
  full: PropTypes.bool,
  inCard: PropTypes.bool,
  inCardLarge: PropTypes.bool
}
