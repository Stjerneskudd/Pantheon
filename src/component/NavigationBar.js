import {Navbar, Container, Offcanvas, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap";
import logo from "../assets/logo.png"


const NavigationBar = () =>{
    return(
        <div>
            {/* Expand tab On Right Corner */}
            {['sm'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>

                        {/* Logo */}
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="auto"
                                height="45px"
                                className="d-inline-block align-top"
                                alt="Your Company Logo"
                            />
                        </Navbar.Brand>
                        {/* End Logo */}

                        {/* Navbar Toggle */}
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                        {/* Navbar Canvas */}
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >

                            {/* Header Canvas */}
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                PANTHEON
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            {/* Navbar Menu */}
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Market</Nav.Link>
                                    <Nav.Link href="#action2">Add</Nav.Link>
                                    <NavDropdown
                                        title="Fitur"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Trolly</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Auction</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">My Collection</NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">Wallet</NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">Profile</NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">Setting</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>

                                {/* Search */}
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />

                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
}


export default NavigationBar