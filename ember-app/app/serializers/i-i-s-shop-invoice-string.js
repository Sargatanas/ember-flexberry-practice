import { Serializer as InvoiceStringSerializer } from
  '../mixins/regenerated/serializers/i-i-s-shop-invoice-string';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(InvoiceStringSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
