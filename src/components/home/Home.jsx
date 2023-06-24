import { Trending } from "./trending/Trending";
import { Layout } from "./layouts/Layout";
import { Carousel } from "./carousel/Carousel"

//TODO: MainLayout
export const Home = () => {
  return (
    <Layout>
      <Carousel />
      <Trending />
    </Layout>
  );
};