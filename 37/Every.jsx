import{ues State, useEffect}from'react"
const Every=()=>{ 
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log('렌더링 될때마다 실행')})
    return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
export default Every 
   
