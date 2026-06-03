<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
     <link rel="stylesheet" href="style.css">
     
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#">Despre</a></li>
                <li><a href="#">Educatie</a></li>
                <li><a href="#">Proiecte</a></li>
                <li><a href="#">Experienta</a></li>
            </ul>
        </nav>
    </header>
    <!-- Prima sectiune a paginii -->
    <div class="topFirstPageInformation">
            <img src="imagineProfilWebSitePropriu.jfif" alt="logo" class="logo">
            <div class="continutTopFirstPageInformation">
                <h1 class="titlu">Bine ai venit pe site-ul meu!</h1>
                <p class="descriere">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   t7esktop publishing software including versions of Lorem Ipsum.
                </p>
            </div>
    </div>

    <!-- A doua sectiune a paginii -->
     <div class="projectsSection">
        <h2 class="titluProjects">Proiectele mele</h2>
        <div class="filtrareProiecte">
            <h4>Sorteaza dupa:</h4>
            <select>
                <option value="volvo">MERN</option>
                <option value="saab" selected>DevOps</option>
                <option value="mercedes">AI/ML</option>
                <option value="audi">Data Science</option>
            </select>
        </div>

        </div>
        <div class="proiecte-github">
            <!-- Aici vor fi afisate proiectele preluate de pe GitHub -->
        </div>
     </div>


     <!-- A treia sectiune a paginii -->
    <div class="experienceSection">
        <h2 class="titluExperience">Experiența profesională</h2>
        <h3>NIMIC</h3>
    </div>

    <script src="script.js" defer></script>
</body>
</html> 