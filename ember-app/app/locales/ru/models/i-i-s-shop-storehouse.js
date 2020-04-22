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
        __caption__: 'Кладовщик',
        lastName: {
          __caption__: 'Last name'
        }
      },
      storeProduct: {
        __caption__: 'Список товаров',
        product: {
          __caption__: 'Товар',
          name: {
            __caption__: 'Name'
          }
        },
        amount: {
          __caption__: 'Количество'
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
