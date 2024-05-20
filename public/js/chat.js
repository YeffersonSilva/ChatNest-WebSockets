const username = localStorage.getItem('name');

if (!username) {
  window.location.href = '/';
  throw new Error('Username is not set');
}

const lblStatusOnline = document.querySelector('#status-online');
const lblStatusOffline = document.querySelector('#status-offline');

const userUlElement = document.querySelector('ul');

const input = document.querySelector('input');
const form = document.querySelector('form');
const chatElement = document.querySelector('#chat');

const renderUsers = (users) => {
  userUlElement.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.innerText = user.name;
    userUlElement.appendChild(li);
  });
};

const renderMessage = (payload) => {
    const { userID, message, userName } = payload;
    
    const divElement = document.createElement('div');
    divElement.classList.add('message');
  
    if (userID !== socket.id) {
        divElement.classList.add('incoming');
        
    }
    
    divElement.innerHTML = message;
    chatElement.appendChild(divElement);

    chatElement.scrollTop = chatElement.scrollHeight;

};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = input.value;
    input

    socket.emit('send-message', message);
});

const socket = io({
  auth: {
    token: 'ABC-123',
    name: username,
  },
});

socket.on('connect', () => {
  lblStatusOnline.classList.remove('hidden');
  lblStatusOffline.classList.add('hidden');
});
socket.on('disconnect', () => {
  lblStatusOnline.classList.add('hidden');
  lblStatusOffline.classList.remove('hidden');
});

socket.on('welcome-message', (data) => {
  console.log(data);
});

socket.on('on-clients-changed', renderUsers);


socket.on('on-message', (data) => {
    console.log(data);

})