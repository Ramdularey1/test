import React from 'react'
import usePage from './hooks/useOpenGraph'

function About() {
    usePage({
        title: "This is Content about",
        description: "This is description of about",
        keywords: ["about1", "about2"],
        ogTitle: "Ogtitle for about",
        ogDescription: "ogdescription for about",
        ogImage: "https://res.cloudinary.com/dhkh3mqcu/image/upload/v1731423946/revspirelogo1_vmwriv.svg",
        ogUrl: "https://test-beta-tawny-81.vercel.app/about"
      })
  return (
    <div>About</div>
  )
}

export default About