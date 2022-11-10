const usersRouter = require('express').Router()
const { request, response } = require('express')
const User = require('../models/User')

usersRouter.post('/agregarusuario', (request, response) => {
  
  const user = request.body

  const newUser = new User({
    nombre: user.nombre,
    email: user.email,
    telefono: user.telefono,
    idusuario: user.idusuario
  })

  newUser.save().then(savedUser => {
    response.json(savedUser)
  })

})

usersRouter.get('/obtenerusuarios', async (request, response) => {
  User.find({}, function(docs, err){
    if(!err) {
      response.send(docs)
    }else{
      response.send(err)
    }
  })
})

usersRouter.post('/obtenerdatausuario', async (request, response) => {
  User.find({_id: request.body.idusuario}, function(docs, err){
    if(!err) {
      response.send(docs)
    }else{
      response.send(err)
    }
  })
})

usersRouter.post('/actualizausuario', (request, response) => {

  const user = request.body
  
  User.findOneAndUpdate({_id: user.idusuario}, {
    nombre: user.nombre,
    email: user.email,
    telefono: user.telefono
  }, (err) => {
    if(!err) {
      response.send('Usuario actualizado correctamente')
    }else{
      response.send(err)
    }
  })
})


usersRouter.post('/borrarusuario', (request, response) => {

  const user = request.body
  User.findOneAndDelete({_id: user.idusuario}, (err) => {
    if(!err){
      response.send('Usuario borrado')
    }else{
      response.send(err)
    }
  })
})

module.exports = usersRouter