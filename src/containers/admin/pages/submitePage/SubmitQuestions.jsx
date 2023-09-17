import { styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import FormContainer from '../../../../components/UI/form/FormContainer'
import { resultQuestionComponents } from '../../../../utils/constants/common'
import { questionName } from '../../../../utils/helpers/questionName'

const SubmiteQuestions = () => {
   const { state } = useLocation()
   const [score, setScore] = useState(state.evaluationScore)
   const [scoreError, setScoreError] = useState(false)

   const QuestionComponent =
      resultQuestionComponents[state?.questionResponse.questionType]

   const changeScoreHandler = (e) => {
      const { value } = e.target
      if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 10)) {
         setScore(value)
         setScoreError(false)
      } else {
         setScoreError(true)
      }
   }
   return (
      <FormContainer>
         <div>
            <StyledText>
               Колдонуучу: <StyledSpan>{state.userFullName}</StyledSpan>
            </StyledText>
            <StyledText>
               Сынак: <StyledSpan>{state.testName}</StyledSpan>
            </StyledText>
         </div>

         <UserInfo>
            <div>
               <h4 style={{ margin: '0 0 14px 0' }}>Сынактын суроосу</h4>
               <StyledText>
                  Суроонун аталышы:{' '}
                  <StyledSpan>{state.questionResponse.title}</StyledSpan>
               </StyledText>
               <StyledText>
                  Узактыгы{' '}
                  <StyledSpan>{state.questionResponse.duration}</StyledSpan>
               </StyledText>
               <StyledText>
                  Суроо түрү:{' '}
                  <StyledSpan>
                     {questionName(state.questionResponse.questionType)}
                  </StyledSpan>
               </StyledText>
               {/* {state.questionResponse.questionType === 'TYPE_WHAT_YOU_HEAR' ? (
                  <StyledText>
                     Mimimum number of words:{' '}
                     <StyledSpan>{state.questionResponse.minWords}</StyledSpan>
                  </StyledText>
               ) : null} */}
               {state.questionResponse.questionType ===
               'RECORD_SAYING_STATEMENT' ? (
                  <StyledText>
                     Билдирме:{' '}
                     <StyledSpan>{state.questionResponse.statement}</StyledSpan>
                  </StyledText>
               ) : null}
               {state.questionResponse.questionType === 'RESPOND_N_WORDS' ? (
                  <>
                     <StyledText>
                        Сөздөрдүн минималдуу саны:{' '}
                        <StyledSpan>
                           {state.questionResponse.minWords}
                        </StyledSpan>
                     </StyledText>
                     <StyledText>
                        Суроо билдирүүсү:{' '}
                        <StyledSpan>
                           {state.questionResponse.statement}
                        </StyledSpan>
                     </StyledText>
                  </>
               ) : null}
            </div>
            <div style={{ width: '120px' }}>
               <h4 style={{ margin: 0 }}>Баалоо</h4>
               {state.questionResponse.questionType ===
                  'LISTEN_AND_SELECT_ENGLISH_WORD' ||
               state.questionResponse.questionType === 'SELECT_ENGLISH_WORD' ? (
                  <StyledText>
                     Упай: <Score>{state.evaluationScore.toFixed()}</Score>
                  </StyledText>
               ) : (
                  <>
                     <StyledScoreText>Упай:(0-10)</StyledScoreText>
                     <StyledInput
                        error={!!scoreError}
                        value={score}
                        onChange={changeScoreHandler}
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 10 } }}
                     />
                     <Typography style={{ color: '#f00' }}>
                        {scoreError && 'Limit 0-10'}
                     </Typography>
                  </>
               )}
            </div>
         </UserInfo>
         {QuestionComponent && (
            <QuestionComponent
               question={state}
               score={score}
               answerId={state.answerId}
            />
         )}
      </FormContainer>
   )
}

export default SubmiteQuestions

const StyledText = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '18px',
   lineHeight: '21px',
   color: '#3752B4',
   paddingBottom: '8px',
}))
const UserInfo = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   margin: '40px 0',
}))

const StyledSpan = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '18px',
   lineHeight: '21px',
   color: '#4C4859',
}))

const Score = styled('span')(() => ({
   color: '#2AB930',
}))

const StyledScoreText = styled(Typography)(() => ({
   color: '#3752B4',
   fontFamily: 'Poppins',
   fontWeight: '500',
}))

const StyledInput = styled(TextField)(() => ({}))
