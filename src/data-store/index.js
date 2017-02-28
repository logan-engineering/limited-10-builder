import Product from "./product";
import { getLinkedOptions } from './linked-options'

const DEFAULT_STORE = {
  collection: {
    title: ''
  },
  products: [],
  productsById: {},
  optionsById: {},
  variants: [],
  linkedOptions: {},
  selections: {},
  quantity: 1
};

export default function (config, client, cache) {
  const self = this;
  const store = DEFAULT_STORE;

  const buildStore = (results) => {
    Object.assign(store.collection, results.collection);
    results.products.forEach((product, index) => {
      const p = new Product(product);
      store.products.push(p);
      store.productsById[p.product_id] = p;

      p.options.forEach((option) => {
        store.optionsById[option.id] = option;
        store.selections[option.id] = option.values[0];
      });

      store.variants = store.variants.concat(p.variants)
    });

    store.linkedOptions = getLinkedOptions(config.products.linkedOptions, store.products)

    if (typeof self.ready === 'function') {
      self.ready();
    }
  };

  this.init = () => {
    const cachedStore = cache.get('store');

    if (cachedStore) {
      buildStore(cachedStore);
    } else {
      client.fetch()
        .then((results) => {
          cache.set('store', results, config.cacheLifetime);
          buildStore(results);
        });
    }
  };

  this.state = store;
};
