import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
import OrderStatusEnum from '../../../enums/i-i-s-shop-order-status';

export let Model = Mixin.create({
  status: DS.attr('i-i-s-shop-order-status', { defaultValue: OrderStatusEnum.New }),
  shipmentDate: DS.attr('date'),
  paymentDate: DS.attr('date'),
  /**
    Non-stored property.

    @property totalSum
  */
  totalSum: DS.attr('number'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'totalSumCompute' method in model class (outside of this mixin) if you want to compute value of 'totalSum' property.

    @method _totalSumCompute
    @private
    @example
      ```javascript
      _totalSumChanged: on('init', observer('totalSum', function() {
        once(this, '_totalSumCompute');
      }))
      ```
  */
  _totalSumCompute: function() {
    let result = (this.totalSumCompute && typeof this.totalSumCompute === 'function') ? this.totalSumCompute() : null;
    this.set('totalSum', result);
  },
  manager: DS.belongsTo('i-i-s-shop-employee', { inverse: null, async: false }),
  orderString: DS.hasMany('i-i-s-shop-order-string', { inverse: 'order', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-shop-order.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shipmentDate: {
    descriptionKey: 'models.i-i-s-shop-order.validations.shipmentDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  paymentDate: {
    descriptionKey: 'models.i-i-s-shop-order.validations.paymentDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-order.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  manager: {
    descriptionKey: 'models.i-i-s-shop-order.validations.manager.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  orderString: {
    descriptionKey: 'models.i-i-s-shop-order.validations.orderString.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-shop-document'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OrderE', 'i-i-s-shop-order', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления', { index: 2 }),
    totalSum: attr('Стоимость заказа', { index: 4 }),
    paymentDate: attr('Дата оплаты', { index: 5 }),
    shipmentDate: attr('Дата отгрузки', { index: 6 }),
    manager: belongsTo('i-i-s-shop-employee', 'Менеджер', {

    }, { index: 3, displayMemberPath: 'lastName' }),
    orderString: hasMany('i-i-s-shop-order-string', 'Содержимое заказа', {
      amount: attr('Количество', { index: 1 }),
      priceWTaxes: attr('Цена с налогом', { index: 2 }),
      totalSum: attr('Сумма по позиции', { index: 3 }),
      product: belongsTo('i-i-s-shop-product', 'Товар', {

      }, { index: 0, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('OrderL', 'i-i-s-shop-order', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления', { index: 2 }),
    manager: belongsTo('i-i-s-shop-employee', 'Менеджер', {
      lastName: attr('Менеджер', { index: 3 })
    }, { index: -1, hidden: true }),
    totalSum: attr('Стоимость заказа', { index: 4 }),
    paymentDate: attr('Дата оплаты', { index: 5 }),
    shipmentDate: attr('Дата отгрузки', { index: 6 })
  });
};
