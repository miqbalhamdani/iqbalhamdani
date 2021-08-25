import React from 'react'
import { Card, Badge, Link } from 'theme-ui'
import Section from '@components/Section'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'

const Referral = () => {
  const { referral, social } = useSiteMetadata()
  const referralItem = ({label, name, url}) => {
    return (
      <tr>
        <td>{label}</td>
        <td>:</td>
        <td>
          <Link href={url}>
            <Badge
              variant='tag'
              key={name}
              to={url}
              style={{fontWeight: '600', fontSize: '1rem'}}
            >
              {name}
            </Badge>
          </Link>
        </td>
      </tr>
    )
  };

  return (
    <Section aside title="Referrals">
      <Card variant='paper'>
        {referral &&
          referral.length &&
          (<table>
            {referral.map((item) => referralItem(item))}
          </table>)
        }
      </Card>
    </Section>
  )
}

export default Referral
