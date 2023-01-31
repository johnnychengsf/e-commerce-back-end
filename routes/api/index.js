const router = require('express').Router();

const seedCategories = require('../../seeds/category-seeds');
const seedProducts = require('../../seeds/product-seeds');
const seedTags = require('../../seeds/tag-seeds');
const seedProductTags = require('../../seeds/product-tag-seeds');

const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

router.post('/seed', async (req, res) => {

   try {
      await seedCategories();
      await seedProducts();
      await seedTags();
      await seedProductTags();
      res.status(200).json({
         status: "Success"
      });
   } catch (err) {
      res.status(500).json(err);
   }
});

module.exports = router;
