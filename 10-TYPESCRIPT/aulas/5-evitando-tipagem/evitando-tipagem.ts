// function sendSpaceship(spaceship: {pilot: string, copilot?: string}) {
//   //...
// }

// sendSpaceship({ pilot: 'Han Solo', copilot: 'Chewbacca'})

// sendSpaceship({ pilot: 'Luke'})

//-----------------------------------------------------//------------------------------------------------------

// let input: unknown // pode ser atribuida a qualquer tipo

// let input: any // ele faz o TS "parar de funcionar"

// input = 'Test'
// input = 20
// input = []

// let text: string

// text = input

//------------------------------------------------------//-----------------------------------------------------

function verification(test) {
  if (test) {

  }else {
    let _check: never

    let text = _check

    text = ''
    
    return _check
  }
}
