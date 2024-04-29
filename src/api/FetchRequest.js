import axios from "axios";
const domain = import.meta.env.VITE_REACT_APP_BACKEND_DOMAIN;
    
    export const GetRequest = async (cb,endPoint )=>{
      try{
        console.log(endPoint+" lp")
        let res = await axios.get(`${domain}${endPoint}`)
       cb(null,res)

      }
      catch(err)
      {
        cb(err,null)
      }
     
  };