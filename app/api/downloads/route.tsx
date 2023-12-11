function requestHandler(_request: Request): Response {

  const blogPosts = {
    data:[{
      id:1,
      title:"DirectionalLight3D Demo Project",
      date:'May 11, 2023',
      thumbnail:"slides/sh1.png",
      price:"FREE"
    },
    {
      id:2,
      title:"GameDev Survivors",
      date:'May 11, 2023',
      thumbnail:"slides/sh2.jpg",
      price:"FREE"
    },
    {
      id:3,
      title:"GodotSky",
      date:'May 11, 2023',
      thumbnail:"slides/p1.jpg",
      price:"FREE"
    },
    {
      id:4,
      title:"Infinite Ocean",
      date:'May 11, 2023',
      thumbnail:"slides/p2.jpg",
      price:"FREE"
    },
    {
      id:5,
      title:"Stylized Grass Mesh",
      date:'May 11, 2023',
      thumbnail:"slides/p4.jpg",
      price:"FREE"
    },
    {
      id:6,
      title:"Stylized Grass Shader",
      date:'May 11, 2023',
      thumbnail:"slides/p3.jpg",
      price:"FREE"
    },
    {
      id:7,
      title:"Water Shader",
      date:'May 11, 2023',
      thumbnail:"slides/p2.jpg",
      price:"FREE"
    }
    ]
  }
  



   return Response.json( blogPosts );
}
 

export { requestHandler as GET };