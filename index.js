document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-button');
    const inputText = document.getElementById('add-text');
    const listContainer = document.querySelector('.list-container');

    addButton.addEventListener('click', function () {
        const text = inputText.value.trim();

        if (text !== '') {
            const newListItem = document.createElement('li');
            newListItem.innerHTML = `<span class="check"></span><input class="status" type="checkbox" checked>${text}<span class="delete"></span><input class="remove" type="checkbox">`;
            listContainer.appendChild(newListItem);
            inputText.value = '';

        }
    });

    listContainer.addEventListener('change', function (event) {
        if (event.target.classList.contains('status')) {
            const li = event.target.parentElement;
            
            if (event.target.checked) {
                li.classList.remove('checked');
            } else {
                li.classList.add('checked');
            }
        }

        if (event.target.classList.contains('remove')) {
            const li = event.target.parentElement;
            
            if (event.target.checked) {
                li.remove();
            }
        }
    });
});


