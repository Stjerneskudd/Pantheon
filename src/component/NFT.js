import { Image } from "react-bootstrap";
import pantheon from "../assets/logo.png";
import profile from "../assets/profile.png";
import zoom from "../assets/zoom.png";
import money from "../assets/money.png";
import description from "../assets/description.png";

const NFT = () => {
    return(
        <div>
            {/* Container NFT */}
            <div class="style0">
                {/* First Style */}
                <div class="style1">
                    {/* Triangle Roof */}
                    <div class="triangle">
                        <Image src={profile} width="90px" height="90px" />
                    </div>
                    <div class="roftop"></div>
                    <div class="roft"></div>
                    <div class="middle">
                        <div class="pillar-left"></div>
                        <Image src={pantheon} width="333px" height="180px" />
                        <div class="pillar-right"></div>
                    </div>
                    <div class="floor"></div>
                </div>
                <div class="style2">
                    <span className="big">Upload Your NFT Design#1</span>
                    <span>@username-nft</span>
                </div>
                <div class="style3">
                    <div class="button1">
                        <Image src={zoom} width="35px" />
                        <span> Zoom Out</span>
                    </div>
                    <div class="button2">
                        <Image src={money} width="35px" />
                        <span> 10 ADA</span>
                    </div>
                    <div class="button3">
                        <Image src={description} width="35px" />
                        <span> Description</span>
                    </div>
		        </div>
	        </div>
        </div>
    );
} 

export default NFT