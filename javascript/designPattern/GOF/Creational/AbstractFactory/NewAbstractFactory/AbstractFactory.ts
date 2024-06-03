interface Document {
  getFormat(): string;
  createContent(): string;
}

interface DocumentFactory {
  createDocument(format: string): Document;
}

class PDFDocument implements Document {
  getFormat() {
    return 'PDF';
  }

  createContent() {
    return 'This is a PDF document.';
  }
}

class TextDocument implements Document {
  getFormat() {
    return 'Text';
  }

  createContent() {
    return 'This is a text document.';
  }
}

class PDFDocumentFactory implements DocumentFactory {
  createDocument(format: string): Document {
    if (format.toLowerCase() === 'pdf') {
      return new PDFDocument();
    }
    throw new Error('Unsupported document format');
  }
}

class TextDocumentFactory implements DocumentFactory {
  createDocument(format: string): Document {  
    if (format.toLowerCase() === 'text') {
      return new TextDocument();
    }
    throw new Error('Unsupported document format');
  }
}


function generateDocument(factory: DocumentFactory, format: string): string {
  const document = factory.createDocument(format);
  console.log(`Creating a document in ${document.getFormat()} format`);
  return document.createContent();
}

const pdfFactory = new PDFDocumentFactory();
const textFactory = new TextDocumentFactory();

const pdfContent = generateDocument(pdfFactory, 'PDF');
console.log(pdfContent); // Output: Creating a document in PDF format, This is a PDF document.

const textContent = generateDocument(textFactory, 'Text');
console.log(textContent); // Output: Creating a document in Text format, This is a text document.

/**
 * Benefits:

Family of Related Objects: 
    Ensures consistency in creating documents with different formats (PDF, Text) using a common interface.
Flexibility: 
    You can easily add new document formats by implementing new concrete factories without modifying the client code.
Decoupling: 
    Client code doesn't depend on specific document implementations, making it more maintainable.

This example demonstrates the Abstract Factory pattern for creating different types of documents based on the chosen format. 
You can extend this concept further by:

Adding more concrete document formats (e.g., HTML).
Including specific methods for each document format (e.g., PDFDocument.addPage()).
 */