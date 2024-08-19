function removeFromArray(arreglo, item) {
    const index = arreglo.indexOf(item);
    if (index > -1) {
        arreglo.splice(index, 1);
    }
    console.log(arreglo);
}

removeFromArray([1, 2, 3, 4, 5], 3); 