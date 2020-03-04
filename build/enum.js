"use strict";
// enum type
// numeric enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
})(Month || (Month = {}));
// strinf enum
var Mahasiswa;
(function (Mahasiswa) {
    Mahasiswa["ketua"] = "Yusril Izza";
    Mahasiswa["sekretaris"] = "Aulia";
    Mahasiswa["bendahara"] = "Hello";
})(Mahasiswa || (Mahasiswa = {}));
console.log(Month);
console.log(Mahasiswa);
