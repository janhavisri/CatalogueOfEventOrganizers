import { Search } from "@mui/icons-material";
import { InputAdornment, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";
import "../../stylesheets/browseorg.css";
const BrowseSlides = () => {
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "org/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setDatalist(data);
          setLoading(false);
        });
      }
    });
  };

  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);



  const displayData = () => {
    if (!loading) {
      return datalist.map(
        ({
          firstname,
          lastname,
          organisationname,
          heroimage,
          registeredaddress,
          state,
          city,
          postalcode,
          description,
          email,
          link,
          _id,
        }) => (
          <div key={_id} class="col-md-12 col-lg-4 mb-4 mb-lg-0 ">
          <div class='container cont' id='container'>

  <div class='card-wrapper'>
    <div class='arrow' id='previous'><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
    <div class='arrow' id='next'><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
    <div class='main-window' id='main-window'>

      <div class='user-image'>
      <NavLink className="ripple" to={"/main/pptviewer/" + _id}>
                <img
                  src={url + heroimage}
                  class="card-img-top"
                  alt="Laptop"
                />
                
              </NavLink>
 
        {/* <div class='add-button'>+</div> */}
        <p class="small">
                    <a href="#!" class="text-muted">
                      {link}
                    </a>
                  </p>
                  <h5 class="mb-0 username">{organisationname}</h5>
      </div>
        
      <Button onClick={e=>navigate("/main/orgdetail/" + _id)} variant="contained">Click For Full Details</Button>
                
      </div>
      </div>
      </div>
      </div>
  
        )
      );
    }
  };

  const applyfilter = () => {};

  return (
    <div >
              
     
    <div style={{ background: "#eee", height: "200vh" }}>
    <img class="banner" src="  https://nasscom.in/sites/default/files/Landing_page_banner/events_listing.jpg"></img>
    <div class=" row ground">
                <div class="col-md-5 mb-3">
                <div class="form-outline form">

                {/* <label for="state" > </label> */}
<select name="state" id="state" class="form-control">
<option value="">--Select State--</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
                </div>
                </div>
    <input class="applyNowBtn" id="event-search" type="submit" name="searchevent" value="Search"></input>

{/* <a href="#" class="adSearchLink">Advance Search </a>   */}


</div>
      {/* <header style={styles.header}> */}
        
        {/* <Typography className="text-center text-black" variant="h5">
          Neephur
        </Typography> */}
        {/* <div> */}
      
        {/* <Typography className="text-center text-black" variant="h2">
          No Code Website List 
        </Typography>

        <div className="input-group mt-5">

          <input
            className="form-control"
            value={filter}
            label="Search Here"
            onChange={(e) => setFilter(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "active.active", mr: 1, my: 0.5 }} />
                </InputAdornment>
              ),
            }}
          />
          
          <button
            className="btn btn-primary"
            onClick={applyfilter}
            type="submit"
          >
            Search
          </button>
        </div> */}
        {/* </div> */}
      {/* </header> */}
      <div className="container">
        <div className="row">{displayData()}</div>
      </div>
    </div>
    </div>
  );
};


const styles = {
  header: {
    // background:
    //   "linear-gradient(to right, #0000009b, #000000ad), url(http://localhost:5000/images/browse_back.jpg)",
    padding: "2rem",
    textShadow: "2px 2px 3px #0000005c",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export default BrowseSlides;
