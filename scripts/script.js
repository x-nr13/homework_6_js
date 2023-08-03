// Задача 1
const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
    addUserToArray(firstName, lastName, age);
    userForm.reset();
});

// Задача 2
const users = [];

function addUserToArray(firstName, lastName, age) {
    users.push({ firstName, lastName, age });
    rerender();
}

// Задача 3
function rerender() {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = '';
    users.forEach((user, index) => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <p>Name: ${user.firstName} ${user.lastName}</p>
            <p>Age: ${user.age}</p>
        `;
        userCard.addEventListener('dblclick', () => {
            deleteUser(index);
        });
        userContainer.appendChild(userCard);
    });
}

// Задача 4
function deleteUser(index) {
    users.splice(index, 1);
    rerender();
}
