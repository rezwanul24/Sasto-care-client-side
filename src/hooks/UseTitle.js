import { useEffect } from "react"

const UseTitle=(title)=>{
    useEffect(()=>{
        document.title=`${title}-Sasto Care`;
    },[title])
}
export default UseTitle;