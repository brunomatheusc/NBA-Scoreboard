import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles.css';
import Api from './../../service/Api';

export default function Games() {
    const [ gameId, setGameId ] = useState('');
    const [ home, setHome ] = useState('');
    const [ away, setAway ] = useState('');
    const [ homePoints, setHomePoints ] = useState(0);
    const [ awayPoints, setAwayPoints ] = useState(0);
    const [ games, setGames ] = useState([]);

    useEffect(() => {
        async function getGames(){
            try {
                const response = await Api.get('/games');

                if (response.status == 200){
                    const data = response.data.data;
                    setGames(data);
                }
            } catch (error) {
                console.log(error.response)
            }
        }

        getGames();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <img src="/assets/img/logo-2.png" className="m-3" style={{ width: '20%' }} />
                    </div>

                    <div className="col-md-12">
                        <h2 className="text-center text-white">SCOREBOARD</h2>
                    </div>

                    <div className="col-md-12 col-12 mt-2 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <table className="table table-responsive-sm">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Home</th>
                                            <th width="200">Total</th>
                                            <th>Away</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        { games.map((game) => {
                                            return [
                                                <tr key={ game.id }>
                                                    <td>{ new Date(game.date).toLocaleDateString() }</td>
                                                    <td><a href={ `/team/${game.visitor_team.id}` }>{ game.visitor_team.name }</a></td>
                                                    <td>{ game.visitor_team_score + " x " + game.home_team_score }</td>
                                                    <td><a href={ `/team/${game.home_team.id}` }>{ game.home_team.name }</a></td>
                                                </tr>
                                            ]
                                        })}
                                    </tbody>
                                </table>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
