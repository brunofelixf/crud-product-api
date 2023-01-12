import * as yup from 'yup'
import { ICreateProduct } from '../interfaces/product'

const productSchema: yup.SchemaOf<ICreateProduct> = yup.object().shape({
    name: yup
        .string()
        .max(100, "O nome não pode ter mais de 100 caracteres")
        .required("O nome é obrigatório"),
    category: yup
        .string()
        .max(30, "A categoria não pode ter mais de 30 caracteres")
        .required("A categoria é obrigatória"),
    status: yup
        .mixed().oneOf(['ACTIVE','INACTIVE'], 'O status deve ser ACTIVE ou INACTIVE')
        .required("O status é obrigatório"),
    quantity: yup
        .number()
        .positive('A quantidade deve ser positiva')
        .integer('A quantidade deve ser um inteiro')
        .required('A quantidade é requerida'),
})

export { productSchema }