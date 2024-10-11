import  { useEffect } from 'react'

function useTitle(title) {
    useEffect(()=>{ 
        document.title=`${title}/ Shopping Cart`

    })
  
    return null;
}

export default useTitle
