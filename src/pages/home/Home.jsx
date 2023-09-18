import "./home.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "./1c.png"
import img2 from "./2c.png"
import img3 from "./3c.png"
import img4 from "./1a.png"
import img5 from './2a.png'
import img6 from './3a.png'
import img7 from './4a.png'
import img8 from './1d.png'
import img9 from './2d.png'
import img10 from './3d.png'

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Home = () => {
	return (
		<div className="home">
			<div className="header">
				<Carousel className="car" responsive={responsive} useKeyboardArrows={true} showStatus={false} showIndicators={false} infiniteLoop={true} swipeable={false} draggable={false}  autoPlay={true}
  autoPlaySpeed={4000}>
	                <div>
						<img src={img3} alt="shinchan" />
					</div>
					<div>
						<img src={img1} alt="shinchan" />
					</div>
					<div>
						<img src={img2} alt="shinchan" />
					</div>
					
				</Carousel>
				<h1>Come Learn With Us...!</h1>
			</div>
			<div className="body">
				<div className="services">
					<div className="upper">
						<div className="left">
							<img src={img4} alt="" style={{borderRadius:"10%"}}/>
						</div>
						<div className="right">
							<img src={img5} alt="" style={{borderRadius:"10%"}}/>
						</div>
					</div>
					<div className="lower">
						<div className="left">
							<img src={img6} alt=""style={{borderRadius:"10%"}} />
						</div>
						<div className="right">
							<img src={img7} alt="" style={{borderRadius:"10%"}}/>
						</div>
					</div>
				</div>
				{/* <div className="courses">
				
					<div className="course">
						<div className="content">
							<div className="coursehead">English Speaking Course</div>
							<div className="coursebody"> Unlock the power of effective communication with our Comprehensive English Speaking Course. Whether you're looking to enhance your professional skills, expand your social horizons, or boost your confidence in English, this course is designed to help you articulate thoughts, express ideas, and engage confidently in conversations.</div>
						</div>
						<img className="img" src={img8} alt="img"></img>
					</div>
					<div className="course">
						<img className="img" src={img9} alt="img"></img>
						<div className="content">
							<div className="coursehead">Course 2</div>
							<div className="coursebody"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, ut expedita? Nam veniam laboriosam velit nostrum ut odit rerum ipsa quisquam aperiam, sapiente optio corrupti rem fugiat, accusantium praesentium voluptas?</div>
						</div>
					</div>
				</div> */}
              <div className="row" style={{marginLeft:"50px",marginTop:"90px"}}>
				<div className="col-md-4 my-3">
			  <div class="card" style={{width:"380px",border:"none",backgroundColor:"#F8F0E5"}}>
  <img src={img8} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Daily classes</h5>
    <p class="card-text">Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on</p>
    
  </div></div></div>
  <div className="col-md-4 my-3">
  <div class="card" style={{width:"380px",border:"none",backgroundColor:"#F8F0E5"}}>
  <img src={img9} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Practice and revise</h5>
    <p class="card-text">Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision

</p>
    
  </div></div>
</div>
<div className="col-md-4 my-3">

<div class="card" style={{width:"380px",border:"none",backgroundColor:"#F8F0E5"}}>
  <img src={img10} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Learn anytime, anywhere</h5>
    <p class="card-text">Register and get access to all our classes to watch from the comfort of any of your devices
</p>
   
  </div>
  </div>
</div>

			  </div>

				<div className="news">
					<div className="newshead">Reach Out To Us</div>
					<div className="newssubhead">Enter your Email Address</div>
					<input type="email" className="email" placeholder="Email" />
					<div className="newssubhead">Enter your Name</div>
					<input type="text" className="text" placeholder="Name" />
					<div className="newssubhead">Enter your Mobile Number</div>
					<input type="phone" className="phone" placeholder="Phone" />
					<button className="button">Submit</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
