import React, { useEffect } from 'react';
import usePage from './hooks/useOpenGraph';

function Content() {
  usePage({
    title: "This is Content Page",
    description: "This is description of content",
    keywords: ["content1", "content2"],
    ogTitle: "Ogtitle for content",
    ogDescription: "ogdescription for content",
    ogImage: "http://content.com/image1.png",
    ogUrl: "http://content.com/url"
  })
  return (
    <div>
      <h1>Content Page</h1>
    </div>
  );
}

export default Content;
