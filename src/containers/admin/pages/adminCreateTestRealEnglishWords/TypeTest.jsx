import React from 'react'
import ListenWords from './type/ListenAndSelectWords'
import SelectRealEnglishWords from './type/SelectRealEnglishWords'
import TypeWhatHear from './type/TypeWhatHear'
import RecordSayingStatement from './type/RecordSayingStatement'
import DescribeImage from './type/DescribeImage'

const TypeTest = ({ selectType, title, duration, testId }) => {
   switch (selectType) {
      case 'Select real English words':
         return <SelectRealEnglishWords />
      case 'Listen and select English word':
         return <ListenWords />
      case 'Type what you hear':
         return (
            <TypeWhatHear title={title} duration={duration} testId={testId} />
         )
      case 'Record saying statement':
         return (
            <RecordSayingStatement
               title={title}
               duration={duration}
               testId={testId}
            />
         )
      case 'Describe image':
         return (
            <DescribeImage title={title} duration={duration} testId={testId} />
         )
      default:
         return <div />
   }
}

export default TypeTest
