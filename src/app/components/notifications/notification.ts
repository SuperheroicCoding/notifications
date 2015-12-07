export enum Category{info, warning, error}

export interface INotification {
  title: string;
  text: string;
  category: Category;
}

export class Notification implements INotification {
  constructor(public title:string, public text:string, public category:Category) {
  }

  public get categoryName(){
    return Category[this.category];
  }
}
