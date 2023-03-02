import { useQuery } from "graphql-hooks";
import { StoryblokComponent } from "@storyblok/react";
import { initializeGraphQL } from "/lib/graphql-client";
import graphQLRequest from "/lib/graphql-request";

const HOMEPAGE_QUERY = `
  {
    PageItem(id: "home") {
      id
      slug
      content {
        _uid
        component
        content
      }
    }
  }
`;

const Index = () => {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY);
  let story = data?.PageItem;

  if (error) return <div>Error loading</div>;
  if (loading) return <div>Loading</div>;

  return (
    <main>
      {story.content?.content?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export const getStaticProps = async () => {
  const client = initializeGraphQL();

  await graphQLRequest(client, HOMEPAGE_QUERY);

  return {
    props: {
      initialGraphQLState: client.cache.getInitialState(),
    },
    revalidate: 1,
  };
};

export default Index;
