const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');

let ticketprice = +movieselect.Value;

//update total and count 
function updateSelectedcount() {
    const Selectedseats = document.querySelectorAll('.row.seat.selected');

    const Selectedseatscount = Selectedseats.length;


    count.innerText = Selectedseatscount;
    total.innerText = Selectedseatscount = ticketprice;
}
container.addEventListener('click', (e) => {
    if (e.target.classlist.contains('seat') && !e.target.classlist.contains('occupied')) {;
      e.target.classlist.toggle('Selected');
    }

    updateSelectedcount();
});


