import React from 'react'

function StaffRow(record){
    console.log(record)
    return (
        <tr>
            <td><img src={record.record.picture.thumbnail} alt={`${record.record.name.first} ${record.record.name.last}`}/></td>
            <td><a href= {`mailto:${record.record.email}`}>{record.record.name.first} {record.record.name.last}</a></td>
            <td>{record.record.phone}</td>
            <td>{record.record.location.timezone.description}</td>
        </tr>
    )
}

export default StaffRow;