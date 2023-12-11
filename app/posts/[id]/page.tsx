import MainHeader from "../../components/MainHeader"
import Community from "../../components/Community"
import Footer from "../../components/Footer"
import type { Metadata } from 'next'


function get_post_data(){
  return {
    id:1,
    title:"1231 Godot Engine Tricks You’ll WISH You Knew Sooner",
    description:"When working as a game developer, every tip and trick to save yourself time and make your life easier counts. And I briefly scoured the internets to find some great Godot Engine tricks and bundled them up in a nice quick video for you, so you don’t have to. Here are 12 Godot Engine tricks",
    date:'May 11, 2023',
    thumbnail:"slides/p1.jpg"
  }
}

export const metadata: Metadata = {
  title: 'Next Personal Website Demo - '+ get_post_data().title,
  description: get_post_data().description,
}
export default function SinglePost() {
  return (
    <div>
      <MainHeader activeTab="articles"/>
      <div className="relative">
        <img src="/slides/p4.jpg" alt="post1" className="mt-[80px] w-full h-[500px] object-cover"/>
        <div className="absolute left-8 bottom-8">
            <span className="bg-[#b145ff] h-7 left-7 text-white px-4 sps">GameDev</span>
            <h1 className="text-white text-[70px] font-extrabold spt">13 Godot Engine Tricks You’ll WISH You Knew Sooner</h1>
        
            <div className="flex flex-row items-center">
                <a href="#"><img src="/bhdlogo.png" className="h-[50px] aspect-square mr-3" /></a>
                <div className="flex flex-col">
                    <div className="font-bold text-white">GameDevWorld</div>
                    <div className="text-white">March 30, 2023</div>
                </div>
            </div>
        </div>
      </div>
      <div className="px-2  lg:px-20 md:px-10 sm:px-5 bg-gray-800 py-[80px] relative">
        <div className="posttext text-white leading-7">
            The world of game development is ever-evolving, and with the upcoming release of Godot 4.0, game developers will have even more tools at their disposal to create immersive gaming experiences. One of the most exciting new features in Godot 4.0 is the addition of sky shaders, which allow developers to upgrade their sky backgrounds and have more dynamic control over their sky material.

            In this article, we will explore the benefits of using sky shaders in Godot 4.0, how to set up a sky shader, and the various built-in resources available for creating dynamic, procedural skies.
            <h4>Why Use Sky Shaders in Godot 4.0?</h4>
            Godot 4.0 features five shader types, including spatial, canvasitem, particle, fog, and sky shaders. Each shader is designed for a specific task, and sky shaders have several built-in resources to help make dynamic, procedural skies.

            Unlike standard spatial shaders, sky shaders are designed specifically for the sky background in your world environment node, allowing for more control over the sky material. When you set your light settings in the world environment to use your sky, your scene’s lighting will also reflect the changes made in your sky shader, making it a powerful tool for achieving real-time lighting changes in your scene.
            <h4>Setting Up a Sky Shader in Godot 4.0</h4>
            To set up a sky shader in Godot 4.0, your sky shader will reside in your world environment node, which houses a number of visual settings for your parent scene. From here, you can set your sky setting to a shader material. The material operates like any other shader, but the type here at the top is set to sky, and you don’t have access to the vertex or fragment functions you find in a spatial shader.

            Instead, you have a sky function that will contain your final settings, like color, alpha, and fog. To add color to your blank sky, you can set a basic blue sky by using the color setting and assigning a blue color through a vector.
            <h4>Accessing Built-in Parameters in Sky Shaders</h4>
            The power of sky shaders in Godot 4.0 comes from the built-in parameters that you can access. One of the most useful parameters is the eyedir parameter, which gives the normalized direction of the current pixel, providing detail about the curvature of your sky. The sky itself acts like a dome over your scene, and you can see the values of your eyedir parameter if you plug it into your color.

            You can use the eyedir parameter to create a gradient effect on the horizon, taking the y value to create a nice gradient that you can flip by using a 1minus, a useful technique to flip an alpha value or reverse a gradient. You can also move the gradient by adding or subtracting or expand the gradient with multiplication or power of, say, 2 or 3.

            In addition to light information, you also have access to the UV information of the sky quad. The UVs utilize a special projection method called celestial mapping. Using the sky_coords parameter, you can project a panoramic image onto the UVs of your sky, creating an overlay of clouds on your sky color.

            For more expensive operations, where you use raymarching or other techniques to create a physically accurate atmosphere or clouds, you can also make use of the additional render passes built into the shader to reduce draw time. Using the half-res or quarter-res pass, you can render fewer pixels to achieve similar quality effects at a reduced cost.

            Finally, you also have access to the TIME parameter. With TIME, you can add to the UV position of your texture to slowly, or quickly, rotate the clouds. Like other shaders, you can add uniform variables that can be accessed or manipulated with a script, allowing you to create a global day night system for instance that can control your sky shader and other elements of your game like weather, or other game events simultaneously. Put all these paramters to use and you can come up with a convincing sky.
            </div>
      </div>

      <Community/>
      <Footer/>
    </div>
  )
}
