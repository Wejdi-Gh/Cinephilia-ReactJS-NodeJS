

const intitialstate={rateindex:0}

function Ratestars (state=intitialstate,action) {

if (action.type ==="Starsrate") {

    return {rateindex: action.payload }

}
else if (action.type ==="clear") {

    return {rateindex: 0 }
}

else return state
}

export default Ratestars