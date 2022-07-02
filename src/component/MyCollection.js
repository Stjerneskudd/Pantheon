import { Accordion} from "react-bootstrap";
import NFT from "./NFT"

const MyCollection =() =>{
    return(
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <div class="avatar-container text-center mx-auto">
                <div className="accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Created - 4 Items</Accordion.Header>
                    <Accordion.Body>
                        <div className="contain">
                            <NFT />
                            <NFT />
                            <NFT />
                            <NFT />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Received - 5 items</Accordion.Header>
                    <Accordion.Body>
                        <div className="contain">
                            <NFT />
                            <NFT />
                            <NFT />
                            <NFT />
                            <NFT />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Bought- 1 Items</Accordion.Header>
                    <Accordion.Body>
                        <div className="contain">
                            <NFT />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                </div>
            </div>
        </Accordion>
    );
}
export default MyCollection