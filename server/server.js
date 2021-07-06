const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
 
app.get('/Server', function (req, res) {
    // Requiring the module
    const reader = require('xlsx')
      
    // Reading our test file
    const file = reader.readFile('./data.xlsx')
      
    let data = []
      
    const sheets = file.SheetNames
      
    for(let i = 0; i < sheets.length; i++)
    {
       const temp = reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[i]])
       temp.forEach((res) => {
          data.push(res)
       })
    }
      res.send(data)
    })
    
     
    app.listen(process.env.PORT || 3000, 
      () => console.log("Server is running..."));