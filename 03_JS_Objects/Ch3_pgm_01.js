// Using variables to represent a book

var bookTitle1;
var bookAuthor1;

var bookTitle2;
var bookAuthor2;

var bookTitle3;
var bookAuthor3;

bookTitle1 = "The Hobbit";
bookAuthor1 = "J. R. R. Tolkien";
 
bookTitle2 = " The Faith";
bookAuthor2 = "A. Ziya ";

bookTitle3 = "The Fall";
bookAuthor3 = "Z. H. Zara";


console.log(bookTitle1 + " by " + bookAuthor1);
console.log(bookTitle2 + " by " + bookAuthor2);
console.log(bookTitle3 + " by " + bookAuthor3);
 
var book=[
    { title : "Un Said Story" , author : "Guru"},
    { title : "Un Story" , author : "Guru Swamy"},
    { title : "Un Said " , author : "Anbu"},
    { title : "It say's" , author : "Ann"},
 { title : "Un Told story" , author : "Guna"},
    { title : "Insights" , author : "Rin"},
    { title : "Unforgetable" , author : "Obito"},
    { title : "Unfortune" , author : "Cas"},
    { title : "Paid" , author : "Manyu"},
    { title : "Pain" , author : "Prakesh"}
];

for (let i = 0; i < book.length; i++) {
    console.log(book[i].title + " by " +book[i].author);
}





/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */