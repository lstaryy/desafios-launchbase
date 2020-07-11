const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(type, value) {

    transaction = {
        type: type,
        value: value
    }

    // push() adiciona novos objetos à uma array
    user.transactions.push(transaction)

    if (transaction.type == `credit`) {
        user.balance += transaction.value
    } else if (transaction.type == `debit`) {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue){
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions){
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let creditCount = 0
    let debitCount = 0

    for (let transaction of user.transactions){
        if (transaction.type == `credit`)
            // incrementa (em 1) o valor do creditCount
            creditCount++
        else if (transaction.type == `debit`)
            debitCount++
    }

    return `credit: ${creditCount}, debit: ${debitCount}`
}


createTransaction("credit", 50)
createTransaction("credit", 120)
createTransaction("debit", 80)
createTransaction("debit", 30)

console.log(user.balance)
console.log(getHigherTransactionByType(`credit`))
console.log(getHigherTransactionByType(`debit`))
console.log(getAverageTransactionValue())
console.log(getTransactionsCount())