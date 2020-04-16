import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  amount: DS.attr('number'),
  weight: DS.attr('number'),
  price: DS.attr('number'),
  totalSum: DS.attr('number'),
  product: DS.belongsTo('i-i-s-shop-product', { inverse: null, async: false }),
  invoice: DS.belongsTo('i-i-s-shop-invoice', { inverse: 'invoiceString', async: false })
});

export let ValidationRules = {
  amount: {
    descriptionKey: 'models.i-i-s-shop-invoice-string.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  weight: {
    descriptionKey: 'models.i-i-s-shop-invoice-string.validations.weight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  price: {
    descriptionKey: 'models.i-i-s-shop-invoice-string.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-invoice-string.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-shop-invoice-string.validations.product.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  invoice: {
    descriptionKey: 'models.i-i-s-shop-invoice-string.validations.invoice.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('InvoiceStringE', 'i-i-s-shop-invoice-string', {
    amount: attr('Количество', { index: 1 }),
    weight: attr('Вес', { index: 2 }),
    price: attr('Цена', { index: 3 }),
    totalSum: attr('Сумма по позиции', { index: 4 }),
    product: belongsTo('i-i-s-shop-product', 'Товар', {

    }, { index: 0, displayMemberPath: 'name' })
  });
};
