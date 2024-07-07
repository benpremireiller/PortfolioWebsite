import React, { useState } from "react";
import StaffRow from "../components/StaffRow"

function StaffPage(){

    const [results, setResults] = useState([])

    const getStaffData = async () => {

        try {
            const response = await fetch("https://randomuser.me/api/?results=10");
            const records = await response.json();
            return setResults(records.results);
        } catch (error) {
            return alert("Error. API did not return results successfully.");
        }
    }

    return (
        <>
        <h2>Staff</h2> 
        <p>Use this page to populate 10 random contacts from the <a href="https://randomuser.me">RandomUser</a> API to the table below.</p>
        <article>
            <button onClick={getStaffData}>Get 10 Users</button>
            <table>
                <caption>Contacts</caption>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody id="userTableBody">
                    {results.map((result) => 
                        <StaffRow record={result}/>
                    )}
                </tbody>
            </table>
        </article>
        </>
    ) 
}

export default StaffPage;