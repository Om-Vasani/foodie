import Image from "next/image";
import './Locations.css'

export default function Locations() {

   return (
      <>
         <div className="container-1">
            <h1>Our Locations</h1>
            <p>Find Us Out</p>
         </div>
         <div className="container-2">
            <h2>Locations of Restaurants All Over The India</h2>
            <hr className="hr-1"/>
            <div className="row">
               <div className="cardpage">
                  <Image
                  className="images-2"
                  src="/vector.png"
                  alt="Next.js Image"
                  width={32}
                  height={41}
                  priority
               />
               <h3>Jharkhand</h3>
               <p className="card-text">
                  58 Ralph Ave<br/>
                  New York,<br/>
                  New York 1111
               </p>
               </div>
               <div className="cardpage">
                  <Image
                  className="images-2"
                  src="/vector.png"
                  alt="Next.js Image"
                  width={32}
                  height={41}
                  priority
               />
               <h3>Vadodara</h3>
               <p className="card-text">
                  58 Ralph Ave<br/>
                  New York,<br/>
                  New York 1111
               </p>
               </div>
               <div className="cardpage">
                  <Image
                  className="images-2"
                  src="/vector.png"
                  alt="Next.js Image"
                  width={32}
                  height={41}
                  priority
               />
               <h3>Bhopal</h3>
               <p className="card-text">
                  58 Ralph Ave<br/>
                  New York,<br/>
                  New York 1111
               </p>
               </div>

            </div>
            <h2 className="headign-2">Upcoming</h2>
            <div className="row">
               <div className="cardpage-2">
                  <Image
                  className="images-2"
                  src="/vector.png"
                  alt="Next.js Image"
                  width={32}
                  height={41}
                  priority
               />
               <h3 className="heading-3">Indore</h3>
               <p className="card-text-2">
                  58 Ralph Ave<br/>
                  New York,<br/>
                  New York 1111
               </p>
               </div>
               <div className="cardpage-2">
                  <Image
                  className="images-2"
                  src="/vector.png"
                  alt="Next.js Image"
                  width={32}
                  height={41}
                  priority
               />
               <h3 className="heading-3">Bengaluru</h3>
               <p className="card-text-2">
                  58 Ralph Ave<br/>
                  New York,<br/>
                  New York 1111
               </p>
               </div>
               <div className="cardpage-2">
                  <Image
                  className="images-2"
                  src="/vector.png"
                  alt="Next.js Image"
                  width={32}
                  height={41}
                  priority
               />
               <h3 className="heading-3">Chennai</h3>
               <p className="card-text-2">
                  58 Ralph Ave<br/>
                  New York,<br/>
                  New York 1111
               </p>
               </div>
               <div className="cardpage-2">
                  <Image
                  className="images-2"
                  src="/vector.png"
                  alt="Next.js Image"
                  width={32}
                  height={41}
                  priority
               />
               <h3 className="heading-3">Jamshedpur</h3>
               <p className="card-text-2">
                  58 Ralph Ave<br/>
                  New York,<br/>
                  New York 1111
               </p>
               </div>
               <div className="cardpage-2">
                  <Image
                  className="images-2"
                  src="/vector.png"
                  alt="Next.js Image"
                  width={32}
                  height={41}
                  priority
               />
               <h3 className="heading-3">Patna</h3>
               <p className="card-text-2">
                  58 Ralph Ave<br/>
                  New York,<br/>
                  New York 1111
               </p>
               </div>
            </div>
         </div>
         <div>
            <iframe className="Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766738.48171446!2d60.9691763862997!3d19.725163578221917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1716283858900!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </>
   );
}