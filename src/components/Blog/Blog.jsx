import React from 'react';

const Blog = () => {
    return (
        <div className='px-16'>
            {/* answer-1 */}
            <div className="card bg-base-200 shadow-xl my-6">
            <div className="card-body">
                <h2 className="card-title">Q-1. Differences between uncontrolled and controlled components</h2>
                <p>In React, Controlled components refers to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves</p>
                <h2 className='text-xl font-semibold'>Uncontrolled Components</h2>
                <p>Uncontrolled components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.
                <br />
                For instance, if we want to add a file as an input, this cannot be controlled as this depends on the browser so this is an example of an uncontrolled input.
                </p>
                <h2 className='text-xl font-semibold'>Controlled Components</h2>
                <p>In React, Controlled components are those in which form's data is handled by the component's states its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new value as props to controlled component.  
                <br />
                For instance, if we are creating a state name that stores the value we enter into the input field use the "useState" hook. And if we are creating an onChange function in the input filed that stores the da ta we are entering in the input field to our state.
                </p>
            </div>
            </div>

            {/* answer-2 */}

            <div className="card bg-base-200 shadow-xl my-6">
            <div className="card-body">
                <h2 className="card-title">Q-2. How to validate React props using PropTypes?</h2>
                <p>In React, we need to validate the Props, props are used to pass the read-only attributes to React components. For the proper functioning of components and to avoid to future bugs and glitches it is necessary that props are passed correctly. Hence, it is required to use props validation to improve the react component's performance.</p>
                <h2 className='text-lg font-semibold'>Prerequisite</h2>
                <ul>
                    <li>NodeJs or NPM</li>
                    <li>REactJs</li>
                    <li>React Props</li>
                </ul>
                <p><span className='font-semibold'>Validators:</span> The propsTypes object contains a list of validators for basic data types, some of them are:</p>
                <ul>
                    <li><span className='font-semibold'>PropTypes.any:</span> This means the prop can be any data type</li>
                    <li><span className='font-semibold'>PropTypes.bool:</span> This means the prop should be boolean</li>
                    <li><span className='font-semibold'>PropTypes.number:</span> This means the prop should be number</li>
                    <li><span className='font-semibold'>PropTypes.string:</span> This means the prop should be string</li>
                    <li><span className='font-semibold'>PropTypes.func:</span> This means the prop should be function</li>
                </ul>
            </div>
            </div>

            {/* answer-3 */}
            
            <div className="card bg-base-200 shadow-xl my-6">
            <div className="card-body">
                <h2 className="card-title">Q-3. Tell us the difference between nodejs and express js</h2>
                <p>Node is runtime environment for executing ser-side javaScript code, while Express is a framework built for Node, offering features and tools that streamline server-side development. Each plays a distinct role in web development.</p>
                <h2 className='text-xl font-semibold'>Node JS</h2>
                <p>Node JS is an open-source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that Node JS is not a framework and it's not a programming language. Most od the people are confused are understand it's a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It's used in production by large companies such as Paypal, Uber, Netflix, Walmart, and so on.
                </p>
                <h2 className='text-xl font-semibold'>Express JS</h2>
                <p>Express JS is a small framework that sits on top of Node JS's web server functionality to simplicity it's API's and add helpful new features. It makes it easier to organize your application's functionality with middleware and routing. It adds helpful utilities to Node JS's HTTP objects. It facilitates the rendering of dynamic HTTP object.
                </p>
                <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Node JS</th>
                        <th>Express JS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Usage</td>
                        <td>It is used to build server-side, input-output, event-driven apps.</td>
                        <td>It is used to build web-apps using approaches and principles of Node JS</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                        <th>2</th>
                        <td>Building Block</td>
                        <td>It is built on Google’s V8 engine.</td>
                        <td>It is built on Node JS</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Routing</td>
                        <td>Routing is not provided.</td>
                        <td>Routing is provided.</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>

            {/* answer-4 */}

            <div className="card bg-base-200 shadow-xl my-6">
            <div className="card-body">
                <h2 className="card-title">Q-4. What is a custom hook, and why will you create a custom hook?</h2>
                <h2 className='text-xl font-semibold'>What is Custom Hook?</h2>
                <p>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.
                </p>
                <h2 className='text-xl font-semibold'>Why we will create a custom hook?</h2>
                <p>The main reason for which you should be using Custom hooks is to maintain the concept of DRY(Don’t Repeat Yourself) in your React apps.
                </p>
            </div>
            </div>

        </div>
    );
};

export default Blog;