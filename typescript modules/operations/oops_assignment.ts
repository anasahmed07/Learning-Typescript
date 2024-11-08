// Define a class named `Book`.  Create an instance of this class.

class Book {
    title: string;
    author: string;
    pages: number;
    static numOfItem = 0;
  // Constructor to initialize the properties of the class
  constructor( title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    Book.numOfItem++;
  }
  // Method to display the book details
  displayBookDetails(): void {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
  }
  printNumofItems() {
    return Book.numOfItem;
  }
}

// Create an instance of the Book class
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
book1.displayBookDetails();

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
book2.displayBookDetails();

class Ebook extends Book {
    fileSize: number;
    constructor(title: string, author: string, pages: number, fileSize: number) {
        super(title, author, pages);
        this.fileSize = fileSize;
    }
    // Override the displayBookDetails method to include the file size
    displayBookDetails(): void {
        console.log(`Title: ${this.title}`);
    }
}
const ebook1 = new Ebook("The Great Gatsby", "F. Scott Fitzgerald", 180, 1024);
ebook1.displayBookDetails();
console.log(ebook1.printNumofItems());