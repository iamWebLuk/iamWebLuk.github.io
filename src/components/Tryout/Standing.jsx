import React from 'react';

export default function Standing(position, badge, team,played, won, draw, lost, ga, points) {

        let symbol = null;
        if(ga > 0) { symbol = '+'; }

        return(
            <tr>
                <td>{position}</td>
                <td className="badge-td"><div className="badge"><img src={badge} alt={team} /></div></td>
                <td className="text-left">{team}</td>
                <td>{played}</td>
                <td>{won}</td>
                <td>{draw}</td>
                <td>{lost}</td>
                <td>{symbol}{ga}</td>
                <td>{points}</td>
            </tr>
        )
};
