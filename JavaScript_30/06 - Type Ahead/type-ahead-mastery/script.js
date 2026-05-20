const endpoint = 'https://jsonplaceholder.typicode.com/users'

const names = []

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => {
        names.push(...data)
        console.log("Data loaded successfully:", names);
    })

// non-regex version
function findMatches(wordToMatch,names){
    return names.filter( place =>{
        if (!wordToMatch) return false;
        // Convert everything to lowercase manually to force case-insensitivity
        const lowerSearch = wordToMatch.toLowerCase();
        const lowerName = place.name.toLowerCase();
        const lowerEmail = place.email.toLowerCase();

    return lowerName.includes(lowerSearch) || lowerEmail.includes(lowerSearch);
    });
}
