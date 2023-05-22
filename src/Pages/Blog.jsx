import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div data-theme="garden">
            <div className='bg-gray-300 p-4'>
            <h1 className='text-center text-4xl font-bold'>Frequantly asked question</h1>
            <p className='text-center text-xl font-semibold text-gray-500'>Here you find your all answer</p>
            </div>
            <div className='w-1/2 mx-auto mt-10 pb-10'>
               <h1 className='text-xl font-bold mt-4'><strong>1. Q:</strong> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>

               <p className='text-gray-700 text-base font-semibold'><strong>Ans:</strong>A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires. 
               <br />The use of access tokens and refresh tokens improves security by minimizing the exposure of the user's credentials . When a user log in generate Access Token . Then user authorise for access . When token validation end then generate new token. Those are reapted process.
               <br />They store local storage , Session Storage and cookies.
               </p>
               <h1 className='text-xl font-bold mt-4'><strong>2. Q:</strong> Compare SQL and NoSQL databases?</h1>

               <p className='text-gray-700 text-base font-semibold'><strong>Ans:</strong> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
               <h1 className='text-xl font-bold mt-4'><strong>3. Q:</strong> What is express js? What is Nest JS ?</h1>
               <p className='text-gray-700 text-base font-semibold'><strong>Ans:</strong> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
               <h1 className='text-xl font-bold mt-4'><strong>4. Q:</strong> What is MongoDB aggregate and how does it work ?</h1>
               <p className='text-gray-700 text-base font-semibold'><strong>Ans:</strong> The aggregation pipeline allows you to perform complex operations that will allow any range of insights into your collections.The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    );
};

export default Blog;