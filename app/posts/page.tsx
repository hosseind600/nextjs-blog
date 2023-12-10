import MainHeader from "../components/MainHeader"
import BlogPosts from "../components/BlogPosts"
import Community from "../components/Community"
import Footer from "../components/Footer"
export default function Posts() {
  return (
    <div>
      <MainHeader activeTab="articles"/>
      <BlogPosts/>
      <Community/>
      <Footer/>
    </div>
  )
}