import express from 'express'
import routes from './src/routes.js'
import path from 'path'
const app = express()
const port = process.env.PORT || 3000;
app.use(express.static('public'))

app.use(routes)
app.get('/', (req, res) => {
    res.redirect('/docs')
})
app.get('/docs/:lang?', (req, res) => {
    const lang = req.params.lang || 'index'
    res.sendFile(path.join(process.cwd(), 'public', 'docs', `${lang}.html`))
  })
  
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
app.use((req, res) => {
    res.status(404).json({
        "error": "Not Found",
        "message": "Cannot GET /unknown"
      });
})