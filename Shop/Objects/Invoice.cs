﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Shop
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Накладная.
    /// </summary>
    // *** Start programmer edit section *** (Invoice CustomAttributes)

    // *** End programmer edit section *** (Invoice CustomAttributes)
    [AutoAltered()]
    [Caption("Накладная")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("InvoiceE", new string[] {
            "Number as \'Номер\'",
            "Status as \'Статус\'",
            "CreateDate as \'Дата оформления\'",
            "Order as \'Заказ\'",
            "Order.Number as \'Number\'",
            "CustomerName as \'Поулчатель\'",
            "TotalSum as \'Сумма заказа\'",
            "TotalWeight as \'Вес заказа\'",
            "Note as \'Прмечание\'",
            "ShipmentDateTime as \'Дата и время отгрузки\'",
            "ResponsiblePerson as \'Товар выдал\'",
            "ResponsiblePerson.LastName as \'Last name\'"}, Hidden=new string[] {
            "Order.Number",
            "ResponsiblePerson.LastName"})]
    [AssociatedDetailViewAttribute("InvoiceE", "InvoiceItem", "InvoiceItemE", true, "", "Список товаров к выдаче", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("InvoiceE", "Order", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Number")]
    [MasterViewDefineAttribute("InvoiceE", "ResponsiblePerson", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "LastName")]
    [View("InvoiceL", new string[] {
            "Number as \'Номер\'",
            "Status as \'Статус\'",
            "CreateDate as \'Дата оформления\'",
            "Order.Number as \'Номер заказа\'",
            "CustomerName as \'Получатель\'",
            "TotalSum as \'Сумма заказа\'",
            "TotalWeight as \'Вес заказа\'",
            "Note as \'Примечание\'",
            "ShipmentDateTime as \'Дата и время отгрузки\'",
            "ResponsiblePerson.LastName as \'Товар выдал\'"})]
    public class Invoice : IIS.Shop.Document
    {
        
        private IIS.Shop.InvoiceStatus fStatus = IIS.Shop.InvoiceStatus.New;
        
        private System.DateTime fShipmentDateTime;
        
        private double fTotalSum;
        
        private double fTotalWeight;
        
        private string fNote;
        
        private string fCustomerName;
        
        private IIS.Shop.Employee fResponsiblePerson;
        
        private IIS.Shop.Order fOrder;
        
        private IIS.Shop.DetailArrayOfInvoiceItem fInvoiceItem;
        
        // *** Start programmer edit section *** (Invoice CustomMembers)

        // *** End programmer edit section *** (Invoice CustomMembers)

        
        /// <summary>
        /// Status.
        /// </summary>
        // *** Start programmer edit section *** (Invoice.Status CustomAttributes)

        // *** End programmer edit section *** (Invoice.Status CustomAttributes)
        public virtual IIS.Shop.InvoiceStatus Status
        {
            get
            {
                // *** Start programmer edit section *** (Invoice.Status Get start)

                // *** End programmer edit section *** (Invoice.Status Get start)
                IIS.Shop.InvoiceStatus result = this.fStatus;
                // *** Start programmer edit section *** (Invoice.Status Get end)

                // *** End programmer edit section *** (Invoice.Status Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Invoice.Status Set start)

                // *** End programmer edit section *** (Invoice.Status Set start)
                this.fStatus = value;
                // *** Start programmer edit section *** (Invoice.Status Set end)

                // *** End programmer edit section *** (Invoice.Status Set end)
            }
        }
        
        /// <summary>
        /// ShipmentDateTime.
        /// </summary>
        // *** Start programmer edit section *** (Invoice.ShipmentDateTime CustomAttributes)

        // *** End programmer edit section *** (Invoice.ShipmentDateTime CustomAttributes)
        public virtual System.DateTime ShipmentDateTime
        {
            get
            {
                // *** Start programmer edit section *** (Invoice.ShipmentDateTime Get start)

                // *** End programmer edit section *** (Invoice.ShipmentDateTime Get start)
                System.DateTime result = this.fShipmentDateTime;
                // *** Start programmer edit section *** (Invoice.ShipmentDateTime Get end)

                // *** End programmer edit section *** (Invoice.ShipmentDateTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Invoice.ShipmentDateTime Set start)

                // *** End programmer edit section *** (Invoice.ShipmentDateTime Set start)
                this.fShipmentDateTime = value;
                // *** Start programmer edit section *** (Invoice.ShipmentDateTime Set end)

                // *** End programmer edit section *** (Invoice.ShipmentDateTime Set end)
            }
        }
        
        /// <summary>
        /// TotalSum.
        /// </summary>
        // *** Start programmer edit section *** (Invoice.TotalSum CustomAttributes)

        // *** End programmer edit section *** (Invoice.TotalSum CustomAttributes)
        public virtual double TotalSum
        {
            get
            {
                // *** Start programmer edit section *** (Invoice.TotalSum Get start)

                // *** End programmer edit section *** (Invoice.TotalSum Get start)
                double result = this.fTotalSum;
                // *** Start programmer edit section *** (Invoice.TotalSum Get end)

                // *** End programmer edit section *** (Invoice.TotalSum Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Invoice.TotalSum Set start)

                // *** End programmer edit section *** (Invoice.TotalSum Set start)
                this.fTotalSum = value;
                // *** Start programmer edit section *** (Invoice.TotalSum Set end)

                // *** End programmer edit section *** (Invoice.TotalSum Set end)
            }
        }
        
        /// <summary>
        /// TotalWeight.
        /// </summary>
        // *** Start programmer edit section *** (Invoice.TotalWeight CustomAttributes)

        // *** End programmer edit section *** (Invoice.TotalWeight CustomAttributes)
        public virtual double TotalWeight
        {
            get
            {
                // *** Start programmer edit section *** (Invoice.TotalWeight Get start)

                // *** End programmer edit section *** (Invoice.TotalWeight Get start)
                double result = this.fTotalWeight;
                // *** Start programmer edit section *** (Invoice.TotalWeight Get end)

                // *** End programmer edit section *** (Invoice.TotalWeight Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Invoice.TotalWeight Set start)

                // *** End programmer edit section *** (Invoice.TotalWeight Set start)
                this.fTotalWeight = value;
                // *** Start programmer edit section *** (Invoice.TotalWeight Set end)

                // *** End programmer edit section *** (Invoice.TotalWeight Set end)
            }
        }
        
        /// <summary>
        /// Note.
        /// </summary>
        // *** Start programmer edit section *** (Invoice.Note CustomAttributes)

        // *** End programmer edit section *** (Invoice.Note CustomAttributes)
        [StrLen(255)]
        public virtual string Note
        {
            get
            {
                // *** Start programmer edit section *** (Invoice.Note Get start)

                // *** End programmer edit section *** (Invoice.Note Get start)
                string result = this.fNote;
                // *** Start programmer edit section *** (Invoice.Note Get end)

                // *** End programmer edit section *** (Invoice.Note Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Invoice.Note Set start)

                // *** End programmer edit section *** (Invoice.Note Set start)
                this.fNote = value;
                // *** Start programmer edit section *** (Invoice.Note Set end)

                // *** End programmer edit section *** (Invoice.Note Set end)
            }
        }
        
        /// <summary>
        /// CustomerName.
        /// </summary>
        // *** Start programmer edit section *** (Invoice.CustomerName CustomAttributes)

        // *** End programmer edit section *** (Invoice.CustomerName CustomAttributes)
        [StrLen(255)]
        public virtual string CustomerName
        {
            get
            {
                // *** Start programmer edit section *** (Invoice.CustomerName Get start)

                // *** End programmer edit section *** (Invoice.CustomerName Get start)
                string result = this.fCustomerName;
                // *** Start programmer edit section *** (Invoice.CustomerName Get end)

                // *** End programmer edit section *** (Invoice.CustomerName Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Invoice.CustomerName Set start)

                // *** End programmer edit section *** (Invoice.CustomerName Set start)
                this.fCustomerName = value;
                // *** Start programmer edit section *** (Invoice.CustomerName Set end)

                // *** End programmer edit section *** (Invoice.CustomerName Set end)
            }
        }
        
        /// <summary>
        /// Накладная.
        /// </summary>
        // *** Start programmer edit section *** (Invoice.ResponsiblePerson CustomAttributes)

        // *** End programmer edit section *** (Invoice.ResponsiblePerson CustomAttributes)
        [PropertyStorage(new string[] {
                "ResponsiblePerson"})]
        public virtual IIS.Shop.Employee ResponsiblePerson
        {
            get
            {
                // *** Start programmer edit section *** (Invoice.ResponsiblePerson Get start)

                // *** End programmer edit section *** (Invoice.ResponsiblePerson Get start)
                IIS.Shop.Employee result = this.fResponsiblePerson;
                // *** Start programmer edit section *** (Invoice.ResponsiblePerson Get end)

                // *** End programmer edit section *** (Invoice.ResponsiblePerson Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Invoice.ResponsiblePerson Set start)

                // *** End programmer edit section *** (Invoice.ResponsiblePerson Set start)
                this.fResponsiblePerson = value;
                // *** Start programmer edit section *** (Invoice.ResponsiblePerson Set end)

                // *** End programmer edit section *** (Invoice.ResponsiblePerson Set end)
            }
        }
        
        /// <summary>
        /// Накладная.
        /// </summary>
        // *** Start programmer edit section *** (Invoice.Order CustomAttributes)

        // *** End programmer edit section *** (Invoice.Order CustomAttributes)
        [PropertyStorage(new string[] {
                "Заказ"})]
        public virtual IIS.Shop.Order Order
        {
            get
            {
                // *** Start programmer edit section *** (Invoice.Order Get start)

                // *** End programmer edit section *** (Invoice.Order Get start)
                IIS.Shop.Order result = this.fOrder;
                // *** Start programmer edit section *** (Invoice.Order Get end)

                // *** End programmer edit section *** (Invoice.Order Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Invoice.Order Set start)

                // *** End programmer edit section *** (Invoice.Order Set start)
                this.fOrder = value;
                // *** Start programmer edit section *** (Invoice.Order Set end)

                // *** End programmer edit section *** (Invoice.Order Set end)
            }
        }
        
        /// <summary>
        /// Накладная.
        /// </summary>
        // *** Start programmer edit section *** (Invoice.InvoiceItem CustomAttributes)

        // *** End programmer edit section *** (Invoice.InvoiceItem CustomAttributes)
        public virtual IIS.Shop.DetailArrayOfInvoiceItem InvoiceItem
        {
            get
            {
                // *** Start programmer edit section *** (Invoice.InvoiceItem Get start)

                // *** End programmer edit section *** (Invoice.InvoiceItem Get start)
                if ((this.fInvoiceItem == null))
                {
                    this.fInvoiceItem = new IIS.Shop.DetailArrayOfInvoiceItem(this);
                }
                IIS.Shop.DetailArrayOfInvoiceItem result = this.fInvoiceItem;
                // *** Start programmer edit section *** (Invoice.InvoiceItem Get end)

                // *** End programmer edit section *** (Invoice.InvoiceItem Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Invoice.InvoiceItem Set start)

                // *** End programmer edit section *** (Invoice.InvoiceItem Set start)
                this.fInvoiceItem = value;
                // *** Start programmer edit section *** (Invoice.InvoiceItem Set end)

                // *** End programmer edit section *** (Invoice.InvoiceItem Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "InvoiceE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View InvoiceE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("InvoiceE", typeof(IIS.Shop.Invoice));
                }
            }
            
            /// <summary>
            /// "InvoiceL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View InvoiceL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("InvoiceL", typeof(IIS.Shop.Invoice));
                }
            }
        }
    }
}
