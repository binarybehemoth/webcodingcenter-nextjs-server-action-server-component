//'use client';

async function getItem(id: Number) {
  console.log('getting item for id ' + id);
  const res = await fetch(
    // The `fetch` function is automatically memoized and the result is cached
    `localhost/api?id=${id}`,{cache:'force-cache'}
  );
  console.log(res.json());
  return res.json();
}

export async function ClientComponent() {
  console.log('Rendering <ClientComponent />');
  getItem(0); // cache MISS : This function is only executed the first time
  getItem(1); // cache MISS
  getItem(2); // cache MISS
  getItem(1); // cache HIT
  return <p>The last call to getItem() didn&apost fire fetch().</p>;
}
