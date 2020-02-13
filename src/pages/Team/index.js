import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import Api from './../../service/Api';
import { getTeamById } from '../../service/service';
import { getTeamInfo } from '../../service/Utils';

export default function Team() {
    const [ name, setName ] = useState('');
    const [ conference, setConference ] = useState('');
    const [ city, setCity ] = useState('');
    const [ division, setDivision ] = useState('');
    const [ teamId, setTeamId ] = useState(useParams()['teamId']);
    const [ teamInfo, setTeamInfo ] = useState({});
    
    useEffect(() => {
        async function handleGetTeam(){
            try {
                getTeamById(teamId).then((response) => {
                    const data = response;
    
                    setName(data.full_name);
                    setConference(data.conference);
                    setCity(data.city);
                    setDivision(data.division);

                    // getTeamInfo(data.full_name);
                    setTeamInfo(getTeamInfo(data.full_name));
                });
            } catch (error) {
                console.log("Error");
                console.log(error.response);                
            }
        }

        handleGetTeam();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className="card p-3">
                            <div className="col-md-4">
                                <img src={ teamInfo.img } alt={ name } className="card-img team-logo text-left"/>
                                <h3>{ name }</h3>                                
                            </div>

                            <div className="col-md-8">
                                <h6>Info</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
