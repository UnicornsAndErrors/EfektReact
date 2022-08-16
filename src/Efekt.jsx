import React, {useState, useEffect} from 'react'

const Efekt = () => {
    const [podaci, setPodaci] = useState("");

      const [ispis, setIspis] = useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${podaci}`)
  .then(response => response.json())
  .then(json => setIspis(json))
    },[podaci]);
  return (
    <div className="App">
        <button onClick={() => setPodaci("posts")}>Posts</button>
        <button onClick={() => setPodaci("users")}>Users</button>
        <button onClick={() => setPodaci("comments")}>Comments</button>
        <h1>{podaci}</h1>
        {ispis.map((item) => {
            return <p key={item.id}>{JSON.stringify(item)}</p>
        })}
    </div>
  )
}

export default Efekt