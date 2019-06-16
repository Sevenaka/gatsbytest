import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/main"
import SEO from "../components/seo"

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" description="Описание" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default Home
