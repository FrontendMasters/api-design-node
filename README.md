## Getting started
* `npm i`

## Todo

create a basic server with express
that will send back the index.html file on a GET request to '/'
it should then send back jsonData on a GET to /data

## Fetch all branches locally

```
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all
```
