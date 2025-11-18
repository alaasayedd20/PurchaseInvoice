import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvoiceItem } from '../invoice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  @Input() items: InvoiceItem[] = [];
  @Input() availableItems: any[] = [];
  @Output() addItemEvent = new EventEmitter<void>();

  @Output() removeItemEvent = new EventEmitter<number>();

  @Output() valueChangeEvent = new EventEmitter<InvoiceItem>();
  @Output() codeChangeEvent = new EventEmitter<InvoiceItem>();
}
