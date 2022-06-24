import React, {useEffect, useState} from 'react';
import './NewFile.css';
import Standing from './Standing';
import axiosFile from "../../axiosFile";
// class NewFile extends Component {
    export default function NewFile() {

        const [leagues, setLeagues] = useState({id: 2002, name: "Bundesliga"});
        const [standings, setStandings] = useState([]);
        const [selectedLeague, setSelectedLeague] = useState('');
        const [posts, setPosts] = useState([]);
        // setLeagues(
        //     { id: 2002, name: 'Bundesliga' },
        //     { id: 2014, name: 'Primera Division' },
        //     { id: 2015, name: 'Ligue 1' },
        //     { id: 2019, name: 'Serie A' },
        //     { id: 2021, name: 'Premier League' })

    // state = {
    //     leagues: [
    //         { id: 2002, name: 'Bundesliga' },
    //         { id: 2014, name: 'Primera Division' },
    //         { id: 2015, name: 'Ligue 1' },
    //         { id: 2019, name: 'Serie A' },
    //         { id: 2021, name: 'Premier League' }
    //     ],
    //     standings: [],
    //     selectedLeague: ''
    // }

    const handleSelection = (id, name) => {
        fetchData(id, name);
    };
// const fetchPosts = async (id, name) => {
//     try{
//         const response = await axiosFile.get(URL = 'https://api.football-data.org/v2/competitions/' + id + '/standings)
//         if (response && response.data) {
//             setData(response.data)
//         }
//     } catch (err) {
//         if (err.response) {
//             // not in the 200 range
//             console.log(err.response.data);
//             console.log(err.response.status);
//             console.log(err.response.headers);
//         } else {
//             console.log(`Error: ${err.message}`)
//         }
//     }
//     }
// }

        useEffect(() => {
          const fetchPosts = async () => {
              try {
                  const response = await axiosFile.get('/get')
                  if (response && response.data) {
                      // setData(response.data)
                      setPosts(response.data)
                      const rows = []

                  }
              } catch (err) {
                  if (err.response) {
                      // not in the 200 range
                      console.log(err.response.data);
                      console.log(err.response.status);
                      console.log(err.response.headers);
                  } else {
                      console.log(`Error: ${err.message}`)
                  }
              }
          }
            fetchPosts();
        }, []);


    const fetchData = (id, name) => {
        const Token = 'e8d80c94721241df8fce83e61e5cbac7',
            URL = 'https://api.football-data.org/v2/competitions/' + id + '/standings';

        fetch(URL, { headers: { 'X-Auth-Token': Token } })
            .then((response) => response.json())
            .then((response) => {
                const rows = [];
                response.standings[0].table.map(
                    (item, index) => {
                        const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points, team } = item;

                        return (
                            rows.push(
                                { position: position, playedGames: playedGames, won: won, draw: draw, lost: lost, goalsFor: goalsFor, goalsAgainst: goalsAgainst, goalDifference: goalDifference, points: points, team: team.name, badge: team.crestUrl }
                            )
                        )
                    }
                )
                // this.setState({ standings: [...rows] })
                // this.setState({ selectedLeague: name})
                setStandings([...rows])
                setSelectedLeague(name)
            })

    }

    // render() {

        // const content = this.state.standings;
    const content = standings.length;
        let table;

        if (content.length > 0) {
            // table = <thead><tr><td colSpan="9"><h3>{this.state.selectedLeague}</h3></td></tr><tr><th className="position">#</th><th className="team" colSpan="2">Team</th><th className="played">Played</th><th className="won">Won</th><th className="draw">Draw</th><th className="lost">Lost</th><th className="ga">GA</th><th className="points">Points</th></tr></thead>;
        table = <thead><tr><td colSpan='9'><h3>{selectedLeague}</h3></td></tr></thead>
        }

        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mt-2">
                            {/*{this.state.leagues.map(league => (*/}
                                {Object.keys(leagues).map(league => {
                            // {/*   // return <button className="btn btn-primary mr-2 mt-2" key={league.id} onClick={() => {this.handleSelection(league.id, league.name)}}>{league.name}</button>*/}
                                    return <button className="btn btn-primary mr-2 mt-2" key={league.id} onClick={() => {handleSelection(league.id, league.name)}}>{league.name}</button>
                                })}
                        </div>
                    </div>

                    <div className="table-responsive mt-5">
                        <table className="table">
                            {table}
                            <tbody>
                            {/*{this.state.standings.map(standing => (*/}
                            {standings.map(standing => {
                                return <Standing
                                    key={standing.position}
                                    position={standing.position}
                                    badge={standing.badge}
                                    team={standing.team}
                                    played={standing.playedGames}
                                    won={standing.won}
                                    draw={standing.draw}
                                    lost={standing.lost}
                                    ga={standing.goalDifference}
                                    points={standing.points}
                                >
                                </Standing>
                            })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
// }
// export default NewFile;