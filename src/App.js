import React, { useState, useEffect } from 'react';


const App = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      console.log("12");
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          setItems(responseJson);
          console.log(responseJson);
        });
        console.log("24");
    });
  
      return (
        <ul>
          dsdsđa
          {items.map(item => (
            <li key={item.id}>
              UserName{item.user}
            </li>
          ))}
        </ul>
      );


};
  
  export default App;