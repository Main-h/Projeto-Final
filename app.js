function search () 
{ var Process = [
    {   "nome":"G4560 Pentium (1151)",
    "marca":"Intel",
    "id":1,
    "freq":3.5,
    "gerac":7
},
{   "nome":"Pentium Gold G6400",
    "marca":"Intel",
    "id":2,
   "freq":4
},
{   "nome":"Am3+ Fx-4300",
    "marca":"AMD",
    "id":3,
    "freq":3.8
},
{   "nome":"Ryzen 5 5600",
    "marca":"AMD",
    "id":4,
    "freq":3.5
},
{   "nome":"Ryzen 5 5600X",
    "marca":"AMD",
    "id":5,
    "freq":3.7
}
];
var length = process.length;
for(var j = 0; j < length; j++)
{
    var newOption = $('<option/>');
    newOption.text(process[j].Titel);
    newOption.attr('value', Process[j].nome);
    $('#select').append(newOption);
}

}
search();