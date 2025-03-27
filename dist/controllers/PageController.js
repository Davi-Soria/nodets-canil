"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
const pets_1 = require("../models/pets");
const home = (req, res) => {
    let list = pets_1.pet.getAll();
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuOptions)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg',
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = pets_1.pet.getFromType('dog');
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuOptions)('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg',
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = pets_1.pet.getFromType('cat');
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuOptions)('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg',
        },
        list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = pets_1.pet.getFromType('fish');
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuOptions)('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg',
        },
        list
    });
};
exports.fishes = fishes;
