import React from 'react'
import { Heading, Text } from 'theme-ui'

/**
 * Shadow me to add your own content
 */

const styles = {
  author: {
    display: `inline-block`,
    color: `alpha`
  },
  occupation: {
    mb: 4
  },
  specialty: {
    color: `text`,
    mb: 4
  }
}

export default () => (
  <>
    <Heading variant='h1'>
      Hi, I'm <Text sx={styles.author}>Iqbal Hamdani</Text>.
    </Heading>
    <Heading variant='h3' sx={styles.specialty}>
      Frontend Engineer
    </Heading>
  </>
)
