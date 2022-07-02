import { Image } from "react-bootstrap";
import profile from "../assets/profile.png";
import cardano from "../assets/cardano.png";
import bg from "../assets/profil-bg.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const Intro = () => {
    return (
      <div class="avatar-container text-center mx-auto">
        {/* Profile Component */}
         {/* profile cover */}
        <div className="bg-prof">
          <Image src={bg} alt="photo cover" />
        </div>
          {/* profle photos */}
        <div className="img-prof">
          <Image src={profile} alt="photoprofile" />
        </div>
        
        {/* Profile Deskription Component */}
        <div class="card-body">
          {/* Name Profile */}
          <div className="user-info">
            <h4 class="card-title font-weight-bold">Rivai Fansuri Nasution</h4>
            <h6>@username_NFT</h6>
          </div>
          {/* Total Volume */}
          <div className="transaction">
            <div className="ada">
              <Image src={cardano}
              alt="cardano"
              height="45px"
              className="images"
              />
            <h4 className="coin"> 100</h4>
            <h4>ADA</h4>
            </div>
            <h6>Total Volume</h6>
          </div>
        </div>
      </div>
    );
}

export default Intro