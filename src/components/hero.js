import React from "react";
import post_img from "./icons/post-image.png";


export function Hero(){
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg" style={{backgroundColor:"white"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">All Post(32)</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Article</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Event</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Education</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Job</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <button class="btn btn-outline-primary mx-4 px-4" type="submit">Write a Post</button>
                        <button class="btn btn-primary px-4" type="submit">Join Group</button>
                    </form>
                    </div>
                </div>
            </nav>
            <hr style={{display:"block"}}/>
            <div className="container d-flex side-follower-bar" style={{justifyContent:"flex-end", paddingTop:"2rem", position:"absolute"}}>
                <div className="d-flex" style={{flexDirection:"column"}}>
                    <input type="text" placeholder="Enter Your Location" style={{border: "none",borderBottom: "1px solid #ccc",outline: "none"}}/>
                    <p style={{margin:"2rem 0"}}>Your location will help us serve better <br /> and extend a personalised experience.</p>
                    <h4>Recomended Groups</h4>
                    <ul>
                        <li className="d-flex justify-content-between py-3"> <h5>Leisure</h5> <button type="submit" className="btn btn-dark rounded-pill">Followed</button> </li>
                        <li className="d-flex justify-content-between py-3"> <h5>Activism</h5> <button type="submit" className="btn btn-secondary rounded-pill">Follow</button> </li>
                        <li className="d-flex justify-content-between py-3"> <h5>MBA</h5> <button type="submit" className="btn btn-secondary rounded-pill">Follow</button> </li>
                        <li className="d-flex justify-content-between py-3"> <h5>Philosophy</h5> <button type="submit" className="btn btn-secondary rounded-pill">Follow</button> </li>
                    </ul>
                </div>
            </div>
        </div>
            

    );  
}