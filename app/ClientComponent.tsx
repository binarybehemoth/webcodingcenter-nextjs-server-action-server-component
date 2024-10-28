//'use client';
import { revalidatePath } from "next/cache";
import {action} from "./actions";

function sleep(ms:number): Promise<void>{
   return new Promise((resolve)=>{
      setTimeout(()=>{
         resolve();
      },ms);
   })
}

async function getItem(id: number, ms:number) {
  await sleep(ms);
  //action();
  console.log('getting item for id ' + id);
  const res = await fetch(
    // The `fetch` function is automatically memoized and the result is cached
    `https://webcodingcenter-nextjs-server-action-server-component.vercel.app/api?id=${id}`,{cache:'force-cache' }
  );
  //revalidatePath("/api");
  //console.log(await res.json());
  return await res.json();
}

interface T{
  x:Number
}

export async function ClientComponent() {
  console.log('Rendering <ClientComponent />');
  //const [x,setX] = useState<Array<T>>([]);
  let xx:T[]=[];
  //const b = useRef<HTMLButtonElement>(null);
  //useEffect(()=>{
    //if (b.current) b.current.disabled = true;

    await Promise.all([getItem(0,1000),getItem(0,2000),getItem(0,3000),getItem(2,4000),getItem(2,5000),getItem(2,6000)]).then(x=>{
      xx=x;
    //  if (b.current) b.current.disabled = false;


    });
  //},[x]);
  //let act = useCallback(()=>{
//    console.log(x);
    //setX(xx);
  //},[x]);
  return <>
            <p>{xx.map(e=>`${e.x} `)}</p>
            <button onClick={action}>act</button>;
         </>
}
