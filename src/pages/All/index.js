import React, { useState, useEffect } from 'react';
import { getTeamInfo } from '../../service/Utils';
import { getAllTeams } from '../../service/service';

import './styles.css';

export default function All() {
    const [ teams, setTeams ] = useState([]);
    const [ closeDiv, setCloseDiv ] = useState('</div><div className="row">');

    useEffect(() => {
        function handleGetAllTeams(){
            let allTeams = [];

            getAllTeams().then((response) => { 
                for (let item of response){
                    allTeams.push({
                        "name": item.full_name,
                        "img": getTeamInfo(item.full_name).img,
                        "id": item.id
                    });
                }

                setTeams(allTeams);
            });

        }

        handleGetAllTeams();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <h3>All NBA Teams</h3>
                    </div>
                </div>

                <div className="row">
                    { teams.map((team, index) => {
                        return [
                            <div className="col-md-4 mb-4 team-card" key={ index }>
                                <a href={ `/team/${team.id}`}>
                                    <div className="card">
                                        <img src={ team.img } alt={ team.name } className="card-img team-logo text-left"/>
                                        <h3>{ team.name }</h3>
                                    </div>
                                </a>
                            </div>
                        ]
                    })}
                </div>
            </div>
        </>
    );
}
