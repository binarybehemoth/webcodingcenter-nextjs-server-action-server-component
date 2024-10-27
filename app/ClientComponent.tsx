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
  console.log(await getItem(0)); // cache MISS : This function is only executed the first time
  console.log(await getItem(1)); // cache MISS
  console.log(await getItem(2)); // cache MISS
  console.log(await getItem(1)); // cache HIT
  return <p>The last call to getItem() didn&apost fire fetch().</p>;
}
