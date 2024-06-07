import Image from "next/image";
import Link from "next/link";
import './Navber.css';

export default function Navber() {

   return (
      <nav class="navbar navbar-expand-lg ">
         <div class="container-fluid">
            <Link class="navbar-brand" href="#">
               <Image
                  className="images"
                  src="/Asset.png"
                  alt="Next.js Image"
                  width={116}
                  height={85}
                  priority
               />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
               aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                     <Link class="nav-link " aria-current="page" href="/">HOME</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/About">ABOUT US</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/Locations">OUR LOCATIONS</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/Gallery">GALLERY</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/Founder">FOUNDER DESK</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/Franchise">FRANCHISE</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" href="/Contact">CONTACT US</Link>
                  </li>
                  <div class="icon">
              <Link href="https://www.facebook.com/">
              <Image
                  className="images-9"
                  src="/Vector (5).png"
                  alt="Next.js Image"
                  width={11}
                  height={22}
                  priority
               />
              </Link>
              <Link href="https://twitter.com/">
              <Image
                  className="images-9"
                  src="/Vector (6).png"
                  alt="Next.js Image"
                  width={22}
                  height={15}
                  priority
               />
              </Link>
              <Link href="https://www.instagram.com/">
              <Image
                  className="images-9"
                  src="/Group 481.png"
                  alt="Next.js Image"
                  width={22}
                  height={15}
                  priority
               />
              </Link>
                  </div>
               </ul>
            </div>
         </div>
      </nav>
   );
}