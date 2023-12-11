import MainHeader from "../components/MainHeader"
import BlogPosts from "../components/BlogPosts"
import Community from "../components/Community"
import Footer from "../components/Footer"
export default function Posts({params,searchParams}) {
  return (
    <div>
      <MainHeader activeTab="articles"/>
      <BlogPosts page={searchParams.p??1}/>
      <Community/>
      <Footer/>
    </div>
  )
}
