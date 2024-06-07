import Image from "next/image";
import "./Gallery.css";
import Link from "next/link";

export default function Gallery(){

   return(

      <>
      
         <h1>Gallery</h1>
         <p className="text">Best Of Us</p>
         <div className="row">
            <p>
               Experience the VS Foodie Corner like never before with our <br/> 
               virtual Gallery tour. As you scroll through the pictures, you'll <br/> 
               be transported to the world of mouthwatering flavors and <br/>  
               the elegant ambiance that defines our restaurant. From <br/> 
               the carefully designed decor to the expertly crafted dishes, <br/> 
               every detail has been thoughtfully put together to create a <br/> 
               memorable dining experience.  
            </p>
            <p>
            Discover our different branches all over India, take a sneak <br/> 
            peek at our menu, and see the memories we've created <br/> 
            hosting special events and parties. Your taste buds will be <br/> 
            tantalized and your senses will be delighted. Get a taste of <br/> 
            the VS Foodie Corner experience before visiting us, we <br/> 
            can't wait to welcome you in person!
            </p>
         </div>
         <div className="container">
            <div className="row">
            <Image
                  className="images-3"
                  src="/g1 1.png"
                  alt="Next.js Image"
                  width={370}
                  height={440}
                  priority
               />
               <Image
                  className="images-3"
                  src="/g1 2.png"
                  alt="Next.js Image"
                  width={370}
                  height={440}
                  priority
               />
               <Image
                  className="images-3"
                  src="/g1 3.png"
                  alt="Next.js Image"
                  width={370}
                  height={440}
                  priority
               />
               <Image
                  className="images-3"
                  src="/g1 4.png"
                  alt="Next.js Image"
                  width={370}
                  height={440}
                  priority
               />
               <Image
                  className="images-3"
                  src="/g1 5.png"
                  alt="Next.js Image"
                  width={370}
                  height={440}
                  priority
               />
               <Image
                  className="images-3"
                  src="/g1 6.png"
                  alt="Next.js Image"
                  width={370}
                  height={440}
                  priority
               />
               <Image
                  className="images-3"
                  src="/g1 7.png"
                  alt="Next.js Image"
                  width={370}
                  height={440}
                  priority
               />
               <Image
                  className="images-3"
                  src="/g1 8.png"
                  alt="Next.js Image"
                  width={370}
                  height={440}
                  priority
               />
               <Image
                  className="images-3"
                  src="/g1 9.png"
                  alt="Next.js Image"
                  width={370}
                  height={440}
                  priority
               />
               <Image
                  className="images-3"
                  src="/g1 10.png"
                  alt="Next.js Image"
                  width={370}
                  height={440}
                  priority
               />
               <Image
                  className="images-3"
                  src="/g1 11.png"
                  alt="Next.js Image"
                  width={370}
                  height={440}
                  priority
               />
               <Image
                  className="images-3"
                  src="/g1 12.png"
                  alt="Next.js Image"
                  width={370}
                  height={440}
                  priority
               />
            </div>
         </div>
         
      </>
   );
}