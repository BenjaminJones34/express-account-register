const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_ROUNDS)

let accounts = [
];

async function addAccount({username, password}) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    const account = { username, password: hash };

    accounts.push(account);
}

function getAccounts() {
    return accounts;
}

function getAccount(username) {
    return accounts.find(account => account.username == username);
}

async function login({username, password}) {
    const account = getAccount(username);
    return await bcrypt.compare(password, account.password);
}

module.exports = {
    addAccount,
    getAccounts,
    getAccount,
    login
}