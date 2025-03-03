
import React, { useState } from 'react';
const componentData = [
    {
        title: 'Components in React',
        description: ' A React component is a reusable and self-contained building block that constitutes a part of a user interface.',
        syntax: `Alert- <div class='alert alert-warning'></div>`
    },
    {
        title: 'Props',
        description: 'Props are used to pass data from a parent to a child component.',
        syntax: `const MyComponent = (props) => {
        return <div>{props.name}</div>;
        };`
    },
    {
        title: 'React',
        description: 'React is a JavaScript library for building user interfaces.',
        syntax: `const element = <h1>Hello, world!</h1>;`,
    },
    {
        title: 'State',
        description: 'State is used to store data that can change over time within a component.',
        syntax: `const [state, setState] = useState(initialState);`
    },
    {
        title: 'JSX',
        description: 'JSX is a syntax extension for JavaScript that looks similar to XML or HTML.',
        syntax: `const element = <h1>Hello, world!</h1>;`
    }
    ];
export default function Nav(){
  const [data, setData] = useState(null); 

  const renderComponentDetails=()=>{
   return (
    <>
    {data===null?
        "Please Select an option":
    <div>
        <h2>{data?.title}</h2>
        <p>{data?.description}</p>
        <pre>{data?.syntax}</pre>
    </div>}
    </>
) 
}

  return (
    <div>
      <ul className="nav nav-tabs justify-content-evenly">
      {componentData.map((el,index)=>(
        <>
            <li key={index} className="nav-item">
                <a className={`nav-link ${data===el &&"active"}`} href="#" onClick={() =>{setData(el)}}>{el.title}</a>
            </li>
        </>
        ))}
        </ul>
      <div className='mt-5'>
        {renderComponentDetails()}
      </div>
    </div>
  );
};

