import Image from "next/image";
import './Contact.css';


export default function Contact(){

   return(
      <>
         <div className="container-1">
            <h1>Contact Us</h1>
            <p>WE'RE EASY TO GET IN TOUCH WITH</p>
         </div>
         <div className="container-9">
            <div className="row">
               <div className="col">
                  <h2>Get Into Touch</h2>
                  <hr/>
                  <Image
                    className="images-7"
                    src="/address.png"
                    alt="Next.js Image"
                    width={285}
                    height={170}
                    priority
                />        
               </div>
               <form>
                  <input type="text" name="enter your first name" placeholder="enter your first name"/>
                  <input type="text" name="enter your last name" placeholder="enter your last name"/>
                  <input type="text" name="phone number" placeholder="phone number"/>
                  <input type="text" name="email address" placeholder="email address"/>   
                  <input type="text" className="message" name="your message" placeholder="your message"/><br/>
                  <button className="send">send message</button>
               </form>
            </div>
         </div>
         <div>
            <iframe className="Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766738.48171446!2d60.9691763862997!3d19.725163578221917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1716283858900!5m2!1sen!2sin" width="600" height="450"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </>
   );
}