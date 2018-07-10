import React from 'react'
import Bio from '../pages/bio';
import Content, { HTMLContent } from '../components/Content'
import Helmet from 'react-helmet'

class About extends React.Component {
  render() {
    const data = this.props.data.markdownRemark
    return (
      <section className="section">
        <Helmet title={this.props.data.site.siteMetadata.title} />
        <div className="container">
          <div className="content" style={{ display: 'flex'}} >
            <Bio />
            <div style={{ width: '600px', marginLeft: '30px', fontSize: '18px', fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' }}>
              <HTMLContent  className="about"  content={data.html} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About

export const pageQuery = graphql`
query AboutByID($id: String!) {
  site {
    siteMetadata {
      title
    }
  }
  markdownRemark(id: { eq: $id }) {
    id
    html
    frontmatter {
      title
      date
      description
    }
    excerpt
    fields {
      slug
    }
  }
}`