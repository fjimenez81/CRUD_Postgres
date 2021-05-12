import app, { port } from "./app";
import { Colors } from './assets/colors'

let message: string = `Server in http://localhost:${port}`
app.listen(app.get('port'), () => {
    console.log( Colors.FgGreen, message, Colors.Reset)
})