import Image from "next/image";
import './About.css';
import Link from "next/link";

export default function About() {

   return (
      <>
         <div className="container-1">
            <h1 className="heading-6">Who We Are</h1>
            <p className="Experieced">Experienced Professionals</p>
         </div>
         <div className="card">
            <div className="row">
               <div className="col">
                  <Image
                     className="images-1"
                     src="/mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.png"
                     alt="Next.js Image"
                     width={620}
                     height={517}
                     priority
                  />
               </div>
               <div className="col">
                  <h2 className="headign-5">From Kitchen to Table: Our Story</h2>
                  <hr className="hr-2"/>
                  <p className="text">
                     Welcome to VS Foodie Corner, a place where culinary creativity meets <br />
                     satisfaction. Our menu reflects our love for food, featuring a variety of <br />
                     dishes from different cuisines. We use only the freshest ingredients to <br />
                     create flavorful, mouth-watering dishes that will tantalize your taste <br />
                     buds. Our chefs are skilled and dedicated, using their expertise to <br />
                     create delicious meals that will leave you wanting more.
                  </p>
                  <p className="text">
                     We are proud to say we started the brand in the year 2022 and in such <br />
                     a short span we have managed to open 3 active franchisee outlets all <br />
                     over India, we are at present in communication with 5 more franchises <br />
                     and many franchisee queries are been received. Our aim is to open <br />
                     around 20 company own and franchise outlets by end of the year <br />
                     2023. Our very economical capex and affordable franchise model make it <br />
                     very much possible to attain this growth in just a short span of time. <br />
                     This expansion allows us to bring our unique dining experience to even <br />
                     more customers across the country.
                  </p>
                  <p className="text">
                     Whether you're looking for a quick bite to eat during your lunch break, <br />
                     a romantic dinner for two, or a place to host a special event, VS Foodie <br />
                     Corner is a perfect choice. We look forward to serving you soon!
                  </p>
               </div>
            </div>
         </div>
         <h3>Why VS Foodie Corner</h3>
         <hr className="hr-3"/>
         <p className="text-2">
            Under The Hashtag Bhealthy. The Restaurant Adds Its Own Desi Touch To The Cuisines Of The World In Fast Food <br />
            Style We Aim To Provide Our Customers An Experience Of A Life Time . Our Menu Boasts Of Cuisines Fast foods, <br />
            Chinese, Burmese , Thai , Malaysian, Burgers, Pizzas Etc.<br />

            The Concept Of Modifying And Giving A Desi Touch To The Food And to Make People Fall In Love With The Taste Of <br />
            ItAs We All Know We Indians Believe In Adding More Spices To Make Food More Tasty And Spice full And The Name <br />
            “V's Multi Fast Food Corner Comes From The Modification Of Real Taste Of Dish To The New Form Of it. V's Never <br />
            Fails With The Innovation On cuisines Also Keeping this In The Mind About The Taste Buds Of Indian People <br />
            Because We Are Here To Serve Our People Best And As Per Their Likes The Taste Is To Make Their Soul Happy with <br />
            Our Cuisines
         </p>
         <div className="container-2">
            <div className="row">
               <div className="col">
                  <div className="card-2">
                     <h1 className="Mission">Mission</h1>
                     <p className="text-3">
                        Our mission is to offer a diverse and flavorful dining <br />
                        experience to our guests. We believe in serving a variety of <br />
                        cuisines from different cultures and regions, providing our <br />
                        customers with an extensive menu to choose from. Our <br />
                        focus is on using fresh, high-quality ingredients to create <br />
                        dishes that are both delicious and authentic. We are <br />
                        committed to providing excellent service in a welcoming <br />
                        and comfortable atmosphere, ensuring every visit to our <br />
                        restaurant is enjoyable and memorable. Our goal is to bring <br />
                        a taste of the world to our community and provide a <br />
                        dining experience that exceeds expectations.
                     </p>
                  </div>
               </div>
               <div className="col-2">
               <div className="card-2">
                     <h1 className="Vision">Vision</h1>
                     <p className="text-3">
                        Our mission is to offer a diverse and flavorful dining <br />
                        experience to our guests. We believe in serving a variety of <br />
                        cuisines from different cultures and regions, providing our <br />
                        customers with an extensive menu to choose from. Our <br />
                        focus is on using fresh, high-quality ingredients to create <br />
                        dishes that are both delicious and authentic. We are <br />
                        committed to providing excellent service in a welcoming <br />
                        and comfortable atmosphere, ensuring every visit to our <br />
                        restaurant is enjoyable and memorable. Our goal is to bring <br />
                        a taste of the world to our community and provide a <br />
                        dining experience that exceeds expectations.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-3">
            <div className="row">
               <div className="card-3">
               <Image
                     className="images-2"
                     src="/Vector (1).png"
                     alt="Next.js Image"
                     width={50}
                     height={71}
                     priority
                  />
                  <h3 className="heading-3">BEST CHEFS</h3>
                  <p className="text-4">
                     Experience the art of cooking with our <br/> 
                     skilled chefs.
                  </p>                 
               </div>
               <div className="card-3">
               <Image
                     className="images-2"
                     src="/Vector (2).png"
                     alt="Next.js Image"
                     width={40}
                     height={71}
                     priority
                  />
                  <h3 className="heading-3">EXOTIC FLAVORS</h3>
                  <p className="text-4">
                  Embark on a culinary adventure and <br/> 
                  discover the true essence of exotic <br/> 
                  flavors.
                  </p>
               </div>
               <div className="card-3">
               <Image
                     className="images-2"
                     src="/Vector (3).png"
                     alt="Next.js Image"
                     width={40}
                     height={71}
                     priority
                  />
                  <h3 className="heading-3">BEVERAGES</h3>
                  <p className="text-4">
                  Where every sip of our signature <br/> 
                  beverages is a taste sensation.
                  </p>
               </div>
            </div>
         </div>
         <div className="container-4">
            <h1 className="headign-1">A TASTE YOU'LL REMEMBER</h1>
            <p className="text-5">
               VS Foodie Corner exceeded my expectations. The atmosphere was cozy and <br/> 
               inviting, and the staff was friendly and attentive. The food was some of the best <br/> 
               I've ever had.
            </p>
            <div className="imagespage">
                <Image
                    className="imagespage"
                    src="/Ellipse 5 (1).png"
                    alt="Next.js Image"
                    width={150}
                    height={40}
                    priority
                />
                <h2 className="heading-2">VIDHI MEVAWALA</h2>
            </div>
         </div>
         <div className="card-5">
            <div className="row">
               <Image
                  className="images-8"
                  src="/Group 415.png"
                  alt="Next.js Image"
                  width={66}
                  height={66}
                  priority
               />
               <div className="col-4">
                  <h3 className="headign-4">We Are Here To Give Better Quality Food</h3>
                  <p className="text-6">
                     Satisfy your cravings for deliciousness at VS Foodie Corner - Where every <br />
                     dish is an exquisite skillful creation.
                  </p>
               </div>
               <Link href="/Contact">
                  <button className="contact">contact us</button>
               </Link>
            </div>
         </div>
      </>
   );
}