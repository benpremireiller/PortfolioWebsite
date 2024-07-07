import React from 'react';
import {IoLibrary} from "react-icons/io5";

function TopicsPage(){

    return (
        <>
            <h2><IoLibrary/> Web Development Concepts</h2> 
            <nav class = "local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontEndDesign">Frontend Design</a>
                <a href="#optImgs">Optimizing Images</a>
                <a href="#favicons">Favicons</a>               
            </nav>
            <article id = "webServers">
                <h3>Web Servers</h3>
                <p>
                    On the web, a <strong>designated home page</strong> is the default page that a server will return from a GET <strong>HTTP request</strong>
                    when no specific resource is requested (i.e. only / is provided after the host name). The client will be served a designated "default" resource based on the server type and setup. 
                    Typically, this resource is linked to an index.html file for servers like Apache. However, it may be named differently, like default.html, for pages hosted on Microsoft's .NET platform.
                    Additionally, depending on the language the server is running, the server may return a JavaScript or PHP file.
                </p>
                <p>
                    On the <strong>Inspector Network</strong> tab for this page, you can see that the a1-premireb page was loaded with <strong>status code</strong> 200 indicating a successful request. Additionally,
                    you can see that both main.css and main.js returned status codes 404 indicating that these resources could not be found. When viewing the resource from the web server, the server
                    returns a favicon.ico file and several data:image files all with status code 200. When clicking on the index.html file, there is information in the response header specifying the <strong>IP Address</strong> 
                    of the server, user-agent details, cache details, dates and the server host. In contrast, when viewing the resource from my local computer, the response header contains no favicon.ico file or data:image files.
                    Additionally, when viewing the index.html file response headers, limited information relating to the URL, status and content-type is shown.
                </p>
                <p>
                    The favicon.ico file has a status of 200 because the server was able to locate this resource at https://web.engr.oregonstate.edu/favicon.ico 
                    and respond to the client with it. In contrast, the main.css and main.js files (which are specified in the head tag of this page) could not be located on the server and thus the server returned a
                    404 'Not Found' status code to indicate this.
                </p>
                <p>
                    The schema value for my web server's <strong>URL</strong> is HTTPS. The subdomain is web.engr and the host domain is oregonstate.edu. Lastly, the resource is /~premireb/a1-premireb/. 
                </p>
            </article>
            <article id = "frontEndDesign">
                <h3>Frontend Design</h3>
                <p> Frontend design is about creating the front most layer of a product, system or service which the end user interacts with. It includes the design, GUI and aspects of the user interaction.
                    This can incorporate color schemes, font types, media, icons and appropriate navigation around the page and to external content. Front end design changes over time as new trends and technology 
                    emerge. Generally, when designing a website, the developer wants it to follow the principles of the <strong>five &quot;E&quot;s</strong> which makes the website...
                </p>
                <dl>
                    <dt>Effective</dt>
                        <dd>Allows the user to achieve their purpose for visiting the website</dd>
                    <dt>Efficient</dt>
                        <dd>Requires minimal steps and/or clicks to meet the user's intended goal</dd>
                    <dt>Easy to navigate</dt>
                        <dd>Simple layout and implementation which allows the user to move around the website with ease</dd>
                    <dt>Error-free</dt>
                        <dd>No errors ensure a consistent experience, which will prevent frustration and confusion</dd>
                    <dt>Enjoyable or engaging</dt>
                        <dd>A user who enjoys the experience of visiting and engaging with the front end will be more likely to return</dd>
                </dl>
                <p>
                    Page layout tags are used to split the content into logical chunks or <strong>block-level</strong> elements. Each tag has a unique name which describes its intended purpose. The &lt;header&gt; tag is used to 
                    provide a high level structure or description of the content on the page. &lt;nav&gt; is used to show links to other pages which allows the user to navigate within the website or to external websites. &lt;main&gt; is 
                    used as a block to house the main body of the content on the web page which is visible in the web browser's <strong>viewport</strong>. &lt;section&gt; denotes a logical section where multiple topics related to the same subject can be placed in an organized fashion.
                    &lt;article&gt; is used within a section for individual topics related to that section. &lt;footer&gt; is used to denote any disclaimers or copyright notices. &lt;a&gt; denotes an anchor tag and can be used to link to other content through hyperlinks. The text in 
                    anchor tags will be underlined by default and allows the user to click on this text to <strong>navigate</strong> to the linked content. Anchors can link to three different types of content:
                </p>
                <ol>
                    <li>Anchors can link to external content by specifying the href <strong>attribute</strong> with a URL. When the user clicks on this tag, they will be redirected to another web page</li>
                    <li>Anchors can link to internal content by setting the href attribute to a hashtag directly followed by the id attribute of a specific element on the current page</li>
                    <li>Anchors can link to different pages in the same directory structure by providing either an <strong>absolute</strong> or <strong>relative</strong> file path to another document</li>
                </ol>
            </article>
            <article id = "optImgs">
                <h3>Optimizing Images</h3>
                <p>
                    Optimizing images is about manipulating images to change them into the proper format, resolution and reduce their file size as much as possible. There are several principles which should be adhered to when optimizing images.
                    Images should have <strong>descriptive</strong> file names with keywords separated by dashes, which will help search engines categorize the images. Images should have small <strong>file sizes</strong> to reduce the load on
                    web servers and allow for faster load times. Images should be reduced to the <strong>dimensions</strong> required to display the image clearly on the web page. Providing multiple images with different resolutions depending on the monitor viewing the image can save bandwidth. 
                    
                </p>              
                <p>
                    Selecting the right color mode depending on the file type is also important. RGB should be used for .PNG, .JPG, .SVG and .WebP <strong>file formats</strong> 
                    while Indexed should be used for .GIF files. Lastly, images should have the right file type depending on the image type. Online images and photographs should be 
                    in .JPG format while line-art images should be either .GIF or sometimes 8-bit .PNG.
                </p>    
            </article>
            <article id = "favicons">
                <h3>Favicons</h3>
                <p>
                    <strong>Favicons</strong> are logos or images which identify a site or domain in a browser. Web servers generally have multiple file formats and sizes which they will serve to browsers depending on the device/browser
                    requesting the resource. Favicons file formats are most commonly .PNG, .ICO or .SVG. The browser will receive the file and use the icon in the browser's window tab, bookmark list or search engine result list. 
                    Favicons evolve over time as screen resolutions and new trends develop.
                </p>
            </article>
        </>
    );
}

export default TopicsPage;