const username = 'TDDDaniel'; 
const url = `https://api.github.com/users/${username}/repos`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Eroare HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const container = document.querySelector('.proiecte-github');
        
        data.forEach(repo => {
            const div = document.createElement('div');
            div.className = 'repo-card';
            div.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description || 'Nicio descriere adăugată.'}</p>
            `;
            container.appendChild(div);
        });
    })
    .catch(error => console.error('Eroare la preluarea datelor:', error));