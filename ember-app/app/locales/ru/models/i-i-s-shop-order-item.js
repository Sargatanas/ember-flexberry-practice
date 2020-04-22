export default {
  projections: {
    OrderItemE: {
      product: {
        __caption__: 'Товар',
        name: {
          __caption__: 'Name'
        },
        price: {
          __caption__: 'Price'
        },
        weight: {
          __caption__: 'Weight'
        }
      },
      amount: {
        __caption__: 'Количество'
      },
      priceWTaxes: {
        __caption__: 'Цена с налогом'
      },
      totalSum: {
        __caption__: 'Сумма по позиции'
      }
    }
  },
  validations: {
    amount: {
      __caption__: 'Количество'
    },
    priceWTaxes: {
      __caption__: 'Цена с налогом'
    },
    totalSum: {
      __caption__: 'Сумма по позиции'
    },
    product: {
      __caption__: 'Товар'
    },
    order: {
      __caption__: 'order'
    }
  }
};
