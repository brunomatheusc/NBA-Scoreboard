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
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={ teamInfo.img } alt={ name } className="card-img team-logo text-left"/>
                                    <h3>{ name }</h3>

                                    <div className="row mb-2">
                                        <div className="col-md-12 text-center">
                                            <span className="badge badge-danger mr-1">L</span>
                                            <span className="badge badge-danger mr-1">L</span>
                                            <span className="badge badge-danger mr-1">L</span>
                                            <span className="badge badge-danger mr-1">L</span>
                                            <span className="badge badge-danger mr-1">L</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8 mt-3">
                                <div className="row text-left">
                                    <div className="col-md-4">
                                        <span className="text-left"><strong>Division</strong></span><br/>
                                        <span className="text-left">{ division }</span>
                                    </div>

                                    <div className="col-md-4">
                                        <span className="text-left"><strong>Conference</strong></span><br/>
                                        <span className="text-left">{ conference }</span>
                                    </div>
                                </div>

                                <hr className="mr-5"/>

                                <div className="row text-left mr-5">
                                    <div className="col-md-3 text-left">
                                        <h3>PPG</h3>                                                    
                                        <h4>110.0</h4>
                                    </div>

                                    <div className="col-md-3 text-left">
                                        <h3>RPG</h3>                                                    
                                        <h4>32.0</h4>
                                    </div>

                                    <div className="col-md-3 text-left">
                                        <h3>APG</h3>                                                    
                                        <h4>25.0</h4>
                                    </div>

                                    <div className="col-md-3 text-left">
                                        <h3 className="text-center">STREAK</h3>                                                    
                                        <h4 className="text-center">L2</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="col-md-12">
                                    <h4>Last games</h4>
                                </div>

                                <div className="col-md-12">
                                    <table className="table team-table mt-3">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Home</th>
                                                <th>Score</th>
                                                <th>Away</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>12/02</td>
                                                <td><strong>{ name }</strong></td>
                                                <td>115 x 108</td>
                                                <td>Minessota Timberwolves</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
