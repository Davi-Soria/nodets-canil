"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuOptions = void 0;
const createMenuOptions = (activeMenu) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }
    return returnObject;
};
exports.createMenuOptions = createMenuOptions;
