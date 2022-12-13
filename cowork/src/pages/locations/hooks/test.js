var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
console.log("hello");
var user = {
    id: 666,
    name: "bytefer",
    casa: { hh: "", pp: "hey pp", location: "aa" }
};
console.log("holaa");
var test1 = function (a) {
    var casa = user.casa, rest = __rest(user, ["casa"]);
    console.log(casa, "location");
};
test1();
var keys = Object.keys(user);
console.log(keys);
