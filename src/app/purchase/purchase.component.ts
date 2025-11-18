import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { DetailsComponent } from "../details/details.component";
import { ItemsComponent } from "../items/items.component";
import { SummaryComponent } from "../summary/summary.component";
import { InvoiceItem } from '../invoice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [FormsModule, CommonModule,DetailsComponent, ItemsComponent, SummaryComponent],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent implements OnInit {
  invoiceDate: string = '';
  supplierName: string = '';
  notes: string = '';

  items: InvoiceItem[] = [];

  availableSuppliers: string[] = ['A Company', 'B Distributor', 'C Corporation'];
  availableItems = [
        { code: '1234', name: 'USB Drive 128GB'},
        { code: '4321', name: 'Wireless Mouse'},
        { code: '5678', name: 'Monitor 27-inch'},
    ];

  ngOnInit(): void {
    this.invoiceDate = this.getCurrentDate();
    this.addItem();
  }

  get grandTotal(): number {
    return this.items.reduce((acc, item) => acc + item.total, 0);
  }

  onValueChange(item: InvoiceItem): void {
    item.total = item.quantity * item.unitPrice;
  }

  constructor(private cdr: ChangeDetectorRef) {}

    onItemCodeChange(changedItem: InvoiceItem): void {
        const selectedItem = this.availableItems.find(
            item => item.code === changedItem.itemCode
        );

        if (selectedItem) {
            changedItem.itemName = selectedItem.name;

            this.cdr.detectChanges();
        } else {
        }
    }

  addItem(): void {
    this.items.push({ itemCode: '', itemName: '', quantity: 1, unitPrice: 0.00, total: 0.00 });
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  messageText: string = '';
isSuccess: boolean = false;
showAlert: boolean = false;
createInvoice(): void {
    this.showAlert = false;
    this.messageText = '';

    if (!this.invoiceDate || !this.supplierName) {
        this.messageText = " Please enter the Invoice Date and Supplier Name.";
        this.isSuccess = false;
        this.showAlert = true;
        return;
    }

    const validItems = this.items.filter(item =>
        item.itemCode &&
        item.quantity > 0 &&
        item.unitPrice > 0
    );

    if (validItems.length === 0) {
        this.messageText = " Please add at least one item with a valid Code, Quantity (> 0), and Unit Price (> 0).";
        this.isSuccess = false;
        this.showAlert = true;
        return;
    }

    const invoiceData = {
        invoiceDate: this.invoiceDate,
        supplierName: this.supplierName,
        notes: this.notes,
        items: validItems.map(item => ({
            itemCode: item.itemCode,
            itemName: item.itemName,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            total: item.total
        })),
        grandTotal: this.grandTotal
    };

    console.log(invoiceData);

    this.messageText = ' Invoice successfully created and printed to console.';
    this.isSuccess = true;
    this.showAlert = true;
}

  private getCurrentDate(): string {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  }
}
