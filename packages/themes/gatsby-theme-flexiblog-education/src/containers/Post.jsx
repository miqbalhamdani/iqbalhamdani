import React from 'react'
import { Card as CardComponent } from 'theme-ui'
import { Layout, Stack, Main, Sidebar } from '@layout'
import CardList from '@components/CardList'
import Card from '@components/Card'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import AuthorExpanded from '@widgets/AuthorExpanded'
import NewsletterCompact from '@widgets/NewsletterCompact'
import { PostImage, PostBody, PostComments, PostTagsShare } from '@widgets/Post'

const Post = ({
  data: { post, tagCategoryPosts, tagPosts, categoryPosts, previous, next },
  ...props
}) => {
  const relatedPosts = [
    ...(tagCategoryPosts ? tagCategoryPosts.nodes : []),
    ...(tagPosts ? tagPosts.nodes : []),
    ...(categoryPosts ? categoryPosts.nodes : [])
  ]
  const { pageContext: { services = {}, siteUrl } = {} } = props

  return (
    <Layout {...props}>
      <Seo {...post} siteUrl={siteUrl} />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <Main>
          <Card {...post} variant='horizontal-hero' omitExcerpt omitMedia />
        </Main>
        <Sidebar pl={[null, 2, 4, 5]}>
          <NewsletterCompact omitTitle />
        </Sidebar>
      </Stack>
      <Divider space={3} />
      <Stack effectProps={{ fraction: 0 }}>
        <Main>
          <CardComponent variant='paper-lg'>
            <PostImage {...post} inCard />
            <PostBody {...post} />
            <PostTagsShare {...post} location={props.location} />
            {services.disqus && <PostComments {...post} />}
          </CardComponent>
          <Divider />
          <AuthorExpanded author={post.author} />
          <Divider />
          {post.category && (
            <CardList
              title='Related Posts'
              nodes={relatedPosts}
              variant={['horizontal-md']}
              columns={[1, 2, 2, 2]}
              limit={6}
              distinct
            />
          )}
        </Main>
      </Stack>
    </Layout>
  )
}

export default Post
