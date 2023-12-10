import MainHeader from "./components/MainHeader"
import MainSlider from "./components/MainSlider"
import LatestBlogs from "./components/LatestBlogs"
import Community from "./components/Community"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <div>
      <MainHeader activeTab="home"/>
      <MainSlider/>
      <LatestBlogs/>
      <Community/>
      <Footer/>
    </div>
  )
}
