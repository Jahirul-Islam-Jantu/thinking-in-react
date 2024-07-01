export const mapValuesToState = (values, shouldClear = false) => {
    return Object.keys(values).reduce((acc, key) => {
        acc[key] ={
            value: shouldClear ? "" : values[key],
            error: "",
            focused: false,
            touched: false,
        }

        return acc
    }, {})
}

export const mapStateToKeys = (state, key) => {
    return Object.keys(state).reduce((acc, cur) => {
        acc[key] = state[cur][key]
        return acc
    }, {})
}