// Write a function that calculates ones net salary from gross of 5M exclusive of NSSF (11% of gross) and PAYEE (30% of gross)

function netSalary(gross){
    const nssf = 0.11
    const payee = 0.3
    const tax = (gross*nssf) + (gross*payee)
    salary = gross - tax;
    console.log(salary);
}

netSalary(5000000)
netSalary(3000000)
