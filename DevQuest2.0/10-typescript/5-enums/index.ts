enum Colors {
    Red,
    Blue,
    Green
}

// Podemois acessar os valores do enum usando o nome do enum e o valor da chave
enum Numero {
    Um = 1,
    Dois,
    Tres
}


// podemos percorrer os valores do enum 
for (const color in Colors) {
    console.log(color);
}

//////---------
enum UserResposnse{
    No = 0,
    Yes = 1
}

function respondedEmail(recipient: string, response: UserResposnse): void {
    if (response === UserResposnse.Yes) {
        console.log(`O usuário ${recipient} respondeu sim!`);
    } else {
        console.log(`O usuário ${recipient} respondeu não!`);
    }
}

respondedEmail("João", UserResposnse.Yes);

/// também é possivel colocar valores aleatorios para os enums, como strings ou números, e até mesmo misturar tipos. Por exemplo:
enum StatusCode {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500
}

enum Gender {
    Male = "M",
    Female = "F",
    Other = "O"
}

// Chave → valor
const male = Gender.Male;          // "M"
const indexMale = Gender["Male"];  // "M"

// Não existe reverse mapping em enum de string
// const stringFemale = Gender["F"]; ❌


enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    NotFound = 404,
    InternalServerError = 500
}

// Pegando valores do enum
const ok = StatusCodes.OK; // 200

const indexOk = StatusCodes["OK"]; // 200

// Reverse mapping: valor -> nome da chave
const stringBadRequest = StatusCodes[400]; // "BadRequest"

const stringNotFound = StatusCodes[404]; // "NotFound"

const stringServerError = StatusCodes[500]; // "InternalServerError"