import Image from "next/image";
import Link from "next/link";
import './Footer.css'

export default function Footer() {

   return (

      <footer class="site-footer">
         <div class="container-7">
            <div class="row-2">
               <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="footer-content">
                     <Image
                        className="images-5"
                        src="/Asset.png"
                        alt="Next.js Image"
                        width={150}
                        height={40}
                        priority
                     />
                     <p class="text-justify page">Satisfy your cravings for <br/> deliciousness at VS Foodie Corner <br/> - Where every dish is an exquisite <br/> skillful creation.</p>
                  </div>
               </div>
               <div class="col-lg-3 col-md-4 col-sm-12">
                  <h6 className="headign-6">ADDRESS</h6>
                  <p className="text-3">58 Ralph Ave <br/> New York, New York 1111</p>
                  <p className="text-3">P: +1 800 000 111 <br/> E: contact@example.com</p>
               </div>
               <div class="col-lg-3 col-md-4 col-sm-12">
                  <h6 className="headign-6">QUICK LINKS</h6>
                  <ul class="footer-links">
                     <li><Link href="/">Home</Link></li>
                     <li><Link href="/About">About</Link></li>
                     <li><Link href="/Locations">Locations</Link></li>
                     <li><Link href="/Gallery">Gallery</Link></li>
                     <li><Link href="/Founder">Founder</Link></li>
                     <li><Link href="/Franchise">Franchise</Link></li>
                     <li><Link href="/Contact">Contact</Link></li>
                  </ul>
               </div>
               <div class="col-lg-3 col-md-4 col-sm-12">
                  <h6 className="headign-6">OPEN HOURS</h6>
                  <p className="text-3">Monday - Sunday <br/> Lunch: 12PM - 2PM <br/> Dinner: 6PM - 10PM</p>
                  <p className="text-3">Happy Hours: 4PM - 6PM</p>
               </div>
            </div>
         </div>
      </footer>
   );
}