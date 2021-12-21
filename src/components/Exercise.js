import React, { useState, useEffect, createContext, useContext } from 'react';

const Context = createContext('Context API')

function Exercise() {
    const [heading, setHeading] = useState('React Awesomesauce (Busy)');
    const [content, setContent] = useState('Loading...'); 

    useEffect( () => {
        setTimeout( () => {
            setHeading('React Awesomesauce')
            setContent('Done!')
        }, 5000)
    }, [heading, content])

    return (
        <Context.Provider value="Hi, There">
            <main>
                <h1>{heading}</h1>
                <p>{content}</p>
                <ContextConsume/>
            </main>
        </Context.Provider>
    )
}

function ContextConsume(props) {
    const con = useContext(Context)
    return (
        <p>context Consume is ...</p>
    )
}

export default Exercise;
