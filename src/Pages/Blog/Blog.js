import React from 'react';
import { Link } from 'react-router-dom';


const Blog = () => {

    return (
        <div>
            <h1 className='text-4xl text-center text-indigo-700 font-bold my-5'>Welcome to My Blog</h1>
            <div className="dark:bg-gray-50 dark:text-gray-700 my-12 text-justify">
                <div className="max-w-9xl px-10 py-6 mx-auto rounded-lg shadow-sm border-2 border-indigo-700">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 24, 2022</span>
                        <Link rel="noopener noreferrer" to="/" className="px-2 py-1 font-bold rounded dark:bg-indigo-900 dark:text-gray-50">React</Link>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline">Ques. What are the different ways to manage a state in a React application?</h2>
                        <h5 className='text-md font-bold mt-3'> -- In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.</h5>
                        <p className="mt-2">
                            --URL <br />
                            We can use URL to store some data <br />
                            The id of the current item, being viewed, Filter parameters, Pagination offset and limit, Sorting data <br />
                            Keeping such data in the URL allows users to share deep links with others. It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change
                            <br /><br />
                            --Web Storage <br />
                            The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.

                            Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.

                            We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.
                            <br /> <br />
                            --Local State <br />
                            The third option is to use store state locally. It is useful when one component needs the state.
                            <br /><br />
                            --Lifted State <br />
                            The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.
                            <br /><br />
                            --Derived State <br />
                            The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.

                            So, why bother deriving the state? Well, deriving the state avoids our state values getting out of sync. It simplifies our code since we do not have to remember to keep separate values in sync. When we update the state, derived values are automatically recalculated in the render.
                        </p>
                    </div>
                    <div className="flex  justify-end mt-4">

                        <div>
                            <div className="flex items-center">
                                <img src="https://pbs.twimg.com/profile_images/1348885195924017152/lrfCT2P__400x400.jpg" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Nahid Parvez</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-50 dark:text-gray-700 my-12 text-justify">
                <div className="max-w-7xl px-10 py-6 mx-auto rounded-lg shadow-sm border-2 border-indigo-700">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 24, 2022</span>
                        <Link rel="noopener noreferrer" to="/" className="px-2 py-1 font-bold rounded dark:bg-indigo-900 dark:text-gray-50">javascript</Link>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline">Ques. how does prototypical inheritance work?</h2>
                        <p className="mt-2">
                            JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
                            <br /><br />
                            Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).
                            <br /><br />
                            JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.
                            <br /><br />
                            When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
                        </p>
                    </div>
                    <div className="flex  justify-end mt-4">

                        <div>
                            <div className="flex items-center">
                                <img src="https://pbs.twimg.com/profile_images/1348885195924017152/lrfCT2P__400x400.jpg" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Nahid Parvez</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-50 dark:text-gray-700 my-12 text-justify">
                <div className="max-w-9xl px-10 py-6 mx-auto rounded-lg shadow-sm border-2 border-indigo-700">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 24, 2022</span>
                        <Link rel="noopener noreferrer" to="/" className="px-2 py-1 font-bold rounded dark:bg-indigo-900 dark:text-gray-50">React</Link>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline">Ques. What is a unit test? Why should we write unit tests?</h2>
                        <p className="mt-2">
                            Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input.
                            <br />
                            For React components, this could mean checking that the component renders correctly for the specified props.
                            <br />
                            In other words, writing unit tests means that we write code that verifies that our code works as expected. We'll go over the other goals of unit testing later on.
                            <br /><br />
                            These are valid points, but I found that the main advantage of writing unit tests is how it improves the way you write code.

                            If you write your tests during or even before implementing a feature, it gives you a better picture of the requirements. You automatically end up writing code that's easy to test, loosely coupled, and easier to reason about.

                            I first read about this way of thinking about tests in The Pragmatic Programmer by David Thomas and Andrew Hunt. I didn't know this when I started writing my first unit tests, but in retrospect, that's exactly what happened.

                            When I started writing tests for some of the legacy code at my company, it was never only writing tests. It always went hand in hand with refactoring quite a bit of the code, so that it would be easier to test it in the first place.

                            For example, I'd extract functions from components into a separate file to make this code easier to test. This naturally resulted in less coupled code.
                        </p>
                    </div>
                    <div className="flex  justify-end mt-4">

                        <div>
                            <div className="flex items-center">
                                <img src="https://pbs.twimg.com/profile_images/1348885195924017152/lrfCT2P__400x400.jpg" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Nahid Parvez</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-50 dark:text-gray-700 my-12 text-justify">
                <div className="max-w-7xl px-10 py-6 mx-auto rounded-lg shadow-sm border-2 border-indigo-700">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 24, 2022</span>
                        <Link rel="noopener noreferrer" to="/" className="px-2 py-1 font-bold rounded dark:bg-indigo-900 dark:text-gray-50">JavaScript</Link>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline">Ques. React vs. Angular vs. Vue?</h2>
                        <p className="mt-2">
                            There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.

                            React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.

                            They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.

                            Each framework is component-based and allows the rapid creation of UI features.

                            However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.
                            <br /><br />
                            --React <br />
                            React doesn’t enforce a specific project structure, and as you can see from the official “Hello World” example below, you can start using React with just a few lines of code.React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.

                            React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.

                            Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.

                            React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.

                            Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive.
                            <br /> <br />
                            --Vue <br />
                            The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.

                            Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.

                            Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.

                            Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.

                            SFCs are the recommended way to organize code in Vue.js projects, especially larger ones. Tools such as Webpack or Browserify are required to transpile SFCs into working JavaScript code.
                            <br /><br />
                            --Angular <br />
                            In this article, I’m discussing Angular 2, and not the first version of the framework which is now known as AngularJS.

                            AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

                            Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.

                            Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.

                            Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.

                            Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct services that can be reused.

                            Angular is built in TypeScript, so its use is recommended to get the most seamless experience, but plain JavaScript is also supported.
                        </p>
                    </div>
                    <div className="flex  justify-end mt-4">

                        <div>
                            <div className="flex items-center">
                                <img src="https://pbs.twimg.com/profile_images/1348885195924017152/lrfCT2P__400x400.jpg" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Nahid Parvez</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;