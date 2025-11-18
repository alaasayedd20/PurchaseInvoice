import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() set invoiceDate(value: string) { this.invoiceDateChange.emit(value); }
  @Output() invoiceDateChange = new EventEmitter<string>();

  @Input() set supplierName(value: string) { this.supplierNameChange.emit(value); }
  @Output() supplierNameChange = new EventEmitter<string>();

  @Input() set notes(value: string) { this.notesChange.emit(value); }
  @Output() notesChange = new EventEmitter<string>();

  @Input() availableSuppliers: string[] = []; 
}
