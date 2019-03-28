const intitialstate={selectsearch:0}

function Searchreducer (state=intitialstate,action) {

if (action.type ==="select") {

    return {selectsearch : action.payload }

}

else return state
}

export default Searchreducer