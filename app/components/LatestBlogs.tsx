async function getData() {

  let data = await fetch(process.env.SITE_URL +"/api/blog_posts?p=1");
 
  if (data.ok) { 
    let json = await data.json();
    return json.data;
  } 
 
} 
export default async function LatestBlogs() {
  const blogPosts = await getData()

    return (
      <div  className="px-2  lg:px-20 md:px-10 sm:px-5 bg-gray-800 py-16 relative">
          <svg fill="#0c111770" className="bgsvg h-[230px] z-0 absolute w-full top-0 left-0" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  aria-hidden="true"><path d="M0 100s969.9-9.9 1000-40v40H0z"></path><path d="M0 100S909.5 90.5 1000 0v100H0z" opacity=".5"></path><path d="M0 100s940-10 1000-70v70H0z" opacity=".3"></path></svg>
          <h2 className="text-center mt-0 lg:mt-20 relative text-white z-10 text-[28px] lg:text-[40px] font-bold uppercase">Latest Blog Posts</h2>
          <span className="uppercase relative lead z-10 text-sm font-bold text-center mb-10 block">Tutorials about Webdev & Gamedev</span>
          <div className="grid relative grid-cols-1 z-10 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
            
            {blogPosts.map(function(item,index){
              return ( <div key={index} className="bg-gray-700 rounded-lg shadow-md relative overflow-hidden pb-6">
              <a href={"/posts/"+item.id}><img src={item.thumbnail} alt={item.title} className="aspect-sqaure postimg mb-3 object-cover  w-full" /></a>
              <div className="flex flex-col gap-3 p-6 items-start">
                <span className="uppercase text-gray-300 ">{item.date}</span>
                <a href={"/posts/"+item.id}><h2 className="text-white  font-bold text-lg mr-3">{item.title}</h2></a>
                <p className="text-gray-200 text-sm text-justify ">{item.description}</p>
                <a href={'/posts/'+item.id} className="bg-gray-800 rounded-full py-1 px-4 text-sm text-white cr">Continue Reading...</a>
              </div>
            </div>)
            })}


 
          </div>
          <a href="/posts" className="block text-center text-white text-sm uppercase my-10 font-bold" title="View all blog posts">View All</a>
      </div>
    )
  }
  