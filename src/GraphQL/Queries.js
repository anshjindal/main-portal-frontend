import { gql } from "@apollo/client";

export const SliderHome = gql`
  query Sliderhome {
    page(idType: URI, id: "slider-home") {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;
