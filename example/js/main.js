function somme(arv) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arv.reduce(reducer)
}
