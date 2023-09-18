import React from 'react'
import "../scholarship/scholarship.css"
import img2 from "./images/state merit.jpg"
import img1 from "./images/post matric.jpg"
import img3 from "./images/Bhinnaseshy Souhrida.jpg"
import img4 from "./images/central sector1.jpg"
import img5 from "./images/NMCMS1.jpg"
import img6 from "./images/Top Class1.jpg"
export default function Scholarship() {
  return (
    <div>
      <section className="header">
            <div className="text-box">
                <h1>Scholarship Corner</h1>
               <strong> <p>Explore a world of educational opportunities.<br/> Our Scholarship Corner provides comprehensive information on scholarships, grants, and financial aid programs.</p></strong>
            </div>
        </section>
         <section className="stateSCL">
            <h1>State Scholarships</h1>
            <p>Scholarships offered by the state of Kerala</p> 
            <div className="row">
                <div className="stateSCL-col">
                    <img src={img1}/>
                    <h3>Post Matric Scholarship</h3>
                    <p>An amount equivalent to Admission and Course/Tuition Fee and Maintenance allowance, subjected to a maximum ceiling. See Instructions for details.</p>
                </div>
                <div className="stateSCL-col">
                    <img src={img2}/>
                    <h3>State Merit Scholarship</h3>
                    <p>Graduation Rs. 1250/- per annum (300 Nos)
                        Post Graduation Rs. 1,500/- per annum (150 Nos.)</p>
                </div>
                <div className="stateSCL-col">
                    <img src={img3}/>
                    <h3>Bhinnaseshy Souhrida Scholarship</h3>
                    <p>	Blind/PH/Deaf students studying in Govt/Aided Arts and Science Colleges, Music Colleges, and Govt/Aided Higher Secondary/Vocational Higher Secondary Schools</p>
                </div>
            </div>
        </section> 
        <section className="nationSCL">
            <h1>Central Scholarships</h1>
            <p>Scholarships offered by the government of India</p> 
            <div className="row">
                <div className="nationSCL-col">
                    <img src={img4}/>
                    <h3>Central Sector Scheme of Scholarship</h3>
                    <p>Students who are above 80th percentile of successful candidates in className XII and pursuing regular course and not availing benefit of any other scholarships, are eligible to apply under this Scheme.</p>
                </div>
                <div className="nationSCL-col">
                    <img src={img5}/>
                    <h3>National Means Cum Merit Scholarship</h3>
                    <p>1 lakh scholarships are provided under this scheme to className 9th meritorious students whose annual family income is not above Rs. 1.5 lakh.</p>
                </div>
                <div className="nationSCL-col">
                    <img src={img6}/>
                    <h3>Top className Education Scheme for SC Students</h3>
                    <p>	Those SC students having total annual family income from all sources up to Rs. 8.00 lakh and having secured admission in a full-time prescribed course in any of the notified institutions are eligible.</p>
                </div>
            </div>
        </section> 
    </div>
  )
}
