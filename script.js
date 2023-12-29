var ktop = 69.8;
document.addEventListener('DOMContentLoaded', function () {
    const add_meat1 = document.getElementById("add_meat");
    const add_cheese1 = document.getElementById("add_cheese");
    const add_lettuce1 = document.getElementById("add_lettuce");
    const add_tomato1 = document.getElementById("add_tomato");
    const remove_meat1 = document.getElementById("remove_meat");
    const Finished =  document.getElementById("Finish");
    const shape1 = document.getElementById("meat");
    const shape2 = document.getElementById("cheese");
    const shape3 = document.getElementById("lettuce");
    const shape4 = document.getElementById("tomato");
    const shape5 = document.getElementById("bun-top");
    add_meat1.addEventListener('click', function () {
        let clone = shape1.cloneNode(true);
        ktop -= 3;
        if (ktop <= 40) {
            ktop = -94;
        }
        clone.style.top = ktop + "%";
        document.body.appendChild(clone);
    });

    add_cheese1.addEventListener('click', function () {
        let clone = shape2.cloneNode(true);
        ktop -= 1.5;
        if (ktop <= 40) {
            ktop = -94;
        }
        clone.style.top = ktop + "%";
        document.body.appendChild(clone);
    });

    add_lettuce1.addEventListener('click', function () {
        let clone = shape3.cloneNode(true);
        ktop -= 1;
        if (ktop <= 40) {
            ktop = -94;
        }
        clone.style.top = ktop + "%";
        document.body.appendChild(clone);
    }); 

    add_tomato1.addEventListener('click', function () {
        let clone = shape4.cloneNode(true);
        ktop -= 3;
        if (ktop <= 40) {
            ktop = -94;
        }
        clone.style.top = ktop + "%";
        document.body.appendChild(clone);
    });

    remove_meat1.addEventListener('click', function () {
        const lastShapeElement = document.body.lastElementChild;

        if (lastShapeElement) {
            lastShapeElement.remove();
            const lastShapeId = lastShapeElement.id;

            if (lastShapeId === "cheese") {
                ktop += 1.5;
                if (ktop <= 40) {
                    ktop = -94;
                }
            } else if (lastShapeId === "lettuce") {
                ktop += 1;
                if (ktop <= 40) {
                    ktop = -94;
                }
            } else {
                ktop += 3;
                if (ktop <= 40) {
                    ktop = -94;
                }
            }
        }
        ktop = Math.max(0, ktop);
    });
    Finished.addEventListener('click', function () {
        let clone = shape5.cloneNode(true);
        if (ktop >= 40) {
            clone.style.top = ktop -13.5 + "%";
        } else{
            clone.style.top ="30%";
        }
        document.body.appendChild(clone);
    });
});
