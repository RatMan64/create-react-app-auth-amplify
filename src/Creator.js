import React, {useEffect} from 'react';
import {API, Auth} from "aws-amplify";
import {v4} from "uuid";

export default function Creator(){



    const [objid, setid] = React.useState('')
    const [userid, setuser] = React.useState('')
    const [dobject, setdel] = React.useState('')
    const [website, setwebsite] = React.useState('')
    const [password, setpassword] = React.useState('')
    const [sites, setsitepassword] = React.useState([])
    useEffect(() =>{
        API.get('cs453api5','/passwords/id').then((dbres) =>
        setsitepassword([...sites, ...dbres]));},[])


    const handlesubmit = e =>{
        e.preventDefault()
        let randid = v4()

        API.post('cs453api5','/passwords',{
          body:{
            id:randid,
            site:website,
            password:password
          }
        }).then(()=>setsitepassword([...sites, {
          id:randid,
          site:website,
          password:password
        } ]))
      setpassword('')
      setwebsite('')
    }


    const handlerandpass = () =>{
      const nums = "0123456789"
      const lower ="abcdefghijklmnopqrstuvwxyz"
      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const symbols = "!@$%^&*()<>,.?/[]{}-=_+"


      var chars = nums + lower + upper + symbols
      var passwordlen = 9
      console.log("this button was pushed" )
      var randpassword = ""
      for (var i = 0; i<=passwordlen; i++){
        var randnum = Math.floor(Math.random() * chars.length)
        randpassword += chars.substring(randnum, randnum +1)
      }
      console.log(randpassword)
      setpassword(randpassword)
    }

    const handleDelete = (e, entryid) => {
      e.preventDefault()

      console.log(entryid)
      API.del('cs453api5', '/passwords/object/:id', {
        body:{
          id:entryid
        }
      } ).then( ()=> setsitepassword([...sites.filter((I) => I.id !== entryid )]))
    }
  return (
      <div>
        <h1>wellcome to the vault</h1>

          <form onSubmit={handlesubmit}>
            <input value={website} placeholder="ex. amazon, bliz.net, steam" onChange={(e) => setwebsite(e.target.value)}/>
            <input value={password} placeholder="ex.55#aCbobnotDead" onChange={(e) => setpassword(e.target.value)}/>
            <button> add password to vault</button>
          </form>
        <button onClick={handlerandpass}> randompassword </button>

          <table  >
              {sites.map(entry =>
                  <tr>
                      <td>{entry.site}</td><td>{entry.password}</td><button onClick={(e) => {setdel(entry.id); handleDelete(e, entry.id)}}>delete</button>
                  </tr>
              )}
          </table>

      </div>
  )
}

