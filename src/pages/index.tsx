// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout';
import Intro from '../components/Intro'
import './app.css'
import About from '../components/About';

// Step 2: Define your component
const MyPage = Layout(() => {
  return (
    <main>
      <Intro />
      <About />
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
})

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default MyPage;