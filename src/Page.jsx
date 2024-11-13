import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const Page = () => {
  const { id } = useParams();  // Get dynamic `id` from URL

  let pageData = {
    title: "Default Title",
    description: "Default description.",
    image: "https://defaultimage.com/default.jpg",
    url: `https://yourdomain.com/dsr/default`,
  };

  // Set data based on `id`
  if (id === "") {
    pageData = {
      title: "Page 1 Title",
      description: "Description for Page 1.",
      image: "https://res.cloudinary.com/dhkh3mqcu/image/upload/v1731423946/revspirelogo1_vmwriv.svg",
      url: `https://test-beta-tawny-81.vercel.app/content/123`,
    };
  } else if (id === "ITV198697151801") {
    pageData = {
      title: "Page 2 Title",
      description: "Description for Page 2.",
      image: "https://res.cloudinary.com/dhkh3mqcu/image/upload/v1731423946/revspirelogo1_vmwriv.svg",
      url: `https://test-beta-tawny-81.vercel.app/content/456`,
    };
  }

  return (
    <div>
      <Helmet>
        <title>{pageData.title}</title>
        <meta property="og:title" content={pageData.title} />
        <meta property="og:description" content={pageData.description} />
        <meta property="og:image" content={pageData.image} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content={pageData.url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1>{pageData.title}</h1>
      <p>{pageData.description}</p>
    </div>
  );
};

export default Page;