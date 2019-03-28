

const intitialstate={filmsearch:""}

function Searchreducer (state=intitialstate,action) {

if (action.type ==="search") {

    return {filmsearch : action.payload }

}
else if (action.type ==="clear") {

    return {filmsearch : "" }
}
else return state
}

export default Searchreducer