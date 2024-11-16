import React, { useEffect } from 'react';
import usePage from './hooks/useOpenGraph';

function Content() {
  usePage({
    title: "This is Content Page",
    description: "This is description of content",
    keywords: ["content1", "content2"],
    ogTitle: "Ogtitle for content",
    ogDescription: "ogdescription for content",
    ogImage: "https://res.cloudinary.com/dhkh3mqcu/image/upload/v1731423946/revspirelogo1_vmwriv.svg",
    ogUrl: "https://test-beta-tawny-81.vercel.app/content"
  })
  return (
    <div>
      <h1>Content Page</h1>
    </div>
  );
}

export default Content;
