import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';
import { observer } from '@ember/object';
import { once } from '@ember/runloop';
import { on } from '@ember/object/evented';

import {
  defineProjections,
  ValidationRules,
  Model as OrderItemMixin
} from '../mixins/regenerated/models/i-i-s-shop-order-item';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, OrderItemMixin, Validations, {
  // Цена с налогом
  taxes: 10,
  _priceWTaxesChanged: on('init', observer('product', function() {
    once(this, '_priceWTaxesCompute');
  })),
  _priceWTaxesCompute: function() {
    var product = this.get('product');
    var result = 0;
    if (product) {
      var price = product.get('price');
      var taxes = this.get('taxes') / 100 + 1;
      result = (Number(price) * taxes);
    }

    this.set('priceWTaxes', result);
  },

  // Сумма по позиции
  _totalSumChanged: on('init', observer('priceWTaxes', 'amount', function() {
    once(this, '_totalSumCompute');
  })),
  _totalSumCompute: function() {
    var priceWTaxes = Number(this.get('priceWTaxes'));
    var amount = this.get('amount');
    var result = 0;
    if (priceWTaxes && amount) {
      result = (priceWTaxes * Number(amount));
    }

    this.set('totalSum', result);

    var order = this.get('order');
    var items = order.get('orderItem');
    var newSum = 0;
    items.forEach(function (item) {
      newSum += Number(item.get('totalSum'));
    });
    order.set('totalSum', newSum);
  },
});

defineProjections(Model);

export default Model;
