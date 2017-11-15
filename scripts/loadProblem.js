function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

let loadProblem = index => {
    fetch("https://rawgit.com/IronOxide42/ProjectEuler/master/JavaScript/Problem"+leftPad(index,3)+".js")
    .then(response => response.text())
    .then(text =>
        {
            document.querySelector("#codeProblem"+index).innerHTML = Prism.highlight(text,Prism.languages.javascript) 
        }
    );
}