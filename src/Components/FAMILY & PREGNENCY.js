import React from 'react'
import './Helthaz.css';
import { useNavigate } from 'react-router-dom';

export const FAMILY= () => {
    let navigate=useNavigate();
  return (
    <div>

<div class="helthyaz">
      
      <div class="az_1">
      
      
         <div>
         <h3>All About Pregnancys</h3>
          <ul>
            <li><a href='vvvvvvvv'></a>ADD/ADHD</li>
            <li><a href='vvvvvvvv'></a>Allergies</li>
            <li><a href='vvvvvvvv'></a>Arthritis</li>
            <li><a href='vvvvvvvv'></a>Cancer</li>
            <li><a href='vvvvvvvv'></a>Coronavirus (COVID-19)</li>
            <li><a href='vvvvvvvv'></a>Depression</li>
            <li><a href='vvvvvvvv'></a>Diabetes</li>
            <li><a href='vvvvvvvv'></a>Eye Health</li>
          </ul>
         </div>

         <div>
            <h3>Parenting Guide</h3>
          <ul>
            <li><a href='vvvvvvvv'></a>Heart Disease</li>
            <li><a href='vvvvvvvv'></a>Lung Disease</li>
            <li><a href='vvvvvvvv'></a>Orthopedics</li>
            <li><a href='vvvvvvvv'></a>Pain Management</li>
            <li><a href='vvvvvvvv'></a>Sexual Conditions</li>
            <li><a href='vvvvvvvv'></a>Skin Problems</li>
            <li><a href='vvvvvvvv'></a>Sleep Disorders</li>
            <li><a href='vvvvvvvv'></a>View All</li>
          </ul>
         </div>
      
</div>


<div class="az_2">
<div>
<h3>Pet Care Essentials</h3>
          <ul>
            <li><a href='vvvvvvvv'></a>Symptom Checker</li>
            <li><a href='vvvvvvvv'></a>WebMD Blogs</li>
            <li><a href='vvvvvvvv'></a>Podcasts</li>
            <li><a href='vvvvvvvv'></a>Newsletters</li>
            <li><a href='vvvvvvvv'></a>Best Hospitals</li>
            <li><a href='vvvvvvvv'></a>Find a Doctor</li>
            <li><a href='vvvvvvvv'></a>Children's Conditions A-Z</li>
            <li><a href='vvvvvvvv'></a>Surgeries and Procedures A-Z</li>
          </ul>
         </div>

</div>


</div>
<button class="btn" onClick={()=>{
navigate("/home")
}}>BACK TO HOME</button>
    </div>
  )
}
