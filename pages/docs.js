import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import docs from '../utils/docs.json'
console.log(docs)
const App = () => <SwaggerUI url='http://localhost:3000/api/docs' />
export default App