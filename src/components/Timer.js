
import {useState,useEffect} from 'react' ;

function Timer(){
const[time,setTime]=useState(0)
useEffect(()=>{
   const interval = setInterval(()=>{setTime(time=>time+1)},1000);
return ()=>clearInterval(interval)
},[])

return(
    <h3>You'hv been on ths page for {time} seconds.</h3>
)
}
export default Timer