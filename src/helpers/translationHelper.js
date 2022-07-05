export class TranslationHelper {
  constructor(root) {
    this._symbol = "-";
    this._root = root;
  }

  addRequiredFields() {
    this._addFieldsToItem(this._root, "0");
    return this._root;
  }

  //Private, do not use
  _addFieldsToItem(item, id) {
    if (!item) return;

    let i = 0;

    for (let key in item) {
      if (typeof item[key] == "object")
        this._addFieldsToItem(item[key], `${id}${this._symbol}${i++}`);
    }

    item.id = id;
    item.isChecked = true;
  }

  updateIsChecked(id, value) {
    if (!this._root || !id) return;

    const element = this.getElementByID(id);
    if (!element) return;

    if (typeof element != "object") return;

    this._updateIsCheckedDownstream(element, value);
    this._updateIsCheckedUpstream(element);
  }

  //Private, do not use
  _updateIsCheckedDownstream(element, value) {
    if (!element || typeof element != "object") return;
    element.isChecked = value;
    for (let key in element) {
      if (element[key] && typeof element[key] == "object") {
        this._updateIsCheckedDownstream(element[key], value);
      }
    }
  }

  //Private, do not use
  _updateIsCheckedUpstream(element) {
    const pathToElement = element.id.split(this._symbol);
    pathToElement.pop();

    //First two layers of data must be selected always
    if (pathToElement.length === 2) {
      return;
    }

    if (pathToElement.length === 0) return;

    const elementToHandle = this.getElementByID(
      pathToElement.join(this._symbol)
    );

    if (!elementToHandle || typeof elementToHandle != "object") return;

    let flag = false;

    for (let key in elementToHandle) {
      if (
        typeof elementToHandle[key] == "object" &&
        elementToHandle[key].isChecked
      ) {
        flag = true;
        break;
      }
    }

    elementToHandle.isChecked = flag;
    this._updateIsCheckedUpstream(elementToHandle);
  }

  getElementByID(id) {
    let path = id.split(this._symbol);
    path.shift();
    return this._getNextElement(this._root, path);
  }

  //Private, do not use
  _getNextElement(element, path) {
    if (!element) return undefined;

    if (!path || path.length === 0) return element;

    const index = path.shift();

    for (let key in element) {
      if (typeof element[key] == "object") {
        if (element[key].id.split(this._symbol).pop() === index) {
          return this._getNextElement(element[key], path);
        }
      }
    }

    return undefined;
  }

  formCardJSON() {
    if (!this._root) return undefined;
    this._prepareElementForConvertation(this._root);
    return this._root;
  }

  //Private, do not use
  _prepareElementForConvertation(element, parent, key) {
    if (!element) return;

    if (parent && !element.isChecked) {
      console.log(element);
      parent[key] = undefined;
      return;
    }

    element.id = undefined;
    element.isChecked = undefined;

    for (let key in element) {
      if (element[key] && typeof element[key] == "object") {
        this._prepareElementForConvertation(element[key], element, key);
      }
    }
  }
}
