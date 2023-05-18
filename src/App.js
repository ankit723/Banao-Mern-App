import './App.css';
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Post } from "./components/posts1";
import { Post2 } from "./components/posts2";
import post_img from "./components/icons/post-image.png";
import post_img2 from "./components/icons/post-image2.png";
import post_img3 from "./components/icons/post-image3.png";
import prof1 from "./components/icons/profilepic1.png";
import prof2 from "./components/icons/profilepic2.png";
import prof3 from "./components/icons/profilepic3.png";
import prof4 from "./components/icons/profilepic4.png";

function App() {
  return (
    <>
      <div className="App-media">
        <Navbar />
        <Hero />
        <Post post={post_img} type={"Article"} title={"What if famous brands had regular fonts? Meet RegulaBrands!"} title_small={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"} profile_pic={prof1} profile_name={"Sarthak Sharma"}/>

        <Post post={post_img2} type={"Education"} title={"Tax Benefits for Investment under National Pension Scheme launched by Government"} title_small={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"} profile_pic={prof2} profile_name={"Sarah West"}/>
        
        <Post2 post={post_img3} type={"Meetup"} title={"Finance & Investment Elite Social Mixer @Lujiazui"} event={"Visit Website"} profile_pic={prof3} profile_name={"Ronal Jones"} details={"Fri, 12 Oct, 2018"} location={"Ahmedabad, India"}/>
        
        <Post2 type={"Job"} title={"Software Developer"} event={"Apply on Timejobs"} profile_pic={prof4} profile_name={"Joseph Gray"} details={"Innovaccer Analytics Private Ltd."} location={"Noida, India"}/>

      </div>
    </>
  );
}

export default App;
