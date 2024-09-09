//@ts-nocheck
// we have to printer use for give customer when buy vending machine 1.report 2.subscription detail
abstract class Document {
    protected printer: Printer;
  
    constructor(printer: Printer) {
      this.printer = printer;
    }
  
    abstract print(): void;
  }
  

  class PDFDocument extends Document {
    private content: string;
  
    constructor(printer: Printer, content: string) {
      super(printer);
      this.content = content;
    }
  
    print(): void {
      return this.printer.printPDF(this.content);
    }
  }

  class WordDocument extends Document {
    private content: string;
  
    constructor(printer: Printer, content: string) {
      super(printer);
      this.content = content;
    }
  
    print(): void {
      return this.printer.printWord(this.content);
    }
  }

  class ExcelDocument extends Document {
    private content: string;
  
    constructor(printer: Printer, content: string) {
      super(printer);
      this.content = content;
    }
  
    print(): void {
      return this.printer.printExcel(this.content);
    }
  }
  

  interface Printer {
    printPDF(content: string): void;
    printWord(content: string): void;
    printExcel(content: string): void;
  }
  

  class LaserPrinter implements Printer {
    private type = 'Laser'
    printPDF(content: string): void {
      return `Printing PDF document using ${this.type} printer content is : ${content}`
    }
  
    printWord(content: string): void {
      return `Printing Word document using ${this.type} printer content is : ${content}`;
    }
  
    printExcel(content: string): void {
      return `Printing Excel document using ${this.type} printer content is : ${content}`;
    }
  }
  
  class InkjetPrinter implements Printer {
    private type = 'Inkjet'
    printPDF(content: string): void {
      return `Printing PDF document using ${this.type} printer content is : ${content}`;
    }
  
    printWord(content: string): void {
      return `Printing Word document using ${this.type} printer content is : ${content}`;
    }
  
    printExcel(content: string): void {
      return `Printing Excel document using ${this.type} printer content is : ${content}`;
    }
  }


console.log(`report with laser printer`)
const pdfReport = new PDFDocument(new LaserPrinter(), 'report');
console.log(pdfReport.print()); 
const wordReport = new WordDocument(new LaserPrinter(), 'report');
console.log(wordReport.print()); 
const excelReport = new ExcelDocument(new LaserPrinter(), 'report');
console.log(excelReport.print()); 

console.log('-----------------------')

console.log(`report with inkjet printer`)
const pdfSubscribeInkjet = new PDFDocument(new InkjetPrinter(), 'subscription detail');
console.log(pdfSubscribeInkjet.print()); 
const wordSubscribeInkjet = new WordDocument(new InkjetPrinter(), 'subscription detail');
console.log(wordSubscribeInkjet.print()); 
const excelSubscribeInkjet = new ExcelDocument(new InkjetPrinter(), 'subscription detail');
console.log(excelSubscribeInkjet.print()); 

