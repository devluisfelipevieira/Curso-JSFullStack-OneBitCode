const dayjs = require("dayjs")

// const relativeTime = require('dayjs/plugin/relativeTime') para adicionar plugin que não foi necessário no projeto
// dayjs.extend(relativeTime) chamando o plugin


// const monthdiff = dayjs().diff(borndate, 'month')
// const yarsOld = Math.floor(monthdiff / 12)


// const nowdate = dayjs() // data atual

// const yearsOld = daysjs('2002-06-11').toNow()

function birthday(date){
  const borndate = dayjs(date)
  const today = dayjs() // dia atual 
  const yarsOld = today.diff(borndate, 'years')
  const birthday = borndate.add(yarsOld + 1 , "year")
  const daysLeft = birthday.diff(today, 'days') + 1

  console.log(`Se você nasceu em ${borndate.format('DD/MM/YYYY:')}`)
  console.log(`Sua idade atual é ${yarsOld} anos`)
  console.log(`Seu próximo aniversário é ${birthday.format('DD/MM/YYYY')}`)
  console.log(`Falta(m) ${daysLeft} dia(s) para seu aniversário`)
}

birthday('2002-06-11')