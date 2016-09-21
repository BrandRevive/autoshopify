var shopifyAPI = require('shopify-node-api')

exports.setConfig = function(config) {
  Shopify = new shopifyAPI(config) 
}

// Replace the name of a variant with a new name for every product in the shop
exports.replaceVariantName = function(oldName, newName) {
  // Update the data
  function updateData(data, oldName, newName) {
    var products = data['products']
    products.forEach(function(product, index, array) {
      var variants = product['variants'];
      variants.forEach(function(variant, index, array) {
        if (variant.title == oldName) {
          variant.title = newName
          variant.option1 = newName
        }
      })
    })
    return data
  }
  // Make the requests
  Shopify.get('/admin/products.json', function(err, data, headers) {
    if (err) { console.log(err); return }
    data = updateData(data, oldName, newName)
    data['products'].forEach(function(product, index, array) {
      var id = product['id']
      var product_data = {'product': product}
      Shopify.put(`/admin/products/${id}.json`, product_data, function(err, data, headers) {
        if (err) console.log(err)
      })
    })
  })
}
