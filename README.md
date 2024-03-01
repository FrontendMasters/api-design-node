> [!NOTE]
> This repo is from an archived version of the course. Watch the latest version of the course on [frontendmasters.com](https://frontendmasters.com/courses/api-design-nodejs-v4/).

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
