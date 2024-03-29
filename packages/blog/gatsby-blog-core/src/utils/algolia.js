const postQuery = `{
  posts: allArticle {
    edges {
      node {
        objectID: id
				title
        slug
				excerpt(pruneLength: 5000)
				category {
					name
					slug
				}
      }
    }
  }
}
`

const flatten = arr =>
  arr.map(({ node: { ...rest } }) => ({
    ...rest
  }))

const settings = {
  attributesToSnippet: ['excerpt:20'],
  attributeForDistinct: 'category.name'
}

const queries = [
  {
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME || 'Posts',
    query: postQuery,
    settings,
    transformer: ({ data }) => flatten(data.posts.edges)
  }
]

module.exports = queries
