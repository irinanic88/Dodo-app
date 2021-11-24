export const toCamelCase = (titlesArray) => {
    if (titlesArray) {
        const wordToCamel = (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();

        const frazeToCamel = (string) => {
            return string.split(' ').map((word) => wordToCamel(word));
        }

        const arrayToCamel = titlesArray.map((string) => {
            return frazeToCamel(string).join(' ');
        });

        return arrayToCamel;
    }
    return;
}