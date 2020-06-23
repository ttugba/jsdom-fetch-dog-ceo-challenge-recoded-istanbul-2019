console.log('%c HI', 'color: firebrick')

window.addEventListener("DOMContentLoaded", (event) => {
    fetchImages();
    fetchBreeds();
})

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => data["message"])
        .then(Arr => {
            let img= document.getElementById("dog-image-container")
            img.forEach( el => {
                let imgEl = document.createElement("image");
                imgEl.setAttribute("src", el);
                imgEl.style.width = "25%";
                img.appendChild(imgEl)

            })
        })
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(res => res.json())
        .then(data => data["message"])
        .then(breeds => {
            let breedList = document.getElementById("dog-breeds");
            Object.keys(breeds).forEach(element => {
                let breedLi = document.createElement("li");
                breedLi.innerText = element;
                breedList.appendChild(breedLi);
            });
            changeColor();
            filterBreeds();
        })

}

function changeColor() {
    let liElements = document.querySelectorAll("#dog-breeds li");
    liElements.forEach(element => {
        element.addEventListener("click", (event) => {
            element.style.color = "red";
        });
    });
};

function filterBreeds() {
    let dropDown = document.getElementById("breed-dropdown");
    let liElements = document.querySelectorAll("#dog-breeds li");
    dropDown.addEventListener("change", (event) => {
        liElements.forEach(element => {
            if (element.innerText.charAt(0) === dropDown.value) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        });
    });
}

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
