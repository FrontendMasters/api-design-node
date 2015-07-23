var router = require('express').Router();

// api router will mount other routers
// for all our resources. Each resource directory
// has a resourceRoutes.js file with the router ready to go,
// require them and mount them to their respective routes below

router.use('/users', /* require the router*/);
router.use('/categories', /* require the router*/);
router.use('/posts', /* require the router*/);

module.exports = router;
