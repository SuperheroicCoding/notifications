import {Notification, Category} from '../components/notifications/notification';
import {NotificationService} from '../components/notifications/notification.service'

export class CategoryOption {
  public name:string;

  constructor(public key:Category) {
    this.name = Category[key];
  }
}

export class MainController {
  public creationDate:number;
  public notification:Notification = new Notification(undefined, undefined, Category.info);
  public categoryOptions:CategoryOption[];

  /* @ngInject */
  constructor(private toastr:Toastr, private NotificationService:NotificationService) {
    this.activate();
  }

  activate() {
    this.creationDate = 1449161095787;
    console.log(Category);
    this.categoryOptions = [new CategoryOption(Category.info), new CategoryOption(Category.warning), new CategoryOption(Category.error)];
  }

  showNotification() {
    if (typeof this.notification.category !== 'undefined') {

      this.NotificationService.addNotification(this.notification);
      // we need the trimmed value because ngMaterial's select adds a lot of space to the string value
      var categoryName = this.notification.categoryName;
      this.toastr[categoryName](
        `<span class="${categoryName}">
          <h6 class="md-title">${this.notification.title}</h6>
          <span class="md-caption">${this.notification.text}</span>
          </span>`
      );
    }
  }
}
