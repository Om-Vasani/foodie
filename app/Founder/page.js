import Image from "next/image";
import './Founder.css'
import Link from "next/link";

export default function Founder() {

   return (

      <>
         <div className="container-1">
            <h1>
               Founder Desk
            </h1>
            <div className="card">
               <div className="row">
                  <div className="col">
                     <h2>Passion & Commitment</h2>
                     <p>
                        First Outlet Of V's Foodie Corner - Surat (Gujarat)<br />
                        Owns - V's Foodie Corner, Chalu Chinese, Chalu Momo, Chalu Multi Cuisine <br />
                        In Total 40+ Restaurants Across Pan- India
                     </p>
                     <p>
                        Vibhanshu'S Aim Is To Provide His Customers with An Experience Of A <br />
                        Life Time. He Says That The Most And Foremost Important Thing For Him <br />
                        Is To Provide Good Customer Service.
                        He Treats Customers In A Friendly Manner, Attends To Their Needs <br />
                        Promptly, And Ensure They Get Exactly What They Ordered In A Timely <br />
                        Fashion.

                        According To Him The Type Of Food, Quality Of Ingredients, And Meal <br />
                        Presentation Are All Equally Important Before He Serves To The Customer. <br />
                        To Make Them Happy Is His First Job.
                     </p>
                     <p>
                        “A Happy Customer Is One Whose Problem Was Solved Quickly And Satisfactorily.” - <br />
                        Vibhanshu
                     </p>
                  </div>
                  <div className="col-2">
                     <Image
                        className="images-6"
                        src="/Group 485.png"
                        alt="Next.js Image"
                        width={435}
                        height={545}
                        priority
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="Team">
            <div className="card">
               <div className="row">
                  <div className="col">
                     <h1 className="headign-1">- TEAM -</h1>
                     <h2 className="headign-2">Our Members</h2>
                  </div>
                  <div className="col">
                     <p>
                        At VS Foodie Corner, we are more than just a team - we are a family. Our <br />
                        dedicated and passionate staff members are the heart and soul of our <br />
                        restaurant. From our skilled chefs who create mouth-watering dishes, to our <br />
                        friendly servers who provide exceptional service, We ensure that your dining <br />
                        experience is unforgettable.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="card-2">
                  <Image
                     className="images-7"
                     src="/team-1.png"
                     alt="Next.js Image"
                     width={275}
                     height={305}
                     priority
                  />
                  <h3>Anna Smith</h3>
                  <p className="card-text-2">
                     Totam rem aperiam. Et iusto odio <br />
                     digniss ducimus qui blandi <br />
                     praesentium voluptatum deleniti <br />
                     atque. Neque porro quisquam est, <br />
                     qui dolorem ipsum quia dolor sit <br />
                     amet, consectetur.
                  </p>
               </div>
               <div className="card-2">
                  <Image
                     className="images-7"
                     src="/team-1 (1).png"
                     alt="Next.js Image"
                     width={275}
                     height={305}
                     priority
                  />
                  <h3>Michel Carter</h3>
                  <p className="card-text-2">
                     Totam rem aperiam. Et iusto odio <br />
                     digniss ducimus qui blandi <br />
                     praesentium voluptatum deleniti <br />
                     atque. Neque porro quisquam est, <br />
                     qui dolorem ipsum quia dolor sit <br />
                     amet, consectetur.
                  </p>
               </div>
               <div className="card-2">
                  <Image
                     className="images-7"
                     src="/team-1 (2).png"
                     alt="Next.js Image"
                     width={275}
                     height={305}
                     priority
                  />
                  <h3>Sara Burton</h3>
                  <p className="card-text-2">
                     Totam rem aperiam. Et iusto odio <br />
                     digniss ducimus qui blandi <br />
                     praesentium voluptatum deleniti <br />
                     atque. Neque porro quisquam est, <br />
                     qui dolorem ipsum quia dolor sit <br />
                     amet, consectetur.
                  </p>
               </div>
               <div className="card-2">
                  <Image
                     className="images-7"
                     src="/team-1 (3).png"
                     alt="Next.js Image"
                     width={277}
                     height={290}
                     priority
                  />
                  <h3>Tyler Hart</h3>
                  <p className="card-text-2">
                     Totam rem aperiam. Et iusto odio <br />
                     digniss ducimus qui blandi <br />
                     praesentium voluptatum deleniti <br />
                     atque. Neque porro quisquam est, <br />
                     qui dolorem ipsum quia dolor sit <br />
                     amet, consectetur.
                  </p>
               </div>
            </div>
         </div>
         <div className="card-3">
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
                  <h3 className="headign-3">We Are Here To Give Better Quality Food</h3>
                  <p className="text-2">
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