
class Library {
    constructor(bookList){
        this.bookList = bookList;
        this.issueBook = {};

    }

    getBooklist() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issuedBook(bookName,user) {
        if (this.issueBook[bookName] == undefined) {
            this.issueBook[bookName] = user;

        }
        else {console.log('book already issued');}
    }

    returnBook(bookName) {
        delete this.issueBook[bookName];
    }
}