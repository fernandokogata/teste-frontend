const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  [
    {
      name: {
        type: String,
        required: [true, 'Nome é obrigatório.']
      }
    },
    {
      email: {
        type: String,
        required: [true, 'E-mail é obrigatório.']
      }
    },
    {
      password: {
        type: String,
        required: [true, 'Senha é obrigatória.']
      }
    },
    {
      city: {
        type: String,
        required: [true, 'Cidade é obrigatória.']
      }
    },
    {
      academic: {
        type: String,
        required: [true, 'Formação é obrigatória.']
      }
    },
    {
      stacks: {
        type: String,
        required: [true, 'Tecnologias são necessárias.']
      }
    },
    {
      avatar: {
        type: String,
        required: false
      }
    },
    {
      github_url: {
        type: String,
        required: false
      }
    },
    {
      role: {
        type: Number,
        min: 0,
        max: 1
      }
    }
  ]
)

const User = mongoose.model("User", UserSchema)

module.exports = User