import {Request, Response} from "express";
import {pet} from "../models/pets";
import {createMenuOptions} from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
    let query:string = req.query.q as string;

    let list = pet.getFromName(query);

    res.render("pages/page", {
        menu: createMenuOptions(''),
        list
    });
};
