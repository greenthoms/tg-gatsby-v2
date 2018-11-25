const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions

    // Set the path for template
    const postTemplate = path.resolve('src/templates/post-template.js');

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            path
                            title
                            date
                            author
                        }
                    }
                }
            }
        }
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate,
            })
        })
    })
}