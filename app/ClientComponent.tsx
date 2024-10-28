'use client';

import {useEffect, useState, useCallback, use} from 'react';
import {action} from "./actions";
async function getItem(id: Number) {
  action();
  console.log('getting item for id ' + id);
  const res = await fetch(
    // The `fetch` function is automatically memoized and the result is cached
    `https://webcodingcenter-nextjs-server-action-server-component.vercel.app/api?id=${id}`,{cache:'force-cache'}
  );
  //console.log(await res.json());
  return await res.json();
}

interface T{
  x:Number
}

export function ClientComponent() {
  console.log('Rendering <ClientComponent />');
  const [x,setX] = useState<Array<T>>([]);
  let xx:T[]=[];
  useEffect(()=>{
    Promise.all([getItem(0),getItem(0),getItem(0),getItem(2),getItem(2),getItem(2)]).then(x=>{xx=x});
  },[x]);
  let act = useCallback(()=>{
    
    setX(xx);
  },[x]);
  return <>
            <p>{x.map(e=>`${e.x} `)}</p>
            <button onClick={act}>act</button>;
         </>
}
