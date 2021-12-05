import React, {useEffect} from 'react';
import {API, Auth} from "aws-amplify";
import {v4} from "uuid";

export default function Creator(){



    const [id, setid] = React.useState('')
    const [userid, setuser] = React.useState('')
    const [website, setwebsite] = React.useState('')
    const [password, setpassword] = React.useState('')
    const [sites, setsitepassword] = React.useState([])
    useEffect(() =>{
        API.get('cs453api5','/passwords/id').then((dbres) =>
        setsitepassword([...sites, ...dbres]));},[])


    const handlesubmit = e =>{
        e.preventDefault()

        API.post('cs453api5','/passwords',{
          body:{
            id:v4(),
            site:website,
            password:password
          }
        })
    }
  return (
      <div>

          <form onSubmit={handlesubmit}>
            <input value={website} placeholder="ex. amazon, bliz.net, steam" onChange={(e) => setwebsite(e.target.value)}/>
            <input value={password} placeholder="ex.55#aCbobnotDead" onChange={(e) => setpassword(e.target.value)}/>
            <button> add password to vault</button>
          </form>
          <ul>
            {sites.map(entry => <li>{entry.site}{entry.password}</li>)}
          </ul>

      </div>
  )
}

