import React from 'react';
import style from 'styled-components'

// function getSteps() {
//   return ['customerName',
//           'pupsName',
//           'zipCode',
//           'email',
//           'breedStatus',
//           'breed',
//           'breed2',
//           'gender',
//           'neutured',
//           'birthdayMonth',
//           'birthdayYear',
//           'temperament',
//           'weight',
//           'bodyType',
//           'currentFoodType',
//           'primaryProtein',
//           'allergies',
//         ];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return `My name is`;
//     case 1:
//       return `and my pup's name is`;
//     case 2:
//       return `My zip code is`;
//     case 3:
//       return `${props.pupsName} is a `;
//     case 4:
//       return `of a ${props.breed} `
//     case 5:
//       return `and a ${props.breed2} to be precise`
//     case 6:
//       return `${props.pupsName} is a ${props.gender}`
//     default:
//       return 'unknown step'
//   }
// }

const QuestionnaireField = props => {
  console.log(props);
  return (
    <QuestionnaireFieldContainer>
      <Prompt>My name is</Prompt>
      <AnswerInput>
        <input type='text' onChange={props.handleInputChange.bind(this, 'pupsName')} value={props.pupsName}/>
      </AnswerInput>
    </QuestionnaireFieldContainer>
  )
}

const QuestionnaireFieldContainer = style.div`
  display:flex;
  flex-direction:row;
  padding: 10px;
  min-height: 45px;
`;

const Prompt = style.span`
  color: #ffc2c2;
  font-size: 19px;
  margin: auto 5px;
`;

const AnswerInput = style.div`
  border-bottom: 1px dashed #ff918e;
  min-width: 40px;
  min-height: 45px;
`;




export default QuestionnaireField;
