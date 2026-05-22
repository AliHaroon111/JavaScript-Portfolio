const endpoint = 'https://jsonplaceholder.typicode.com/users'

const names = []

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => {
        names.push(...data);
        console.log("Data loaded successfully:", names);
    })

// non-regex version
function findMatches(wordToMatch,names){
    return names.filter( place =>{
        if (!wordToMatch) return false;
        // Convert everything to lowercase manually to force case-insensitivity
        const lowerSearch = wordToMatch.toLowerCase();
        const lowerName = place.name.toLowerCase();
        const lowerCatchPhrase = place.company.catchPhrase.toLowerCase(); //nested data!

    return lowerName.includes(lowerSearch) || lowerCatchPhrase.includes(lowerSearch);
    }); }

    //Display Function
    function displayMatches(){
     const matchArray = findMatches(this.value,names);
     const html = matchArray.map( place =>{
        return `<li>
                <span class="name">${place.name}</span>
                </li>`
     }).join('')
     
     const suggestions = document.querySelector('.suggestions')
     if (this.value==''){
        suggestions.innerHTML = `
          <li>Filter for an employee name</li>
          <li>or a company catchphrase</li>
        `;
     }else { 
     suggestions.innerHTML = html || `<li>No matches found for ${this.value}</li>`
    }
    };

    const search = document.querySelector('.search')

    search.addEventListener('change',displayMatches)
    search.addEventListener('keyup',displayMatches)
