var url = "http://localhost:9000/posts"

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "title": "test-only" })
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
