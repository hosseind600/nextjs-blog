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
function requestHandler(_request: Request): Response {
  
  return Response.json({ ...blogPosts });
}

export { requestHandler as GET };