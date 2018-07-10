import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Bio from '../pages/bio';
import Content, { HTMLContent } from '../components/Content'

class Talks extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const group = _.groupBy(posts,(e) => new Date(e.node.frontmatter.date).getFullYear());
    const keys = Object.keys(group);
    const postKeys = _.sortBy(keys).reverse();
    return (
      <section className="section">
        <div className="container content">
          <div className="content" style={{ display: 'flex'}} >
            <Bio />
            <div className="inner-content" style={{ flexDirection: 'row', marginLeft: '30px' ,maxWidth: '600px' }} >
              <h1 className='rainbow' style={{ fontSize: '36px', marginBottom: '40px', fontWeight: '900' }}>Talks</h1>
              {postKeys.map(key => (
                <div className="content" key={key} >
                  <h3 className="rainbow" >{key}</h3>
                  {group[key].map(({node: post}) => (
                    <p key={post.id} className="content-listing" style={{ display: 'flex' }} >
                      {
                        (post.frontmatter.link !== ' ') ? 
                          <a className="has-text-primary" href={post.frontmatter.link} dangerouslySetInnerHTML={{ __html: post.html }}></a>
                        : 
                          <span dangerouslySetInnerHTML={{ __html: post.html }}></span>
                      }
                      {
                        (post.frontmatter.description !== ' ') ?
                          <span>- {post.frontmatter.description}</span> :
                          null
                      }
                      {
                        post.frontmatter.video_link ? <a href={post.frontmatter.video_link}> [video]</a> : null
                      }
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )    
  }  
} 

Talks.propTypes = {
  link: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

export default Talks

export const pageQuery = graphql`
  query Talks{
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "talk" } }}
    ) {
      edges {
        node {
          id
          frontmatter {
            templateKey
            date(formatString: "YYYY")
            title
            link
            description
            video_link
          }
          html
        }
      }
    }
  }
`