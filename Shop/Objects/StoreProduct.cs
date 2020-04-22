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
    /// Товар на складе.
    /// </summary>
    // *** Start programmer edit section *** (StoreProduct CustomAttributes)

    // *** End programmer edit section *** (StoreProduct CustomAttributes)
    [AutoAltered()]
    [Caption("Товар на складе")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("StoreProductE", new string[] {
            "Product as \'Товар\'",
            "Product.Name as \'Name\'",
            "Amount as \'Количество\'"}, Hidden=new string[] {
            "Product.Name"})]
    [MasterViewDefineAttribute("StoreProductE", "Product", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    public class StoreProduct : ICSSoft.STORMNET.DataObject
    {
        
        private int fAmount;
        
        private IIS.Shop.Product fProduct;
        
        private IIS.Shop.Storehouse fStorehouse;
        
        // *** Start programmer edit section *** (StoreProduct CustomMembers)

        // *** End programmer edit section *** (StoreProduct CustomMembers)

        
        /// <summary>
        /// Amount.
        /// </summary>
        // *** Start programmer edit section *** (StoreProduct.Amount CustomAttributes)

        // *** End programmer edit section *** (StoreProduct.Amount CustomAttributes)
        public virtual int Amount
        {
            get
            {
                // *** Start programmer edit section *** (StoreProduct.Amount Get start)

                // *** End programmer edit section *** (StoreProduct.Amount Get start)
                int result = this.fAmount;
                // *** Start programmer edit section *** (StoreProduct.Amount Get end)

                // *** End programmer edit section *** (StoreProduct.Amount Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (StoreProduct.Amount Set start)

                // *** End programmer edit section *** (StoreProduct.Amount Set start)
                this.fAmount = value;
                // *** Start programmer edit section *** (StoreProduct.Amount Set end)

                // *** End programmer edit section *** (StoreProduct.Amount Set end)
            }
        }
        
        /// <summary>
        /// Товар на складе.
        /// </summary>
        // *** Start programmer edit section *** (StoreProduct.Product CustomAttributes)

        // *** End programmer edit section *** (StoreProduct.Product CustomAttributes)
        [PropertyStorage(new string[] {
                "Товар"})]
        public virtual IIS.Shop.Product Product
        {
            get
            {
                // *** Start programmer edit section *** (StoreProduct.Product Get start)

                // *** End programmer edit section *** (StoreProduct.Product Get start)
                IIS.Shop.Product result = this.fProduct;
                // *** Start programmer edit section *** (StoreProduct.Product Get end)

                // *** End programmer edit section *** (StoreProduct.Product Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (StoreProduct.Product Set start)

                // *** End programmer edit section *** (StoreProduct.Product Set start)
                this.fProduct = value;
                // *** Start programmer edit section *** (StoreProduct.Product Set end)

                // *** End programmer edit section *** (StoreProduct.Product Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Shop.Storehouse.
        /// </summary>
        // *** Start programmer edit section *** (StoreProduct.Storehouse CustomAttributes)

        // *** End programmer edit section *** (StoreProduct.Storehouse CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Склад"})]
        public virtual IIS.Shop.Storehouse Storehouse
        {
            get
            {
                // *** Start programmer edit section *** (StoreProduct.Storehouse Get start)

                // *** End programmer edit section *** (StoreProduct.Storehouse Get start)
                IIS.Shop.Storehouse result = this.fStorehouse;
                // *** Start programmer edit section *** (StoreProduct.Storehouse Get end)

                // *** End programmer edit section *** (StoreProduct.Storehouse Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (StoreProduct.Storehouse Set start)

                // *** End programmer edit section *** (StoreProduct.Storehouse Set start)
                this.fStorehouse = value;
                // *** Start programmer edit section *** (StoreProduct.Storehouse Set end)

                // *** End programmer edit section *** (StoreProduct.Storehouse Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "StoreProductE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View StoreProductE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("StoreProductE", typeof(IIS.Shop.StoreProduct));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of StoreProduct.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfStoreProduct CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfStoreProduct CustomAttributes)
    public class DetailArrayOfStoreProduct : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Shop.DetailArrayOfStoreProduct members)

        // *** End programmer edit section *** (IIS.Shop.DetailArrayOfStoreProduct members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type StoreProduct by index.
        /// </summary>
        /// <summary>
        /// Adds object with type StoreProduct.
        /// </summary>
        public DetailArrayOfStoreProduct(IIS.Shop.Storehouse fStorehouse) : 
                base(typeof(StoreProduct), ((ICSSoft.STORMNET.DataObject)(fStorehouse)))
        {
        }
        
        public IIS.Shop.StoreProduct this[int index]
        {
            get
            {
                return ((IIS.Shop.StoreProduct)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Shop.StoreProduct dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
