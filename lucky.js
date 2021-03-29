function handleRequest(request) {
  const luckyNumber = Math.floor(Math.random() * 100) + 1;

  const jsonBody = JSON.stringify({
    luckyNumber,
  });

  return new Response(jsonBody, {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
