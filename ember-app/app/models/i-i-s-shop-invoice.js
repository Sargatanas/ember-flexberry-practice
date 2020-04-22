import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';
import { observer } from '@ember/object';
import { once } from '@ember/runloop';
import { on } from '@ember/object/evented';
import Builder from 'ember-flexberry-data/query/builder';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as InvoiceMixin
} from '../mixins/regenerated/models/i-i-s-shop-invoice';

import DocumentModel from './i-i-s-shop-document';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-shop-document';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = DocumentModel.extend(InvoiceMixin, Validations, {
  init: function () {
    var order = this.get('order');
    if (order) {
      this.set('oldOrder', order.get('id'));
    }
  },
  oldOrder: null,

  // Сумма заказа
  _totalSumChanged: on('init', observer('order', function() {
    once(this, '_totalSumCompute');
  })),
  _totalSumCompute: function() {
    var order = this.get('order');
    let result = 0;
    if (order) {
      result = order.get('totalSum');
    }
    this.set('totalSum', result);
  },

  // Список товаров к выдаче
  _invoiceItemChanged: on('init', observer('order', function() {
    once(this, '_invoiceItemCompute');
  })),
  _invoiceItemCompute: function() {
    var me = this;
    var order = me.get('order');
    if (order) {
      var orderId = order.get('id');
      var oldOrder = me.get('oldOrder');

      if (orderId !== oldOrder) {
        var store = this.get('store');
        let builder = new Builder(store, 'i-i-s-shop-order');
        builder.selectByProjection('OrderE');
        builder.byId(orderId);

        var currentItems = me.get('invoiceItem');
        currentItems.forEach(function (item) {
          item.deleteRecord();
        });

        store.query('i-i-s-shop-order', builder.build())
          .then(function (orders) {
            orders.forEach(function(order) {
              var totalWeight = 0;
              var items = order.get('orderItem');

              items.forEach(function(item) {
                var product = item.get('product');
                var amount = Number(item.get('amount'));
                  var price = item.get('priceWTaxes');
                  var totalSum = item.get('totalSum');

                  var weight = Number(product.get('weight'));
                  var sumWeight = Number((weight * amount).toFixed(3));
                  totalWeight += sumWeight;

                  var invoiceItem = store.createRecord('i-i-s-shop-invoice-item', {
                    amount: amount,
                    weight: sumWeight,
                    price: price,
                    totalSum: totalSum,
                    product: product
                  });

                  invoiceItem.save();
              });
              me.set('totalWeight', totalWeight);
            });
          });
      }
    }
  },
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;

