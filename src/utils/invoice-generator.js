export function generateInvoiceNumber() {
    return `INV-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }
  
  export const productList = [
    { code: '001', name: 'Azucar', unitPrice: 2500 },
    { code: '002', name: 'Harina', unitPrice: 2200 },
    { code: '003', name: 'Aceite', unitPrice: 10000 },
    { code: '004', name: 'Leche', unitPrice: 4500 },
    { code: '005', name: 'Arroz', unitPrice: 3200 },
    { code: '006', name: 'Sal', unitPrice: 1500 },
    { code: '007', name: 'Café', unitPrice: 8500 },
    { code: '008', name: 'Pasta', unitPrice: 2800 },
    { code: '009', name: 'Frijoles', unitPrice: 3000 },
    { code: '010', name: 'Lentejas', unitPrice: 3100 },
    { code: '011', name: 'Atún', unitPrice: 6500 },
    { code: '012', name: 'Pan', unitPrice: 2000 },
    { code: '013', name: 'Queso', unitPrice: 12000 },
    { code: '014', name: 'Jamón', unitPrice: 9000 },
    { code: '015', name: 'Huevos', unitPrice: 1800 },
    { code: '016', name: 'Mantequilla', unitPrice: 7000 },
    { code: '017', name: 'Chocolate', unitPrice: 5500 },
    { code: '018', name: 'Galletas', unitPrice: 3000 },
    { code: '019', name: 'Yogur', unitPrice: 2500 },
    { code: '020', name: 'Cereal', unitPrice: 6000 },
  ];