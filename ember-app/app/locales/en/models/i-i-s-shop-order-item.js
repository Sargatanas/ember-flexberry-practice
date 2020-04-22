export default {
  projections: {
    OrderItemE: {
      product: {
        __caption__: 'product',
        name: {
          __caption__: 'name'
        },
        price: {
          __caption__: 'price'
        },
        weight: {
          __caption__: 'weight'
        }
      },
      amount: {
        __caption__: 'amount'
      },
      priceWTaxes: {
        __caption__: 'priceWTaxes'
      },
      totalSum: {
        __caption__: 'totalSum'
      }
    }
  },
  validations: {
    amount: {
      __caption__: 'amount'
    },
    priceWTaxes: {
      __caption__: 'priceWTaxes'
    },
    totalSum: {
      __caption__: 'totalSum'
    },
    product: {
      __caption__: 'product'
    },
    order: {
      __caption__: 'order'
    }
  }
};
