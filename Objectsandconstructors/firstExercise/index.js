function Books(title, author, numOfPages,readOrNot, info){
    if (!new.target){
        throw Error("Call new to call constructor");
    }
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readOrNot = readOrNot;
    this.info = title + " by " + author + ", " + numOfPages + ", "+ readOrNot + ".";
}

const firstBook = new Books("the hobbit", "JJ something", "229 pages", "read");
console.log(firstBook.info)


