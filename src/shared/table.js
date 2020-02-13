import React, { useState } from 'react';

export default function Table(props) {
    const [ classname, setClassname ] = useState(props.classname);
    const [ columns, setColumns ] = useState(props.columns);

    return (
        <>
            <table className={ classname }>
                <thead>
                    <tr>
                        { columns.map((column) => {
                            return <th>{ column }</th>
                        })}
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
        </>
    );
}
