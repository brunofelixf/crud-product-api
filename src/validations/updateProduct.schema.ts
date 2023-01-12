import * as yup from 'yup'
import { IUpdateProduct } from '../interfaces/product'

const updateProductSchema: yup.SchemaOf<IUpdateProduct> = yup.object().shape({
    name: yup
        .string()
        .max(100, "O nome não pode ter mais de 100 caracteres")
        .notRequired(),
    category: yup
        .string()
        .max(30, "A categoria não pode ter mais de 30 caracteres")
        .notRequired(),
    status: yup
        .mixed().oneOf(['ACTIVE','INACTIVE'], 'O status deve ser ACTIVE ou INACTIVE')
        .notRequired(),
    quantity: yup
        .number()
        .positive('A quantidade deve ser positiva')
        .integer('A quantidade deve ser um inteiro')
        .notRequired(),
})

export { updateProductSchema }