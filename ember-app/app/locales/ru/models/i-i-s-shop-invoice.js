export default {
  projections: {
    InvoiceE: {
      number: {
        __caption__: 'Номер'
      },
      status: {
        __caption__: 'Статус'
      },
      createDate: {
        __caption__: 'Дата оформления'
      },
      customerName: {
        __caption__: 'Получатель'
      },
      totalSum: {
        __caption__: 'Сумма заказа'
      },
      totalWeight: {
        __caption__: 'Вес заказа'
      },
      note: {
        __caption__: 'Примечание'
      },
      shipmentDateTime: {
        __caption__: 'Дата и время отгрузки'
      },
      order: {
        __caption__: 'Заказ'
      },
      responsiblePerson: {
        __caption__: 'Товар выдал'
      },
      invoiceString: {
        __caption__: 'Список товаров к выдаче',
        amount: {
          __caption__: 'Количество'
        },
        weight: {
          __caption__: 'Вес'
        },
        price: {
          __caption__: 'Цена'
        },
        totalSum: {
          __caption__: 'Сумма по позиции'
        },
        product: {
          __caption__: 'Товар'
        }
      }
    },
    InvoiceL: {
      number: {
        __caption__: 'Номер'
      },
      status: {
        __caption__: 'Статус'
      },
      createDate: {
        __caption__: 'Дата оформления'
      },
      order: {
        __caption__: 'Номер заказа',
        number: {
          __caption__: 'Номер заказа'
        }
      },
      customerName: {
        __caption__: 'Получатель'
      },
      totalSum: {
        __caption__: 'Сумма заказа'
      },
      totalWeight: {
        __caption__: 'Вес заказа'
      },
      note: {
        __caption__: 'Примечание'
      },
      shipmentDateTime: {
        __caption__: 'Дата и время отгрузки'
      },
      responsiblePerson: {
        __caption__: 'Товар выдал',
        lastName: {
          __caption__: 'Товар выдал'
        }
      }
    }
  },
  validations: {
    status: {
      __caption__: 'Статус'
    },
    shipmentDateTime: {
      __caption__: 'Дата и время отгрузки'
    },
    totalSum: {
      __caption__: 'Сумма заказа'
    },
    totalWeight: {
      __caption__: 'Вес заказа'
    },
    note: {
      __caption__: 'Примечание'
    },
    customerName: {
      __caption__: 'Получатель'
    },
    responsiblePerson: {
      __caption__: 'Товар выдал'
    },
    order: {
      __caption__: 'Заказ'
    },
    invoiceString: {
      __caption__: 'Список товаров к выдаче'
    }
  }
};
