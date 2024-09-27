const cars = [];
const selectedCar = [];

function display(){
    selectedCar.length = 0;
    const carsContainer = document.getElementById("cars");
    for (i=0 ; i<cars.length ; i++){
        if (cars[i].available == true) {
            selectedCar.push(cars[i]);
        }
    }

    selectedCar.forEach(car=>{
        const card = document.createElement("div");
        card.classList.add("display-card","mb-5");

        card.innerHTML = `
            <div class="col-lg-4">
                <div class="card-item card px-2 py-4">
                    <img src= ${car.image} class="card-img-top mt-4 text-center" alt="...">
                    <div class="card-body">
                        <h5 class="card-title fs-6">${car.manufacture}-${car.model}/${car.type}</h5>
                        <h5 class="card-title fs-5 fw-bold">Rp. ${car.rentPerDay}</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="d-flex">
                            <div class="col-1">
                                <img src="images/fi_users1.png" width="20px" alt="" srcset="">
                            </div>
                            <div class="col-10 ms-lg-2">
                                ${car.capacity}
                            </div>
                        </div>
                        <div class="d-flex mt-2">
                            <div class="col-1">
                                <img src="images/fi_settings.png" width="20px" alt="" srcset="">
                            </div>
                            <div class="col-10 ms-lg-2">
                                ${car.transmission}
                            </div>
                        </div>
                        <div class="d-flex mt-2 mb-4">
                            <div class="col-1">
                                <img src="images/fi_calendar.png" width="20px" alt="" srcset="">
                            </div>
                            <div class="col-10 ms-lg-2">
                                ${car.year}
                            </div>
                        </div>

                        <a href="#" class="btn btn-utama" style="width:100%">Go somewhere</a>
                    </div>
                </div>
            </div>    
        `;
        
        carsContainer.appendChild(card)
    })

}

function selectCar() {
    let tipe = document.getElementById("driver-type").value;
    let tanggal = document.getElementById("tanggal").value;
    let waktu = document.getElementById("time").value;
    let penumpang = document.getElementById("jumlahPenumpang").value;

    return {tipe,tanggal,waktu,penumpang};
}

let button = document.getElementById("cari-mobil");

button.addEventListener("click",function(){
    cars.length=0;
    let {tipe, tanggal, waktu, penumpang} = selectCar();
    console.log(tipe);
    console.log(tanggal);
    console.log(waktu);
    console.log(penumpang);
    Car.list.forEach(function(car){
        cars.push(car);
    });
    display();
    console.log(cars);
    console.log(selectedCar);
});



