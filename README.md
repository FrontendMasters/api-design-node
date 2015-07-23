## TODO
* `server/config/config.js` is incomplete. You must merge the config object in there with the appropriate file depending on what the `NODE_ENV` is. So for instance, if `NODE_ENV` is testing then we should merge config with `config/testing.js` object and then export that merged object in `config.js`;
* `server/api/api.js` has setup mounted routes for our resources. Its expected a router to exist for each resource.
* Use a HTTP client to test your api. You should be able to do a get request to all resource and get a success. Remeber to follow the mounted routes from `server/server.js` all the way to the resources' router to determine the route for the resource. We are three routers deep!!
