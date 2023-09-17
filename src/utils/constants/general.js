import * as Yup from 'yup'
import { questionTypes } from './common'

export const signUpInputArray = [
   {
      name: 'Атыныз',
      label: 'Атыныз',
      type: 'text',
   },
   {
      name: 'Фамилия',
      label: 'Фамилия',
      type: 'text',
   },
   {
      name: 'email',
      label: 'Почтаныз',
      type: 'email',
   },
   {
      name: 'password',
      label: 'Сыр сөз',
      type: 'password',
   },
   {
      name: 'confirmPassword',
      label: 'Сыр сөздү ырастаңыз',
      type: 'password',
   },
]

export const typeTestArray = [
   {
      type: questionTypes.SelectRealEnglishWords,
      id: Math.random(),
   },
   {
      type: questionTypes.ListenAndSelect,
      id: Math.random(),
   },
   {
      type: questionTypes.TypeWhatYourHear,
      id: Math.random(),
   },
   {
      type: questionTypes.DescribeImage,
      id: Math.random(),
   },
   {
      type: questionTypes.RecordSayingStatement,
      id: Math.random(),
   },
   {
      type: questionTypes.RespondInAtLeastNWords,
      id: Math.random(),
   },
   {
      type: questionTypes.HighlightTheAnswer,
      id: Math.random(),
   },
   {
      type: questionTypes.SelectTheMainIdea,
      id: Math.random(),
   },
   {
      type: 'Мыкты аталышты танда',
      id: Math.random(),
   },
]

export const signUpValidation = Yup.object().shape({
   firstName: Yup.string()
      .min(2, 'Өтө кыска!')
      .max(50, 'Өтө узун!')
      .matches(
         /^.*((?=.*[A-Z]){1}).*$/,

         'Аты бир баш тамгадан турушу керек'
      )
      .required('Аты талап кылынат'),

   lastName: Yup.string()
      .min(2, 'Өтө кыска!')
      .max(50, 'Өтө узун!')
      .matches(/^.*((?=.*[A-Z]){1}).*$/, 'Фамилияда бир баш тамга болушу керек')
      .required('Фамилия керек'),

   email: Yup.string().email().required('Сырсөз талап кылынат'),

   password: Yup.string()
      .matches(
         /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,

         'Сырсөз кеминде 8 белгиден, бир чоң тамгадан, бир сандан турушу керек'
      )
      .required('Сырсөз талап кылынат')
      .min(8, 'Сырсөз өтө кыска - кеминде 8 белгиден болушу керек'),
   confirmPassword: Yup.string()
      .required('Сырсөз талап кылынат')
      .oneOf([Yup.ref('password')], 'Сиздин сырсөзүңүз дал келбейт'),
})

export const signInValidation = Yup.object().shape({
   email: Yup.string().email().required('Электрондук почта талап кылынат'),

   password: Yup.string()
      .matches(
         /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1}).*$/,

         'Сырсөз кеминде 8 белгиден, бир чоң тамгадан жана бир сандан турушу керек'
      )
      .required('Сырсөз талап кылынат')
      .min(8, 'Сырсөз өтө кыска - кеминде 8 белгиден болушу керек'),
})

export const createTestValidation = Yup.object().shape({
   title: Yup.string()
      .min(5, 'узундугу 5тен 70ге чейин болушу керек')
      .max(70, 'узундугу 5тен 70ге чейин болушу керек')
      .required('Талап кылынган талаа')
      .trim(),
   shortDescription: Yup.string()
      .min(5, 'узундугу 5тен 70ге чейин болушу керек')
      .max(70, 'узундугу 5тен 70ге чейин болушу керек')
      .required('Талап кылынган талаа')
      .trim(),
   isActive: Yup.boolean(),
})
