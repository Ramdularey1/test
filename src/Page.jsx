import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const Page = () => {
  const { id } = useParams();  // Get dynamic `id` from URL

  let pageData = {
    title: "Default Title",
    description: "Default description.",
    image: "https://res.cloudinary.com/dhkh3mqcu/image/upload/v1731423946/revspirelogo1_vmwriv.svg",
    url: `https://test-beta-tawny-81.vercel.app/content/123`,
  };

  // Set data based on `id`
  if (id === "123") {
    pageData = {
      title: "Page 1 Title",
      description: "Description for Page 1.",
      image: "https://res.cloudinary.com/dhkh3mqcu/image/upload/v1731423946/revspirelogo1_vmwriv.svg",
      url: `https://test-beta-tawny-81.vercel.app/content/123`,
    };
  } else if (id === "456") {
    pageData = {
      title: "Page 2 Title",
      description: "Description for Page 2.",
      image: "https://res.cloudinary.com/dhkh3mqcu/image/upload/v1731423946/revspirelogo1_vmwriv.svg",
      url: `https://test-beta-tawny-81.vercel.app/content/456`,
    };
  }

  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
};

export default Page;
