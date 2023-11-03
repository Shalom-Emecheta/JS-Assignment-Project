window.addEventListener("load", (e) => {
    let form = document.querySelector("#form");
    let name = document.querySelector(".name");
    let classNo = document.querySelector(".classnum");
    let rollNo = document.querySelector(".rollnum");
    let table = document.querySelector(".table")

    form.addEventListener("submit", (evt) => {
        evt.preventDefault();

        let nameInput = name.value;
        let classInput = classNo.value;
        let rollInput = rollNo.value;

        if (!nameInput || !classInput || !rollInput) {
            alert("Please enter all input");
        }
        else {
            let tableRow = document.createElement("tr");
            tableRow.classList.add("tablerow");

            let snData = document.createElement("td");
            let rowArray = document.getElementsByClassName("tablerow");
            let serNum = rowArray.length + 1;
            snData.textContent = serNum;
            
            let nameData = document.createElement("td");
            nameData.textContent = nameInput;

            let classNoData = document.createElement("td");
            classNoData.textContent = classInput;

            let rollNoData = document.createElement("td");
            rollNoData.textContent = rollInput;
            let attendanceData = document.createElement("td");
            let presentBtn = document.createElement("input");
            presentBtn.type = "button";
            presentBtn.value = "Present";
            let absentBtn = document.createElement("input");
            absentBtn.type = "button";
            absentBtn.value = "Absent";

            table.appendChild(tableRow);
            tableRow.append(snData, nameData, classNoData, rollNoData, attendanceData)
            attendanceData.append(presentBtn, absentBtn)

            name.value = "";
            classNo.value = "";
            rollNo.value = "";

            presentBtn.addEventListener("click", (e) => {
                absentBtn.remove();
                presentBtn.value = "Present";
            })

            absentBtn.addEventListener("click", (e) => {
                    presentBtn.remove();
                    absentBtn.value = "Absent"
            })
        }
    })
})