import React from 'react'
import Layout from '../components/Layout'
import styles from '../components/blog.module.css'

const blog = () => {
  return (
    <Layout>
      <div className = {styles.page}>
        <h1>This is our blog page</h1>
        <p className = {styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Magnam ullam id a vel commodi rerum animi, suscipit 
          accusamus eveniet! Hic deserunt dolore consectetur aperiam 
          dolorem!</p>
      </div>
    </Layout>
  )
}

export default blog
