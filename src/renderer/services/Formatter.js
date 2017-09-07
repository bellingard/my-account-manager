export default class Formatter {
  constructor(repo) {
    this.repo = repo
  }

  year(date) {
    return date.substring(0, 4)
  }

  dateInYear(date) {
    return date.substring(8, 10) + ' ' + this.month(date)
  }

  // Displays amounts (that are stored multiplied by 100) with 2 decimals
  amount(value) {
    return (value / 100).toFixed(2)
  }

  // Gives the color for the amount (red for debit, green for credit)
  colorForAmount(amount) {
    return amount < 0 ? 'red--text' : 'green--text'
  }

  // Returns the path to the logo of the institution which ID is passed
  institutionIcon(id) {
    return 'static/institutions/' + id + '.png'
  }

  // Returns the name of the payee based on its ID
  payeeName(id) {
    let payee = this.repo.payee(id)
    return payee == null ? '?' : payee.name
  }

  // Returns the name of the category based on its ID
  categoryName(id) {
    let category = this.repo.category(id)
    if (category == null) {
      category = this.repo.bankAccount(id)
    }
    return category == null ? '?' : category.name
  }

  month(date) {
    let m = date.substring(5, 7)
    switch (m) {
      case '01':
        return 'Janvier'
      case '02':
        return 'Février'
      case '03':
        return 'Mars'
      case '04':
        return 'Avril'
      case '05':
        return 'Mai'
      case '06':
        return 'Juin'
      case '07':
        return 'Juillet'
      case '08':
        return 'Août'
      case '09':
        return 'Septembre'
      case '10':
        return 'Octobre'
      case '11':
        return 'Novembre'
      case '12':
        return 'Décembre'
    }
  }
}
