


const username = localStorage.getItem('name');

if(!username) {
    window.location.href = '/';
    throw new Error('Username is not set');
}

const lblStatusOnline = document.querySelector('#status-online');
const lblStatusOffline = document.querySelector('#status-offline');

const userUlElement = document.querySelector('ul');

const renderUsers = (users) => {
    userUlElement.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user;
        userUlElement.appendChild(li);
    })

}

const socket = io({
    auth: {
      token: 'ABC-123',
        name :username
    }
});



socket.on('connect', () => {
    lblStatusOnline.classList.remove('hidden');
    lblStatusOffline.classList.add('hidden');
})
socket.on('disconnect', () => {
    lblStatusOnline.classList.add('hidden');
    lblStatusOffline.classList.remove('hidden');
})

socket.on('welcome-message', (data) => {
    console.log(data);
})

socket.on('on-clients-changed', (data) => {
    console.log(data);
})