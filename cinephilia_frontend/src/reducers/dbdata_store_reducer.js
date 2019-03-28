

const intitialstate={ currentmember:[]}

function Transfertdbdatastore (state=intitialstate,action) {

if (action.type ==="dbdata_store") {

    return {currentmember: action.payload }

}

else return state
}

export default Transfertdbdatastore