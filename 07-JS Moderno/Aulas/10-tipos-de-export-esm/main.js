import { inline as i } from "./inline.js" // "as" serve para renomear a function exportada
import d from "./inline.js" //pode declarar a função com o nome que quizer mas só pode importar um export Default por arquivo JS. E pode ser uma função anônima

import exportDefault, { group } from "./non-inline.js"


i()
d()

group()
exportDefault()