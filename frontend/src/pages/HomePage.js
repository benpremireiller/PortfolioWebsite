import React from 'react';
import { FaHouseChimney } from "react-icons/fa6";

function HomePage(){

    return (
        <>
            <h2><FaHouseChimney/> Welcome</h2>
            <article>
                <p>
                    Welcome to my website! Click on the navigation headers at the top of the page to browse the different content available. This page will describe my career goals and which technologies were used to build this website. Enjoy your time here!
                </p>
                <h3>Career Goals</h3>
                <p>
                Securing a full-time position as a software engineer at a forward-thinking company is my main goal. 
                This role will provide opportunities for growth and specialization, particularly in areas like machine learning, artificial intelligence, or cybersecurity, 
                where the analytical skills from my economics background can be particularly advantageous. Pursuing professional development through certifications, advanced courses, 
                or even a master's degree will keep my skills current with industry trends. I plan to actively participate in open-source projects and hackathons as they will further establish my 
                presence in the developer community.
                </p>
                <h3>Technologies Used</h3>
                <p>
                    Several technologies were used in the development of this web application:
                    <dl>
                        <dt>HTML</dt>
                            <dd>Hyper Text Markup Language. The code which describes the structure of the content on this webpage.</dd>
                        <dt>CSS</dt>
                            <dd>Cascading Style Sheets. A framework for styling web pages. Colors, shapes, borders and spacing on this page are all defined through CSS.</dd>
                        <dt>React</dt>
                            <dd>A frontend framework which was used to develop this dynamic single page application (SPA) website.</dd>
                        <dt>Node</dt>
                            <dd>A Javascript runtime environment which can execute Javascript code.</dd>
                        <dt>MongoDB</dt>
                            <dd>A noSQL database management system which stores the data related to games shown on the Games page of this website.</dd>
                        <dt>Mongoose</dt>
                            <dd>A object-relational mapper (ORM) which maps javascript objects to MongoDB documents.</dd>
                        <dt>CRUD</dt>
                            <dd>Create, Read, Update and Delete are all operations that can be performed on a database to make changes to data within data stores.</dd>
                        <dt>Express</dt>
                            <dd>A backend tool to handle HTTP requests for the webpages on this site as well as REST API calls to retrieve or modify the data in MongoDB.</dd>
                        <dt>REST</dt>
                            <dd>Representational State Transfer is a guideline used for building network application. This website's backend runs a RESTful API which allows for CRUD operations on the MongoDB database over the HTTP protocol.</dd>
                        <dt>Asynchronous Functions</dt>
                            <dd>Function which can execute independently of other code running at the same time make up a large chunk of the functionality of the backend of this website.</dd>
                    </dl>
                </p>
            </article>
        </>
    );
}

export default HomePage;