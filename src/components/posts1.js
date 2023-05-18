import React from "react";
import views from "./icons/views.png";
import share from "./icons/share.png";




export function Post(props){
    return (
        <div className="post container my-4">
            <div class="card" style={{maxWidth:"65%", overflow:"hidden"}}>
                <img src={props.post} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.type}</h5>
                    <div className="d-flex justify-content-between">
                        <p className="card-text"style={{fontWeight:"bold", fontSize:"1.3rem"}}>{props.title}</p>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontWeight:"bolder", fontSize:"1.3rem"}}>
                                ...
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Edit</a></li>
                                <li><a class="dropdown-item" href="#">Report</a></li>
                                <li><a class="dropdown-item" href="#">Option3</a></li>
                            </ul>
                        </div>
                    </div>
                    <p class="card-text"style={{fontWeight:"light", fontSize:"1.1rem"}}>{props.title_small}</p>
                    <div className="d-flex justify-content-between">
                        <a href="#" class="d-flex align-items-center nav-link"><img src={props.profile_pic} alt="" style={{width:"5rem"}} className="profile-pic"/> <h5 className="profile-name mx-3">{props.profile_name}</h5> </a>
                        
                        <a href="#" class="d-flex align-items-center nav-link"><img src={views} alt="" style={{width:"2rem"}}/> <h5 className="views my-2">{"1.4k views"}</h5> <img src={share} className="mx-3" alt="" style={{width:"3rem"}}/></a>
                
                    </div>
                </div>
            </div>
        </div>
            
    );  
}