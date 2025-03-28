"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pets_1 = require("../models/pets");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => {
    let query = req.query.q;
    let list = pets_1.pet.getFromName(query);
    if (!query) {
        res.redirect("/");
        return;
    }
    ;
    res.render("pages/page", {
        menu: (0, createMenuObject_1.createMenuOptions)(''),
        list,
        query
    });
};
exports.search = search;
