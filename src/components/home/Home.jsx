import { Trending } from "./trending/Trending";
import { Carousel } from "./carousel/Carousel"

//TODO: MainLayout
export const Home = () => {
  return (
      <>
      <Carousel ></Carousel>
      <Trending ></Trending>
      </>
  );
};