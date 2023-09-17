import * as Yup from 'yup'
import { questionTypes } from './common'

export const signUpInputArray = [
   {
      name: 'firstName',
      label: 'Атыныз',
      type: 'text',
   },
   {
      name: 'lastName',
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
      type: 'Select best title',
      id: Math.random(),
   },
]

export const signUpValidation = Yup.object().shape({
   firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(
         /^.*((?=.*[A-Z]){1}).*$/,
         'First name must contain one uppercase'
      )
      .required('Атынызды жазыныз'),

   lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^.*((?=.*[A-Z]){1}).*$/, 'Last name must contain one uppercase')
      .required('Фамилиянызды жазыныз'),

   email: Yup.string().email().required('Электрондук адресинизди жазыныз'),

   password: Yup.string()
      .matches(
         /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
         'Password must contain at least 8 characters, one uppercase, one number'
      )
      .required('Сыр сөз талап кылынат')
      .min(8, 'Сыр сөз өтө кыска - кеминде 8ден кем эмес символ болушу керек'),
   confirmPassword: Yup.string()
      .required('Сыр сөз ырастаныз')
      .oneOf([Yup.ref('password')], 'Your password do not match'),
})

export const signInValidation = Yup.object().shape({
   email: Yup.string().email().required('Электрондук почта талап кылынат'),

   password: Yup.string()
      .matches(
         /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1}).*$/,
         'Сыр сөз 8ден кем эмес символду камтышы керек жана кеминде бир баш тамга болушу керек'
      )
      .required('Сыр сөз талап кылынат!')
      .min(8, 'Сыр сөз өтө кыска - 8ден кем эмес символ камтышы керек'),
})

export const createTestValidation = Yup.object().shape({
   title: Yup.string()
      .min(5, 'the length should be from 5 to 70')
      .max(70, 'the length should be from 5 to 70')
      .required('Required field')
      .trim(),
   shortDescription: Yup.string()
      .min(5, 'the length should be from 5 to 70')
      .max(70, 'the length should be from 5 to 70')
      .required('Required field')
      .trim(),
   isActive: Yup.boolean(),
})
