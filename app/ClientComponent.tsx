'use client';

import {useEffect, useState} from 'react';
import {action} from "./actions";
async function getItem(id: Number) {
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
  useEffect(()=>{
    async function get(n:Number){
      return await getItem(n);
    }
    (Promise.all([get(0), get(1), get(2), get(1), get(1), get(1)])as Promise<[T,T,T,T,T,T]>).then(a=>{
      setX(a);
      console.log(x);
    })
  });
  return <>
            <button onClick={action}>{x.map(e=>`${e.x} `)}</button>;
         </>
}
