//Encapsulate function f, let f's this pointing to the specified object

function bindThis(f, oTarget) {
    return f.bind(oTarget);
}
