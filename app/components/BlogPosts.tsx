const blogPosts = [
  {
    id:1,
    title:"131 Godot Engine Tricks You’ll WISH You Knew Sooner",
    description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
    date:'May 11, 2023',
    thumbnail:"slides/p1.jpg"
  },
  {
    id:2,
    title:"132 Godot Engine Tricks You’ll WISH You Knew Sooner",
    description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
    date:'May 11, 2023',
    thumbnail:"slides/p1.jpg"
  },
  {
    id:3,
    title:"133 Godot Engine Tricks You’ll WISH You Knew Sooner",
    description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
    date:'May 11, 2023',
    thumbnail:"slides/p1.jpg"
  },
  {
    id:4,
    title:"134 Godot Engine Tricks You’ll WISH You Knew Sooner",
    description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
    date:'May 11, 2023',
    thumbnail:"slides/p1.jpg"
  },
  {
    id:5,
    title:"135 Godot Engine Tricks You’ll WISH You Knew Sooner",
    description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
    date:'May 11, 2023',
    thumbnail:"slides/p1.jpg"
  },
  {
    id:6,
    title:"136 Godot Engine Tricks You’ll WISH You Knew Sooner",
    description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
    date:'May 11, 2023',
    thumbnail:"slides/p1.jpg"
  },
  {
    id:7,
    title:"137 Godot Engine Tricks You’ll WISH You Knew Sooner",
    description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
    date:'May 11, 2023',
    thumbnail:"slides/p1.jpg"
  },
  {
    id:8,
    title:"138Godot Engine Tricks You’ll WISH You Knew Sooner",
    description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
    date:'May 11, 2023',
    thumbnail:"slides/p1.jpg"
  },
]

export default function BlogPosts() {
    return (
      <div className="px-2  lg:px-20 md:px-10 sm:px-5 bg-gray-800 py-16 relative">
          <svg fill="#0c111770" className="bgsvg h-[230px] z-0 absolute w-full top-0 left-0" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  aria-hidden="true"><path d="M0 100s969.9-9.9 1000-40v40H0z"></path><path d="M0 100S909.5 90.5 1000 0v100H0z" opacity=".5"></path><path d="M0 100s940-10 1000-70v70H0z" opacity=".3"></path></svg>
          <h2 className="text-center mt-20 relative text-white z-10 text-[40px] font-bold uppercase">Blog Posts</h2>
          <span className="uppercase relative lead z-10 text-sm font-bold text-center mb-10 block">Tutorials about Webdev & Gamedev</span>
          <div className="grid relative grid-cols-1 z-10 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {blogPosts.map(function(item,index){
              return ( <div className="bg-gray-700 rounded-lg shadow-md relative overflow-hidden pb-3">
              <a href={"/posts/"+item.id}><img src={item.thumbnail} alt={item.title} className="aspect-sqaure postimg mb-3 object-cover  w-full" /></a>
              <span className="uppercase text-gray-300 ml-3 mb-3">{item.date}</span>
              <a href={"/posts/"+item.id}><h2 className="text-white ml-3 mb-3 font-bold text-lg mr-3">{item.title}</h2></a>
              <p className="text-gray-200 ml-3 mb-3 text-sm text-justify mr-3">{item.description}</p>
              <a href={'/posts/'+item.id} className="bg-gray-800 rounded-full py-1 px-4 text-sm text-white mt-3 ml-3 cr">Continue Reading...</a>
            </div>)
            })}


 
          </div>
          <div className="flex flex-row items-center py-3 justify-between mt-10" >
            <a href="#" className="text-white text-sm font-bold">« Prev Page</a>
            <a href="#" className="text-white text-sm font-bold">Next Page »</a>
          </div>
      </div>
    )
  }
  