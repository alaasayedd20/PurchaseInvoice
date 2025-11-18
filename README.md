# PurchaseInvoice
This project is a modern, single-file frontend application built with Angular (Standalone Components). It is designed to allow users to efficiently enter and detail purchase invoices, manage multiple line items, and ensure simple, client-side validation before submission.

✨ Key Features

Invoice Details Entry: Easily input the invoice date, select the supplier name, and add general notes.

Automatic Calculation: Totals for each item line and the final Grand Total are calculated instantly upon input changes (Quantity or Unit Price).

Robust Client-Side Validation:

Validation ensures all required header fields (Date, Supplier) are present.

Each item line requires a selected Item Code, Quantity > 0, and Unit Price > 0.

Enhanced User Feedback: Instead of browser popups, clear, non-blocking UI messages are displayed: a Red banner for submission errors and a Green banner for successful submission.

Responsive Design: Clean and professional interface styled using Tailwind CSS, ensuring optimal display across mobile, tablet, and desktop devices.

💻 Tech Stack

Framework: Angular (using modern Standalone Components structure).

Language: TypeScript

📝 How to Use

Enter Details: Fill in the "Invoice Date" and "Supplier Name".

Manage Items: Click the "Add Item" button to add new lines.

Input Data: Select the Item Code, and enter the Quantity and Unit Price.

Submit: Click the "Create Invoice" button.

On Error: A red error message will appear at the top, and the submission will be blocked.

On Success: A green success message will appear, and the complete invoice object will be logged to the browser console.

