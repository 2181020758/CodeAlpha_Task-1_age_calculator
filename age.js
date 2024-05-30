document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1;
    const year = parseInt(document.getElementById('year').value);

    const dob = new Date(year, month, day);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
});
