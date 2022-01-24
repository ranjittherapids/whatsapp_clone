import React,{useMemo,useCallback} from 'react';

export default function Wowman() {

    function foo() {
        return 'bar';
      }
      
       const memoizedCallback = useCallback(foo, []);
       const memoizedResult = useMemo(foo, []);

  console.log(memoizedCallback,"memoizedCallback")
   console.log(memoizedResult,"memoizedResult")






  return <div>helo wow man </div>;
}
