function newitem() {
    const input = document.getElementById('input-new-item');
    const itemText = input.value.trim();
 
    const newItem = document.createElement('li');
    newItem.textContent = itemText;
 
    const button = document.createElement('button');
    button.textContent = "X";
    button.onclick = function() {
        newItem.remove(); 
    };
 
    newItem.appendChild(button);
    document.getElementById('to-do-list').appendChild(newItem);

    input.value = '';
}