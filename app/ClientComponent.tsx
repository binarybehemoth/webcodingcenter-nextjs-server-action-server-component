//'use client';

async function getItem(id: Number) {
  console.log('getting item for id ' + id);
  const res = await fetch(
    // The `fetch` function is automatically memoized and the result is cached
    `https://webcodingcenter-nextjs-server-action-server-component.vercel.app/api?id=${id}`,{cache:'force-cache'}
  );
  //console.log(await res.json());
  return await res.json();
}

export async function ClientComponent() {
  console.log('Rendering <ClientComponent />');
  let a = [await getItem(0),await getItem(1),await getItem(2),await getItem(1)];
console.log(a);
  return <p>{a.map(e=>`${e.x} `)}</p>;
}
