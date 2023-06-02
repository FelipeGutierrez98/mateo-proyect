const userModel = require('../models/userModels')

// export = el metodo o la clase(donde yo lo llame va hacer el proseso)hago un funcion getalluser
//user find es mi peticion
exports.getAllUsers = (req, res) => {
  userModel
    .find() //llamarlos
    .then(users => res.status(201).json(users)) //user cree parametro para guardar informacion
    .catch(err =>
      res.status(500).json({ message: 'An error has ocurred.', err })
    )
}
exports.getUser = (req,res) =>{
    const { id } = req.params
    userModel.findById(id) //llamarlos
    .then(user => res.status(201).json(user)) //user cree parametro para guardar informacion
    .catch(err =>
      res.status(500).json({ message: 'An error has ocurred.', err })
    )
}

exports.createUser = async (req, res) => {
  const { userName, email, password } = req.body
  const userExist = await userModel.findOne({email:email}) // lo que quiero encontrar primero(email) y cual email quiero que me encuentra (email(cualquiera)) valor que llega 
  if(userExist){
    res.status(409).json({ error:`usuario ya existe` }) //conflicto //mesaje en el postman y poder trabajar en el fromsaber que sucede
 /*  throw new Error("el usuario ya existe") */
}else{//para que no cree dos veces el usuario se mette dentro de un else (2;44)
    const newUser = new userModel({
      userName,
      email,
      password,
    }) 
    const userSave = await newUser.save()
    console.log(userSave);
    res.status(201).json({ success: `created` })
}
/*   userModel.findOne({email:email}).then((user)=>{

      if(user){
          console.log(user, "este usuario existe");
        throw new Error("el usuario ya existe")
      }
      const newUser = new userModel({
        userName,
        email,
        password,
      }) 
       newUser.save() 
        .then(() => res.status(201).json({ success: `created` })) 
        .catch(err =>
          res.status(500).json({ message: 'An error has ocurred.', err })
        ) 
  })  */
    //propiedad email y que busque email de arriba 
    /* res.send({success: `created ${newUser}`}) */
}
exports.updateUser = (req, res) => {
  const { id } = req.params
  const { userName, email, password } = req.body //desestructurar
  userModel
    .findByIdAndUpdate(id, { userName, email, password }, { new: true })//metodo mongose
    .then(user => {
      if (!user) throw new Error(`user with id ${id} not found`)
      res.status(200).json(user)
    })
    .catch(err =>
      res.status(500).json({ message: 'An error has ocurred.', err })
    )
}
exports.deleteUser = (req, res) => {
  const { id } = req.params
  userModel.findByIdAndDelete(id)
    .then(user => {
      if (!user) throw new Error(`user with id ${id} not found`)
      res.status(404).json({ message: 'user deleted' })
    })
    .catch(err =>
      res.status(500).json({ message: 'An error has ocurred.', err })
    )
}

//throw new Error () =lanzar una alerta de error (error personalizado)
