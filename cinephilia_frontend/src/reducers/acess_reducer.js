

const intitialstate={platformaccess :false}

function Platformaccess (state=intitialstate,action) {
if(action.type === "@@INIT") {
    const isConnected = localStorage.getItem('isConnected')
    return {
        platformaccess: Boolean(JSON.parse(isConnected))
    }
}
if (action.type ==="login") {
    localStorage.setItem('isConnected', 'true')
    return {platformaccess : action.payload}

}
else if (action.type ==="logout") {
    localStorage.setItem('isConnected', 'false')
    return {platformaccess:action.payload }
}
else return state
}

export default Platformaccess 