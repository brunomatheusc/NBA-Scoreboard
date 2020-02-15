import React, { useState, useEffect } from 'react';
import { getTeamInfo } from '../../service/Utils';
import { getAllTeams } from '../../service/service';

import './styles.css';
import Loader from './../../shared/loader';

export default function All() {
    const [ teams, setTeams ] = useState([]);
    const [ closeDiv, setCloseDiv ] = useState('</div><div className="row">');
    const [ loader, setLoader ] = useState(true);

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

                setTimeout(() => {
                    setLoader(false);
                }, 1500)
            });
        }

        handleGetAllTeams();
    }, [])

    return ((loader) ? <Loader/> :
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
                                    <div className="card" style={{ minHeight: 250 }}>
                                        <img src={ team.img } alt={ team.name } className="card-img team-logo text-left"/>
                                        <h4>{ team.name }</h4>
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
