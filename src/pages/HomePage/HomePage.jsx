import React from "react";
import "./HomePage.css";

export default function HomePage() {
   return (
      <>
         <div class="d-flex justify-content-center align-items-center vh-100">
            <div class="custom-height bg d-flex flex-column justify-content-center align-items-center">
               <h1 class="text-center mb-3">Welcome To Lamadoro</h1>
               <div>
                  <p class="text-center">
                     Getting Started: <br></br> Click on the "Tasks" tab and add
                     a task.
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}
