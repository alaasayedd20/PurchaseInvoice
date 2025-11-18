export interface InvoiceItem {
  itemCode: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface InvoiceDetails {
  invoiceDate: string;
  supplierName: string;
  notes: string;
}

