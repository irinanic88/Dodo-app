export const arrToMap = (arr) => 
    arr.reduce((acc, item) => ({...acc, [item.id]: item}), {});

export const deleteKey = (obj, id) => {
    return Object.entries(obj).filter(([key]) => key !== id.toString())
                .reduce((acc, [key, value]) => ({...acc, [key]: value}) ,{});
};