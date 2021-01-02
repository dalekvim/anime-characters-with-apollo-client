import { gql } from "@apollo/client";

export const CHARACTERS = gql`
  query($page: Int, $perPage: Int) {
    Media(type: ANIME) {
      id
      characters(page: $page, perPage: $perPage) {
        edges {
          node {
            id
            name {
              full
            }
          }
        }
        pageInfo {
          lastPage
        }
      }
    }
  }
`;

export const CHARACTER = gql`
  query($id: Int) {
    Character(id: $id) {
      image {
        large
      }
      name {
        full
        native
      }
      description(asHtml: true)
    }
  }
`;
