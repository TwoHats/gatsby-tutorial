import React from "react"
import Layout from '../components/Layout'
import {ExampleButton} from '../components/button'

export default function Home() {
  return (
    <Layout>
      <h1 style= {{color: 'green', testTransform: 'uppercase'}}>Hello From Gatsby</h1>
      <ExampleButton>Buttony Button</ExampleButton> 
    </Layout>
  )
}
