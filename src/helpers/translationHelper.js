export class TranslationHelper {
  constructor() {
    this._symbol = "-";
  }

  addRequiredFields(incomingTranslation) {
    this.addFieldsToItem(incomingTranslation, 0);
    console.log(incomingTranslation);
    console.log(this.getElementByID(incomingTranslation, "0-1-0"));
    return incomingTranslation;
  }

  addFieldsToItem(item, id) {
    if (!item) return;

    let i = 0;
    for (let key in item) {
      if (typeof item[key] == "object")
        this.addFieldsToItem(item[key], `${id}${this._symbol}${i++}`);
    }

    item.id = id;
    item.isChecked = true;
  }

  updateIsChecked(root, id, value) {
    if (!root || !id || !value) return;

    const element = this.getElementByID(root, id);
    if (!element) return;

    if (typeof element == "object") this.recursiveUpdateIsChecked();
  }

  getElementByID(root, id) {
    let path = id.split(this._symbol);
    path.shift();
    const element = this.getNextElement(root, path);
    return element;
  }

  getNextElement(element, path) {
    if (!element) return undefined;

    if (!path || path.length === 0) return element;

    const index = path.shift();

    for (let key in element) {
      if (typeof element[key] == "object") {
        if (element[key].id.split(this._symbol).pop() === index) {
          return this.getNextElement(element[key], path);
        }
      }
    }

    return undefined;
  }
}
