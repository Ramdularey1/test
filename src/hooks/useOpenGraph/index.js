// import { useEffect } from "react"

// const usePage = ({
//     title,
//     description,
//     keywords = [],
//     ogTitle,
//     ogDescription,
//     ogImage,
//     ogUrl
//  }) => {

//     useEffect(() => {
//       document.title = title

//       setMetaTag('name', 'description', description)
//       setMetaTag('name', 'keywords', keywords)
//       setMetaTag('property', 'og:title', ogTitle || title)
//       setMetaTag('property', 'og:description', ogDescription || description)
//       setMetaTag('property', 'og:image', ogImage)
//       setMetaTag('property', 'og:url', ogUrl || window.location.href)
      
    

//     },[title,
//         description,
//         keywords,
//         ogTitle,
//         ogDescription,
//         ogImage,
//         ogUrl ])

//         const setMetaTag = (attr, key, content) => {
//             if(content){
//                 let element = document.querySelector(`meta[${attr}="${key}"]`)
//                 if(!element){
//                     element = document.createElement('meta')
//                     element.setAttribute(attr, key)
//                     document.head.appendChild(element);
//                 }
//                 element.setAttribute('content', content)
//             }

//         }

// }

// export default usePage





import { useEffect } from "react"

const usePage = ({
    title,
    description,
    keywords = [],
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl
 }) => {

    useEffect(() => {
      document.title = title

      setMetaTag('name', 'description', description)
      setMetaTag('name', 'keywords', keywords.join(', ')) // Join keywords array into a string
      setMetaTag('property', 'og : title', ogTitle || title)
      setMetaTag('property', 'og : description', ogDescription || description)
      setMetaTag('property', 'og : image', ogImage)
      setMetaTag('property', 'og : url', ogUrl || window.location.href)
      
    }, [
      title,
      description,
      keywords,
      ogTitle,
      ogDescription,
      ogImage,
      ogUrl
    ])

    const setMetaTag = (attr, key, content) => {
        if(content){
            let element = document.querySelector(`meta[${attr}="${key}"]`)
            if(!element){
                element = document.createElement('meta')
                element.setAttribute(attr, key)
                document.head.appendChild(element)
            }
            element.setAttribute('content', content)
        }
    }

}

export default usePage
