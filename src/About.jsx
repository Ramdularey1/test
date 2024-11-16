import React from 'react'
import usePage from './hooks/useOpenGraph'

function About() {
    usePage({
        title: "This is Content about",
        description: "This is description of about",
        keywords: ["about1", "about2"],
        ogTitle: "Ogtitle for about",
        ogDescription: "ogdescription for about",
        ogImage: "http://about.com/image1.png",
        ogUrl: "http://about.com/url"
      })
  return (
    <div>About</div>
  )
}

export default About