export const urlReplace = (alias) => {
    let arr = alias.split("/")
    return {type: arr[3], path: '/'+arr[3]+'/'+arr[4]}
}