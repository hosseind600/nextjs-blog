import MainHeader from "../components/MainHeader"
import BlogPosts from "../components/BlogPosts"
import Community from "../components/Community"
import Footer from "../components/Footer"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next Personal Website Demo - Articles',
  description: 'This demo is generated to show a demonstration on Nextjs .',
}
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
