class BankAccount {
    constructor(accountNumber,balance = 0 ) {

        BankAccount.accountNumber = accountNumber;
        BankAccount.balance = balance;
        
    }
    deposit(amount) {

        if (amount > 0){

            BankAccount.balance += amount;
            console.log("deposite " + amount  +   " new balance: " + BankAccount.balance)
       
        }else {

            console.log("your balance : " + BankAccount.balance)
        }
    }

    withdraw(amount) {

        if (amount < BankAccount.balance) {

            BankAccount.balance -= amount;
            console.log("withdraw " + amount  +   " new balance: " + BankAccount.balance)

        }
        else (amount > BankAccount.balance )

            console.log("Insufficient balance!")
        }

    }




const Myaccount = new BankAccount("1234678", 200);

Myaccount.deposit(50);
Myaccount.withdraw(30);
Myaccount.withdraw(350);
Myaccount.deposit(100);
Myaccount.withdraw(199);