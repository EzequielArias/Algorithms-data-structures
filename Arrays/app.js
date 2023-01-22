"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var fs = require("fs");
var People = /** @class */ (function () {
    function People() {
    }
    People.prototype.create = function (newClient, filename) {
        var newPerson = this.read(filename);
        var arr = JSON.stringify(__spreadArray(__spreadArray([], newPerson, true), [newClient], false));
        fs.writeFileSync(filename, arr);
        return newClient;
    };
    People.prototype.read = function (filename) {
        // Probamos en leer y devolver los datos dentro de un array
        var data = fs.readFileSync(filename, 'utf-8');
        return JSON.parse(data);
    };
    People.prototype.update = function (name, data, filename) {
        var mod = this.read(filename);
        this.content = mod;
        var i = this.content.findIndex(function (el) { return el["name"] === name; });
        this.content[i]["name"] = name;
        this.content[i]["email"] = data.email;
        this.content[i]["lastName"] = data.lastName;
        this.content[i]["nickName"] = data.nickName;
        fs.writeFileSync(filename, JSON.stringify(this.content));
        return "el usuario ".concat(name, " fue actualizado correctamente");
    };
    return People;
}());
var teo = new People();
//console.log(teo.read('./data.json'))
//console.log(teo.create({name : "Poo", lastName : "Fideos", email : "Poo@gmail.com",nickName : "Guerrero dragon"},'./data.json'))
teo.update('Poo', { name: "Cheguevara",
    email: "eze@gmail.com",
    lastName: "montoto",
    nickName: "crijav" }, './data.json');