import React, {useEffect} from 'react';
import {API, Auth} from "aws-amplify";


export default function Creator(){


    const [id, setid] = React.useState('')
    const [userid, setuser] = React.useState('')
    const [site, setsite] = React.useState('')
    const [password, setpassword] = React.useState('')
    const [sites, setsitepassword] = React.useState([])
    useEffect(() =>{
        API.get('cs453api5','/passwords/id').then((dbres) => console.log(dbres));},[])

    const handlesubmit = e =>{
        e.preventDefault()
        API.post('cs453api5','/passwords',{
                body:{
                    site:site,
                    password:password
                }
        }
        )}
  return (
      <div>
        <h1>test from creator</h1>
          <form onSubmit={handlesubmit}>
              <input value={site} placeholder="ex. amazon, bliz.net, steam" onChange={(e) => setsite(e.target.value)}/>
              <input value={password} placeholder="ex.55#aCbobnotDead" onChange={(e) => setpassword(e.target.value)}/>
              <button> add password to vault</button>
          </form>

      </div>
  )
}

