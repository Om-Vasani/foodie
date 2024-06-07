import Image from "next/image";
import './Franchise.css';

export default function Franchise() {

   return (
      <>
         <div className="container-1">
            <h1>
               Be Your Own Boss,<br/>
               Be Our Franchisee
            </h1>
         </div>
         <div className="container-2">
            <h2>Vs Foodie Corner Franchise Application Form</h2>
            <form>
               <h3>Personal Details</h3>
               <input type="text" name="First Name" placeholder="First Name"/><br/>
               <input type="text" name="Last Name" placeholder="Last Name"/><br/>
               <input type="text" name="Nationality" placeholder="Nationality"/><br/>
               <input className="moblie" type="text" name="Mobile" placeholder="Mobile"/>
               <input className="enter" type="text" name="Enter Email" placeholder="Enter Email"/>
            </form>
            <form>
               <h3>Franchise Details</h3>
               <input type="text" name="First Name" placeholder="First Name"/><br/>
               <input className="City" type="text" name="City" placeholder="City"/>
               <input className="Country" type="text" name="Country" placeholder="Country"/>
            </form>
            <form>
               <h3>FOR VS Foodie Corner</h3>
               <input className="Notes" type="text" name="Notes" placeholder="Notes"/>
            </form>
            <button className="Submit">Submit Form</button>
         </div>
      </>
   );
}