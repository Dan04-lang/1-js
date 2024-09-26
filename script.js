function solicitarDados(){
    // Solicitar o nome do usuário
    let name = prompt("What's your name?");
    // Solicitar a idade do usuário
    let Age = prompt("What's your age?");
    let States = prompt("What's your state?")
    let CellPhone = prompt("What's your phone number?")

    // Exibe saudação
    alert("Hello, " + name + "! you have " + Age + " years old. You're from " + States + " and we can to talk at number " + CellPhone + ".");

    // Mostra os dados no console
    console.log("Nome do usuário:", name);
    console.log("Idade do usuário:", Age);
    console.log("Estado do usuário:", States);
    console.log("Telefone do usuário:", CellPhone);
}