import * as yup from 'yup';

const MIN_LEN = {
  name: 5,
  address: 5,
  country: 5
}

const MAX_LEN = {
  name: 50,
  address: 100,
  country: 30,
  email: 100
}

const addUser = {
    schema: {
        body: {
          yupSchema:yup.object({
          name: yup.string().min(MIN_LEN.name).max(MAX_LEN.name),
          age: yup.number().positive().integer(),
          email: yup.string().email().max(MAX_LEN.email),
          address: yup.string().min(MIN_LEN.address).max(MAX_LEN.address),
          country: yup.string().min(MIN_LEN.country).max(MAX_LEN.country),
          gender: yup.string(),
          phone: yup.number().positive().integer()
        })   
      }
    },
}


const updateUser = {
  schema: {
      params: {
            yupSchema:yup.object({
              id: yup.number().positive().integer().required(),
          })   
        },
      body: {
        yupSchema:yup.object({
        name: yup.string().min(MIN_LEN.name).max(MAX_LEN.name),
        age: yup.number().positive().integer(),
        email: yup.string().email().max(MAX_LEN.email),
        address: yup.string().min(MIN_LEN.address).max(MAX_LEN.address),
        country: yup.string().min(MIN_LEN.country).max(MAX_LEN.country),
        gender: yup.string(),
        phone: yup.number().positive().integer()
      })   
    }
  },
}



const removeUser = {
    schema: {
      params: {
        yupSchema:yup.object({
          id: yup.number().positive().integer().required(),
      })
    }
  },

}


const getUser = {
  schema: {
      params: {
        yupSchema:yup.object({
          id: yup.number().positive().integer().required(),
      })   
    }
  },
}

export default {
  addUser,
  updateUser,
  removeUser,
  getUser
}