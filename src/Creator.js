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

    const handleDelete = (item) => {
        console.log(item)
    }
  return (
      <div>

          <form onSubmit={handlesubmit}>
            <input value={website} placeholder="ex. amazon, bliz.net, steam" onChange={(e) => setwebsite(e.target.value)}/>
            <input value={password} placeholder="ex.55#aCbobnotDead" onChange={(e) => setpassword(e.target.value)}/>
            <button> add password to vault</button>
          </form>
          <table >
              {sites.map(entry =>
                  <tr>
                      <td>{entry.site}</td><td>{entry.password}</td><button onClick={() => handleDelete(entry)}>delete</button>
                  </tr>
              )}
          </table>

      </div>
  )
}

