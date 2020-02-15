import React, { useState, useEffect } from 'react';

import { Navbar, Nav, NavDropdown, NavItem, Form, FormControl, Button } from 'react-bootstrap';
import { getAllTeams } from '../service/service';

export default function Menu() {
    const [ teamId, setTeamId ] = useState(0);
    const [ teams, setTeams ] = useState([]);

    useEffect(() => {
        function handleGetTeams(){
            getAllTeams().then((response) => {
                setTeams(response);
            });
        }

        handleGetTeams();
    }, []);

    function handleSelectedTeam(){
        window.location.href = `/team/${teamId}`;
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home" style={{ width: 100 }}>
                    <img src="/assets/img/logo-2.png" alt="Scoreboard" className="navbar-logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/games">Home</Nav.Link>
                        <Nav.Link href="/teams">Teams</Nav.Link>

                        <NavDropdown title="Conferences" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Division" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">East</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">West</NavDropdown.Item>
                        </NavDropdown>

                        <Form.Control as="select" value={ teamId } onChange={ e => setTeamId(e.target.value) }>
                            <option value="0">Select Team</option>
                        { teams.map((team) => {
                            return <option key={ team.id } value={ team.id }>{ team.full_name }</option>
                        })}
                        </Form.Control>          

                        <Button variant="outline-info" className="ml-2" onClick={ handleSelectedTeam }>Go</Button>
                    </Nav>

                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}