import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
import InvoiceStatusEnum from '../../../enums/i-i-s-shop-invoice-status';

export let Model = Mixin.create({
  status: DS.attr('i-i-s-shop-invoice-status', { defaultValue: InvoiceStatusEnum.New }),
  shipmentDateTime: DS.attr('date'),
  totalSum: DS.attr('number'),
  totalWeight: DS.attr('number'),
  note: DS.attr('string'),
  customerName: DS.attr('string'),
  responsiblePerson: DS.belongsTo('i-i-s-shop-employee', { inverse: null, async: false }),
  order: DS.belongsTo('i-i-s-shop-order', { inverse: null, async: false }),
  invoiceString: DS.hasMany('i-i-s-shop-invoice-string', { inverse: 'invoice', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shipmentDateTime: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.shipmentDateTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  totalWeight: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.totalWeight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  note: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.note.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  customerName: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.customerName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  responsiblePerson: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.responsiblePerson.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  order: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.order.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  invoiceString: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.invoiceString.__caption__',
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
  modelClass.defineProjection('InvoiceE', 'i-i-s-shop-invoice', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления', { index: 2 }),
    customerName: attr('Получатель', { index: 4 }),
    totalSum: attr('Сумма заказа', { index: 5 }),
    totalWeight: attr('Вес заказа', { index: 6 }),
    note: attr('Примечание', { index: 7 }),
    shipmentDateTime: attr('Дата и время отгрузки', { index: 8 }),
    order: belongsTo('i-i-s-shop-order', 'Заказ', {

    }, { index: 3, displayMemberPath: 'number' }),
    responsiblePerson: belongsTo('i-i-s-shop-employee', 'Товар выдал', {

    }, { index: 9, displayMemberPath: 'lastName' }),
    invoiceString: hasMany('i-i-s-shop-invoice-string', 'Список товаров к выдаче', {
      amount: attr('Количество', { index: 1 }),
      weight: attr('Вес', { index: 2 }),
      price: attr('Цена', { index: 3 }),
      totalSum: attr('Сумма по позиции', { index: 4 }),
      product: belongsTo('i-i-s-shop-product', 'Товар', {

      }, { index: 0, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('InvoiceL', 'i-i-s-shop-invoice', {
    number: attr('Номер', { index: 0 }),
    status: attr('Статус', { index: 1 }),
    createDate: attr('Дата оформления', { index: 2 }),
    order: belongsTo('i-i-s-shop-order', 'Номер заказа', {
      number: attr('Номер заказа', { index: 3 })
    }, { index: -1, hidden: true }),
    customerName: attr('Получатель', { index: 4 }),
    totalSum: attr('Сумма заказа', { index: 5 }),
    totalWeight: attr('Вес заказа', { index: 6 }),
    note: attr('Примечание', { index: 7 }),
    shipmentDateTime: attr('Дата и время отгрузки', { index: 8 }),
    responsiblePerson: belongsTo('i-i-s-shop-employee', 'Товар выдал', {
      lastName: attr('Товар выдал', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
