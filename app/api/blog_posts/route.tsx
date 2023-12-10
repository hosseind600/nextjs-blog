function requestHandler(_request: Request): Response {

  let page = _request.nextUrl.searchParams.get("p") ? _request.nextUrl.searchParams.get("p") : 1

  const blogPosts = {
    data:[{
      id:1,
      title:"1231 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p1.jpg"
    },
    {
      id:2,
      title:"1232 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p3.jpg"
    },
    {
      id:3,
      title:"1232 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p1.jpg"
    },
    {
      id:4,
      title:"1 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p2.jpg"
    },
    {
      id:5,
      title:"12325 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p4.jpg"
    },
    {
      id:6,
      title:"12326 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p3.jpg"
    },
    {
      id:7,
      title:"12327 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p2.jpg"
    },
    {
      id:8,
      title:"12328Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p4.jpg"
    },
    {
      id:9,
      title:"12328Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p1.jpg"
    },
    ]
  }
  

  const blogPosts2 = {
    data:[{
      id:1,
      title:"2321 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p1.jpg"
    },
    {
      id:2,
      title:"2322 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p3.jpg"
    },
    {
      id:3,
      title:"232 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p1.jpg"
    },
    {
      id:4,
      title:"2324 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p2.jpg"
    },
    {
      id:5,
      title:"2325 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p4.jpg"
    },
    {
      id:6,
      title:"2326 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p3.jpg"
    },
    {
      id:7,
      title:"2327 Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p2.jpg"
    },
    {
      id:8,
      title:"2328Godot Engine Tricks You’ll WISH You Knew Sooner",
      description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
      date:'May 11, 2023',
      thumbnail:"slides/p4.jpg"
    },
    ]
  }

  if(page==1) return Response.json( blogPosts );
  else return Response.json( blogPosts2);
}
 

export { requestHandler as GET };