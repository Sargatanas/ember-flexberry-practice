export default {
  projections: {
    StorehouseE: {
      number: {
        __caption__: 'Номер'
      },
      address: {
        __caption__: 'Адрес'
      },
      storekeeper: {
        __caption__: 'Кладовщик'
      },
      storeProduct: {
        __caption__: 'Список товаров',
        amount: {
          __caption__: 'Количество'
        },
        product: {
          __caption__: 'Товар'
        }
      }
    },
    StorehouseL: {
      number: {
        __caption__: 'Номер'
      },
      address: {
        __caption__: 'Адрес'
      },
      storekeeper: {
        __caption__: 'Кладовщик',
        lastName: {
          __caption__: 'Кладовщик'
        }
      }
    }
  },
  validations: {
    number: {
      __caption__: 'Номер'
    },
    address: {
      __caption__: 'Адрес'
    },
    storekeeper: {
      __caption__: 'Кладовщик'
    },
    storeProduct: {
      __caption__: 'Список товаров'
    }
  }
};
