

const username = 'TDDDaniel'; 
const url = `https://api.github.com/users/${username}/repos?sort=updated`;
const selectieLimbaj = document.getElementById('selectieLimbaj').value;

let limitaAfisare = 6;

const languageIcons = {
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    "C++": "imagini/programmer.png",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "Python": "imagini/python.png",
    "C": "imagini/c-.png",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "Default": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg"
}


fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Eroare HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const container = document.querySelector('.proiecte-github');
        const forkedRepos = data.filter(repo => !repo.fork);
       
        forkedRepos.forEach(repo => {
            const div = document.createElement('div');
           
            div.className = 'repo-card';
            div.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Nicio descriere adăugată.'}</p>
                <p>Ultima actualizare: ${new Date(repo.updated_at).toLocaleDateString()}</p>
                <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
                <h4>Limbaj de programare: ${repo.language || 'Limbă necunoscută'}</h4>
                <img src="${languageIcons[repo.language] || languageIcons['Default']}" alt="${repo.language}" class="language-icon">
                <a href="${repo.html_url}" target="_blank"><button>GitHub</button></a>
            `;
            container.appendChild(div);
            
        });
    })
    .catch(error => console.error('Eroare la preluarea datelor:', error));

    /*
        1. Sa apara apartamentul
        2. Sa apara potentialii clienti (oamenii care sunt interesati de apartament)
        3. Cand se logheaza sa aiba buletinul si cererea de inchiriere
        4. Sa aiba facturile la zi si scadentele
        5. Sa fie partea asta de centralizare
        6. Agentul primeste cererea de inchiriere
        7. Sa apara cererile de inchiriere la agent si sa vada cine a aplicat pentru apartament
        8. Potentialul chirias sa-si bage buletinul si datele, sa fie calificat de agent
        9. Sa poata sa plateasca prin aplicatie chiria si sa aiba un istoric al platilor
        10. Sa se vada costurile de intretinere, sa se vada daca sunt platite sau nu

    */