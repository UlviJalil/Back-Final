import Header from "./featured/Header/header"
import Swiper from "./components/Swiper"
import NewCollection from "./components/NewCollection";
import Category from "./components/Category";
import Trendy from "./components/Trendy"

export default function Home() {
  return (
    <>
      <Header />
      <Swiper />
      <NewCollection />
      <Category />
      <Trendy />
    </>
  );
}
