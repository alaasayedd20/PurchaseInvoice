import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  @Input() grandTotal: number = 0;
  @Input() formValid: boolean = false;
  @Output() createInvoiceEvent = new EventEmitter<void>();
}
