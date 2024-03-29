import React from 'react'
import { Layout, Stack, Main, PreFooter } from '@layout'
import PageTitle from '@components/PageTitle'
import Pagination from '@components/Pagination'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

const PageCollection = ({ data: { posts, collectionInfo }, ...props }) => (
  <Layout {...props}>
    <Seo title={collectionInfo.name} />
    <Divider />
    <Stack effectProps={{ effect: 'fadeInDown' }}>
      <PageTitle
        header={collectionInfo.name}
        subheader={collectionInfo.title}
        running={collectionInfo.description}
        totalCount={posts.totalCount}
      />
    </Stack>
    <Divider />
    <Stack>
      <Main>
        {posts.nodes && (
          <CardList
            nodes={posts.nodes}
            variant={['horizontal-md', 'vertical']}
            columns={[1, 2, 3, 3]}
            omitCategory={
              props.pageContext &&
              props.pageContext.collectionType === 'category'
            }
          />
        )}
      </Main>
    </Stack>
    <Divider />
    <PreFooter>
      <Pagination {...posts.pageInfo} {...collectionInfo} />
    </PreFooter>
  </Layout>
)

export default PageCollection
