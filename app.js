const lunr = require('lunr');
const docs = require('./src/data.json');

const idx = lunr(function() {
  this.ref('name')
  this.field('text')

  docs.forEach(function(doc) {
    this.add(doc)
  }, this)
})

const res = idx.search('bright');
console.log('[res] ', res[0].matchData);