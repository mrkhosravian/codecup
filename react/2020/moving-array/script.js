const CHANGE_TYPE = {
    UP: "UP",
    DOWN: "DOWN",
};
const ERROR_TYPE = {
    NOT_FOUND: "NOT_FOUND",
    NOT_POSSIBLE: "NOT_POSSIBLE",
    INVALID_INPUT: "INVALID_INPUT",
};
let numbers = [4, 6, 10, 23, 0, 24, 30, 2];

// Your code here...

const numbersContainer = document.getElementById("numbers-container")


function print(numb) {
    numbersContainer.innerHTML = ""
    numb.forEach(number => {
        let item = document.createElement("span")
        item.innerText = String(number)
        numbersContainer.appendChild(item)
    })
}

print(numbers)


const itemInput = document.getElementById("item-input")
const countInput = document.getElementById("count-input")
const typeContainer = document.getElementsByName('type')
const errorContainer = document.getElementById("error-container")
const submitBtn = document.getElementById("submit-btn")

// itemInput.addEventListener("input", (e) => console.log(e))

Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

submitBtn.addEventListener("click", () => {
    const item = itemInput.value
    const count = countInput.value
    const direction = typeContainer[0].checked ? "UP" : "DOWN"

    const error = handleError(item, count, direction)
    console.log(error)
    if (error) {
        switch (error) {
            case ERROR_TYPE.INVALID_INPUT:
                errorContainer.innerHTML = `<p id="error">${ERROR_TYPE.INVALID_INPUT}</p>`
                return
            case ERROR_TYPE.NOT_FOUND:
                errorContainer.innerHTML = `<p id="error">${ERROR_TYPE.NOT_FOUND}</p>`
                return
            case ERROR_TYPE.NOT_POSSIBLE:
                errorContainer.innerHTML = `<p id="error">${ERROR_TYPE.NOT_POSSIBLE}</p>`
                return
        }
    } else {
        errorContainer.innerHTML = ""
    }


    const itemInt = parseInt(item);
    const countInt = parseInt(count)
    const index = numbers.indexOf(itemInt)
    let newArr = []
    if (direction === "UP") {
        numbers.move(index, index + countInt)
    } else {
        numbers.move(index, index - countInt)
    }
        print(numbers)


})


function handleError(item, count, direction) {
    if (item.length === 0 || count.length === 0) {
        return ERROR_TYPE.INVALID_INPUT
    }

    if (numbers.indexOf(parseInt(item)) === -1) return ERROR_TYPE.NOT_FOUND

    if (direction === "DOWN" && numbers.indexOf(parseInt(item)) - parseInt(count) < 0) {
        return ERROR_TYPE.NOT_POSSIBLE
    }

    if (direction === "UP" && numbers.indexOf(parseInt(item)) + parseInt(count) > (numbers.length - 1)) {
        return ERROR_TYPE.NOT_POSSIBLE
    }

    return false
}