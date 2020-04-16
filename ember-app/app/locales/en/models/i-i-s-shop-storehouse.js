export default {
  projections: {
    StorehouseE: {
      number: {
        __caption__: 'number'
      },
      address: {
        __caption__: 'address'
      },
      storekeeper: {
        __caption__: 'storekeeper'
      },
      storeProduct: {
        __caption__: 'storeProduct',
        amount: {
          __caption__: 'amount'
        },
        product: {
          __caption__: 'product'
        }
      }
    },
    StorehouseL: {
      number: {
        __caption__: 'number'
      },
      address: {
        __caption__: 'address'
      },
      storekeeper: {
        __caption__: 'storekeeper',
        lastName: {
          __caption__: 'lastName'
        }
      }
    }
  },
  validations: {
    number: {
      __caption__: 'number'
    },
    address: {
      __caption__: 'address'
    },
    storekeeper: {
      __caption__: 'storekeeper'
    },
    storeProduct: {
      __caption__: 'storeProduct'
    }
  }
};
