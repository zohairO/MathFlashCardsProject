// target the numbers
function QuadraticCondition(b , c) {
    const discriminant = b*b - 4*c
    const isDiscriminantValid = Number.isInteger(Math.sqrt(discriminant));
    return isDiscriminantValid && c!=0 && b!=0
}

function format (number) {
    return (number > 0 ? "+" : "-") + Math.abs(number);
}

function GenerateAppropriateNumbers() {
    let b,c
    do {
        b = Math.floor(Math.random() * 20) - 10
        c = Math.floor(Math.random() * 20) - 10
    } while (!QuadraticCondition(b,c));

    document.getElementById("b").textContent = format(b)
    document.getElementById("c").textContent = format(c)

    // reset feilds of button and inputs
    let button = document.getElementById("btn-check")
    button.textContent = "check"
    button.onclick = () => {
        CheckValidAnswer()    
    }

    document.getElementById("input-1").value = ''
    document.getElementById("input-2").value = ''

    var tick = document.getElementById("tick")
    tick.style.opacity = 0


}

function CheckValidAnswer() {

    const ans1 = parseInt(document.getElementById("input-1").value)
    const ans2 = parseInt(document.getElementById("input-2").value)

    if (isNaN(ans1) || isNaN(ans2)) {
        console.log("your inputs are invalid")
    
    } else {

        const b = parseInt(document.getElementById("b").textContent)
        const c = parseInt(document.getElementById("c").textContent)
        
        if (ans1 * ans2 == c && ans1 + ans2 == b) {

            // remove the cross
            var cross = document.getElementById("cross")
            cross.style.opacity = 0

            // make tick visible
            var tick = document.getElementById("tick")
            tick.style.opacity = 100

            //next button
            let button = document.getElementById("btn-check")
            button.textContent = "next"
            button.onclick = () => {
                GenerateAppropriateNumbers()
    
            }

        } else {
            var cross = document.getElementById("cross")
            cross.style.opacity = 100
            console.log("incorrect")
        }
    }
}