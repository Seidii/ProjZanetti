import express, { query } from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.post('/contato', async (req, res)  =>{
   await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            cellphone: req.body.cellphone,
            comment: req.body.comment
        },
    })

    res.status(201).json(req.body)
}) 


app.getMaxListeners('/contato', async (req, res)  =>{
  await prisma.user.create({
       data: {
           email: req.body.email,
           name: req.body.name,
           cellphone: req.body.cellphone,
           comment: req.body.comment
       }
   })

   res.status(201).json(req.body)
}) 
  
app.put('/contato/:id', async (req, res)  =>{

    await prisma.user.update({
        where: {
            id: req.params.id
        },
         data: {
             email: req.body.email,
             name: req.body.name,
             cellphone: req.body.cellphone,
             comment: req.body.comment
         }
     })
 
     res.status(201).json(req.body)
 })

 app.delete('/contato/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
     })

     res.status(200).json({message: ' Usuario deletado com Sucesso!'})
 })


app.listen(3000)
