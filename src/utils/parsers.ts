export const stringListToArray = (strList: string, separator: string = ",") => {
    return strList.split(separator)
    .map(listItem => listItem.trim())
    .filter(listItem => (listItem !== ''))
}