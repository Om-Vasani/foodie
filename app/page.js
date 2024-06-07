import Image from "next/image";
import './Home.css'
import Link from "next/link";

export default function Home() {
  return (
    <>
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
              <Link href="">
              <Image
                  className="images-9"
                  src="/Vector (5).png"
                  alt="Next.js Image"
                  width={11}
                  height={22}
                  priority
               />
              </Link>
              <Link href="">
              <Image
                  className="images-9"
                  src="/Vector (6).png"
                  alt="Next.js Image"
                  width={22}
                  height={15}
                  priority
               />
              </Link>
              <Link href="">
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
      <div className="container-1">
              
      </div>
      <div className="container-2">
        <div className="row">
          <div className="imagespage">
            <Image
              className="images-2"
              src="/mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1 (1).png"
              alt="Next.js Image"
              width={150}
              height={40}
              priority
            />
          </div>
          <div className="card">
            <h1>Enjoy an Exceptional <br /> Journey of Taste</h1>
            <p>
              Are you ready for an exceptional journey of taste? Look <br /> no further than us, where we take pride in offering a <br /> truly authentic dining experience.
            </p>
            <hr />
            <Link href="/About">
              <button className="About">About Us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-3">
        <h2>Dine with Peace of Mind at Our Restaurant</h2>
        <hr className="hr-1" />
        <div className="row">
          <div className="card-2">
            <Image
              className="images-3"
              src="/Group 384.png"
              alt="Next.js Image"
              width={50}
              height={40}
              priority
            />
            <h3>Cleanliness & Hygiene</h3>
            <p className="text">
              Dine in a spotless and sanitized <br />
              environment, where cleanliness is <br />
              our top priority.
            </p>
            <Image
              className="images-4"
              src="/Rectangle 117.png"
              alt="Next.js Image"
              width={200}
              height={100}
              priority
            />
          </div>
          <div className="card-2">
            <Image
              className="images-3"
              src="/Group 385.png"
              alt="Next.js Image"
              width={50}
              height={40}
              priority
            />
            <h3>Skilled Chefs</h3>
            <p className="text">
              Savor the flavors of perfectly <br />
              prepared dishes by our skilled <br />
              chefs.
            </p>
            <Image
              className="images-4"
              src="/Rectangle 118.png"
              alt="Next.js Image"
              width={200}
              height={100}
              priority
            />
          </div>
          <div className="card-2">
            <Image
              className="images-3"
              src="/Group 386.png"
              alt="Next.js Image"
              width={50}
              height={40}
              priority
            />
            <h3>Fresh Ingredients</h3>
            <p className="text">
              Our commitment to using fresh <br />
              ingredients is what sets our <br />
              restaurant apart.
            </p>
            <Image
              className="images-4"
              src="/Rectangle 119.png"
              alt="Next.js Image"
              width={200}
              height={100}
              priority
            />
          </div>
        </div>
      </div>
      <div className="container-4">
        <h6>- COME AND SEE -</h6>
        <h1 className="headign-1">We create delicious experiences</h1>
        <Link href="/Contact">
          <button className="Contact">Contact Us</button>
        </Link>
      </div>
      <div className="container-5">
      <h2 className="headign-2">BEST FOR</h2>
      <div className="row">
        <div className="card-3">
          <Image
            className="images-6"
            src="/Group 11.png"
            alt="Next.js Image"
            width={240}
            height={240}
            priority
          />
          <h3 className="heading-3">BIRTHDAYS </h3>
          <p className="text-4">
            At our restaurant, we go above <br />
            and beyond to make your <br />
            birthday celebration special, <br />
            from decorating the venue to <br />
            creating customized menus.
          </p>
        </div>
        <div className="card-3">
          <Image
            className="images-6"
            src="/Group 13.png"
            alt="Next.js Image"
            width={240}
            height={240}
            priority
          />
          <h3 className="heading-3">MEETINGS</h3>
          <p className="text-4">
            We are an ideal venue for your <br />
            next corporate meeting, with <br />
            state-of-the-art facilities and <br />
            professional services.
          </p>
        </div>
        <div className="card-3">
          <Image
            className="images-6"
            src="/Group 12.png"
            alt="Next.js Image"
            width={240}
            height={240}
            priority
          />
          <h3 className="heading-3">PARTY</h3>
          <p className="text-4">
            From intimate gatherings to <br />
            grand celebrations, our <br />
            restaurant's ambiance, food, and <br />
            drink will elevate your party.
          </p>
        </div>
      </div>
      </div>
      <div className="container-6">
        <h6>- NOW BOOKING -</h6>
        <h1 className="headign-1">Private Dinners & Happy Hours</h1>
      </div>
      <div className="container-7">
        <h1 className="headign-4">A TASTE YOU'LL REMEMBER</h1>
        <p className="text-5">
          VS Foodie Corner exceeded my expectations. The atmosphere was cozy and <br />
          inviting, and the staff was friendly and attentive. The food was some of the best <br />
          I've ever had.
        </p>
        <div className="imagespages">
          <Image
            className="imagespages"
            src="/Ellipse 5 (1).png"
            alt="Next.js Image"
            width={150}
            height={40}
            priority
          />
          <h2 className="heading-5">VIDHI MEVAWALA</h2>
        </div>
      </div>
      <h1 class="heading-6">We are always here to serve you.</h1>
      <div class="numbers-grid">
        <p class="p5"><samp className="numbers">980+</samp><br />Satified Customers</p>
        <p class="p5"><samp className="numbers">210+</samp><br />Delicious Dishes</p>
        <p class="p5"><samp className="numbers">7k+</samp><br />Food Delivered</p>
      </div>
      <footer class="site-footer">
         <div class="container-8">
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
                  <h6 className="heding-9">ADDRESS</h6>
                  <p className="text-7">58 Ralph Ave <br/> New York, New York 1111</p>
                  <p className="text-7">P: +1 800 000 111 <br/> E: contact@example.com</p>
               </div>
               <div class="col-lg-3 col-md-4 col-sm-12">
                  <h6 className="heding-9">QUICK LINKS</h6>
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
                  <h6 className="heding-9">OPEN HOURS</h6>
                  <p className="text-7">Monday - Sunday <br/> Lunch: 12PM - 2PM <br/> Dinner: 6PM - 10PM</p>
                  <p className="text-7">Happy Hours: 4PM - 6PM</p>
               </div>
            </div>
         </div>
      </footer>
    </>
  );
}
