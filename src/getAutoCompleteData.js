

export const getAutoCompleteData = async (lookOutString) =>{
    const resp = await fetch(`https://dummyjson.com/recipes/search?q=${lookOutString}`)
    .then(res => res.json())
    .then((data)=>{
        return data.recipes || [];
    });
    return resp;
}