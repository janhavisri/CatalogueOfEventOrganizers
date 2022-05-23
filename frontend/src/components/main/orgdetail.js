import { Avatar, Rating, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";
import "../../stylesheets/orgdetail.css";
import { Formik } from "formik";
 import Swal from "sweetalert2";
 

const PPTViewer = () => {
  const [pptLink, setPptLink] = useState(
    "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx"
  );

  const navigate = useNavigate();

  const { id } = useParams();
  const [orgData, setOrgData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orgList, setOrgList] = useState([]);
  const [hero, setHero] = useState("");
  const [ReviewFile, setReviewFile] = useState("");
  const [orgLoading, setOrgLoading] = useState(true);
  const [orgText, setOrgText] = useState("");
  const [dataList, setDataList] = useState([]);
  const url = app_config.api_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [ratingText, setRatingText] = useState("");

  const fetchData = () => {
    fetch(url + "org/getbyid/" + id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setOrgData(data);
          fetchRatings(data._id);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const reviewform = {
 
    description: "",
    

  };
  const formSubmit = (values) => {
    console.log(values);
    values.heroimage = hero;
    values.file = ReviewFile;

    const reqOp = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    fetch(url + "review/add", reqOp)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.message == "success") {
        Swal.fire({
          icon: "success",
          title: "Added Successfully!!",
        });
      }
    });
};
  const fetchRatings = (org_id) => {
    fetch(url + "org/getbyitem/" + org_id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setOrgList(data);
          setOrgLoading(false);
        });
      }
    });
  };

  const addRating = () => {
    fetch(url + "org/add", {
      method: "POST",
      body: JSON.stringify({
        rating: 4,
        text: orgText,
        user: currentUser._id,
        slide: orgData._id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Review💬 Added");
      }
    });
  };

  const displayRatings = () => {
    if (!orgLoading) {
      return orgList.map(({ rating, text, user }) => (
        <div className="card">
          <div className="card-body">
            <Avatar alt="User" />
            <span>{/* <b>{user.name}</b> */}</span>
            <Rating name="simple-controlled" value={rating} />
            <h5 className="text-dark">{text}</h5>
          </div>
        </div>
      ));
    }
  };
const disData=()=>{
  if (!loading) {
    return dataList.map(
      ({
        description,
        _id,
      }) => (<div key={_id} class="col-md-12 col-lg-4 mb-4 mb-lg-0 ">
      <div class='container contd' id='container'>
  <div class='card-wrapper'>
    <div class='arrow' id='previous'><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
    <div class='arrow' id='next'><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
    <div class='main-window' id='main-window'>

      <p class="small">
                    <a href="#!" class="text-muted">
                      {description}
                    </a>
                  </p>

      </div>
        
      <Button onClick={e=>navigate("/main/review/" )} variant="contained">Click For Full Details</Button>
      return <div style={{ background: "#eee" }}>
    {/* <img class="banner" src="https://events.mygov.in/sites/all/themes/mygov/images/inner-banner.jpg"></img> */}
    <div className="container">
        <div className="row disdata">{disData()}</div>
      </div>
    </div>
      </div>
    </div>
    </div> 
      // </div>
      // </div>
      // </div>
      // </div>
  
        )
      );
    }
  };
 
  const displayData = () => {
    if (!loading) {
      return  <div class="w3-row w3-padding w3-border">

          
          <div class="w3-col l8 s12">
        
            
            <div class="w3-container w3-white w3-margin w3-padding-large">
              <div class="w3-center">
              <h2>{orgData.organisationname}</h2>
                <p class="small">
                    <h6 class="text-muted">
                      {orgData.link}
                    </h6>
                  </p>
                  <p>{orgData.registeredaddress}</p>
                  </div>
      
              {/* <div class="w3-justify">
                <img src="https://germini.info/wp-content/uploads/2016/12/JavaScript-if-else.jpg" alt="Girl Hat" class="w3-padding-12"/> */}
                <div className="w3-justify">
                   <img
                  src={url + orgData.heroimage}
                  class="w3"
                  alt="Laptop"
                />
                
                <p>{orgData.description}</p>
                {/* <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> */}
                <p class="small">
                    <h6 class="text-muted">
                      {orgData.email}
                    </h6>
                  </p>
                {/* <p class="w3-left"><button class="w3-btn w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p> */}
                {/* <p class="w3-right"><button class="w3-btn" onclick={e=>navigate("/main/review/" )} id="myBtn"><b>All Review  </b> <span class="w3-tag w3-white"></span></button></p> */}
                </div>
               </div> 
               <div class="review">
               <h4 className="text-muted">Review</h4>
                <hr />
                <Rating name="simple-controlled" value={4} />
                <Formik initialValues={reviewform} onSubmit={formSubmit}>
                 {({ values, handleChange, handleSubmit }) => (
                   <form onSubmit={handleSubmit}>
                <TextField
                  label="Write Something .."
                  fullWidth
                  className="mt-2"
                  multiline
                  rows={3}
                  value={orgText}
                  onChange={(e) => setOrgText(e.target.value)}
                />
                <button
                  className="btn btn-primary mt-1 float-end "
                  // onClick={addRating}
                  onClick={e=>navigate("/main/review/" )} 
                >
                  Submit Review
                </button>
                </form>
                 )}
                 </Formik>
              </div>
            </div>
           </div>}
  };

    return <div style={{ background: "#eee" }}>
    <img class="banner" src="https://events.mygov.in/sites/all/themes/mygov/images/inner-banner.jpg"></img>
    <div className="container">
        <div className="row">{displayData()}</div>
      </div>
    </div>
    ;
};



export default PPTViewer;