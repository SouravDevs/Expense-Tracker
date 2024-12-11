const data = {
    "email": "123@gmail.com",
    "password": "1234",
    "expenses": [
      {
        "email": "123@gmail.com",
        "id": 1000,
        "title": "Pizza",
        "cat": "Food",
        "amount": 1000
      },
      {
        "email": "123@gmail.com",
        "id": 2000,
        "title": "Pizza",
        "cat": "Food",
        "amount": 1000
      },
      {
        "email": "123@gmail.com",
        "id": 2000,
        "title": "Pizza",
        "cat": "Food",
        "amount": 1000
      }
    ],
    "incomes": []
  }
const email = '123@gmail.com'
  const findID = data.email.find((data) => data.email === email)
  if(findID) {
    console.log(findID)
  }
  else {
    console.log('Not found')
  }