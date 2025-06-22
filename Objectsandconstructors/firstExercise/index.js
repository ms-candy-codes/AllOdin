function Books(title, author, numOfPages,readOrNot, info){
    if (!new.target){
        throw Error("Call new to call constructor");
    }
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readOrNot = readOrNot;
    this.info = title + " by " + author + ", " + numOfPages +" pages, "+ readOrNot + ".";
}

const firstBook = new Books("the hobbit", "JJ something", "229", "read");
console.log(firstBook.info);

const secondBook = new Books("Harry Potter and the Socerer's Stone", "J. K. Rowling", "309", "Read");
console.log(secondBook.info);


