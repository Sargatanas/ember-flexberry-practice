import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  amount: DS.attr('number'),
  priceWTaxes: DS.attr('number'),
  totalSum: DS.attr('number'),
  product: DS.belongsTo('i-i-s-shop-product', { inverse: null, async: false }),
  order: DS.belongsTo('i-i-s-shop-order', { inverse: 'orderString', async: false })
});

export let ValidationRules = {
  amount: {
    descriptionKey: 'models.i-i-s-shop-order-string.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  priceWTaxes: {
    descriptionKey: 'models.i-i-s-shop-order-string.validations.priceWTaxes.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-order-string.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-shop-order-string.validations.product.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  order: {
    descriptionKey: 'models.i-i-s-shop-order-string.validations.order.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OrderStringE', 'i-i-s-shop-order-string', {
    amount: attr('Количество', { index: 1 }),
    priceWTaxes: attr('Цена с налогом', { index: 2 }),
    totalSum: attr('Сумма по позиции', { index: 3 }),
    product: belongsTo('i-i-s-shop-product', 'Товар', {

    }, { index: 0, displayMemberPath: 'name' })
  });
};
