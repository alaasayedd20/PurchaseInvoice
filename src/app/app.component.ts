import { Component } from '@angular/core';
import { PurchaseComponent } from "./purchase/purchase.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PurchaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'purchaceInvoice';
}
