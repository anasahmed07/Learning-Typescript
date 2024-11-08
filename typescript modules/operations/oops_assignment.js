// Define a class named `Book`.  Create an instance of this class.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    // Constructor to initialize the properties of the class
    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        Book.numOfItem++;
    }
    // Method to display the book details
    Book.prototype.displayBookDetails = function () {
        console.log("Title: ".concat(this.title));
        console.log("Author: ".concat(this.author));
    };
    Book.prototype.printNumofItems = function () {
        return Book.numOfItem;
    };
    Book.numOfItem = 0;
    return Book;
}());
// Create an instance of the Book class
var book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
book1.displayBookDetails();
var book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
book2.displayBookDetails();
var Ebook = /** @class */ (function (_super) {
    __extends(Ebook, _super);
    function Ebook(title, author, pages, fileSize) {
        var _this = _super.call(this, title, author, pages) || this;
        _this.fileSize = fileSize;
        return _this;
    }
    // Override the displayBookDetails method to include the file size
    Ebook.prototype.displayBookDetails = function () {
        console.log("Title: ".concat(this.title));
    };
    return Ebook;
}(Book));
var ebook1 = new Ebook("The Great Gatsby", "F. Scott Fitzgerald", 180, 1024);
ebook1.displayBookDetails();
console.log(ebook1.printNumofItems());
