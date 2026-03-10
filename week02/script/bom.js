const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector("ul");


button.addEventListener('click', function () { 
    if (input.value.trim() !== "") {
        
        if (list.children.length >= 10) {
            alert("Top 10 only — remove one before adding another.");
            input.focus();
            return;
        }

        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

            li.append(deleteButton);
            list.append(li);
            input.value = "";

    input.focus();
    }

});









