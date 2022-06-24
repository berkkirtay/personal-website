export class Blog {
    private _id: string;
    private content: string;
    private title: string;
    private date: string;

    constructor(
        _id: string,
        content: string,
        title: string,
        date: string
    ) {
        this._id = _id;
        this.content = content;
        this.title = title;
        this.date = date;
    }

    public getDocumentObj() {
        return {
            _id: this._id,
            content: this.content,
            title: this.title,
            date: this.date
        }
    }
}