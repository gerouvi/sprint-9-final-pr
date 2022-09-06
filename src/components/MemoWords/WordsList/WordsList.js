import { useEffect, useState } from 'react';
import { handleGetWords } from '../../../lib/firebase/firebase-handlers-auth';
import { SelectStyled } from '../../Form/Select.styles';
import WrapperPage from '../WrapperPage';
import { Wrapper } from './WordsList.styles';

const WordsList = () => {
  return null;
  // const [words, setWords] = useState([]);
  // const [optionsSelected, setOptionsSelected] = useState({
  //   option1: undefined,
  //   option2: undefined,
  // });
  // const [optionsSelectFiltered, setOptionsSelectFiltered] = useState([]);
  // useEffect(() => {
  //   handleGetWords(setWords, optionsSelected.option1, optionsSelected.option2);
  // }, [optionsSelected.option1, optionsSelected.option2]);
  // useEffect(() => {
  //   const a = getOptionsSelect(words);
  //   setOptionsSelectFiltered(a);
  // }, [words]);
  // useEffect(() => {
  //   setOptionsSelected({
  //     option1: optionsSelectFiltered[0],
  //     option2: optionsSelectFiltered[1],
  //   });
  // }, [optionsSelectFiltered]);
  // // if (!words.length)
  // //   return (
  // //     <WrapperPage>
  // //       <Wrapper>
  // //         <h1>Words List</h1>
  // //         <h2>No words</h2>
  // //       </Wrapper>
  // //     </WrapperPage>
  // //   );
  // return (
  //   <WrapperPage>
  //     <Wrapper>
  //       <h1>Words List</h1>
  //       <form>
  //         <div>
  //           <SelectStyled
  //             value={optionsSelected.option1}
  //             onChange={(e) =>
  //               setOptionsSelected((prev) => ({
  //                 ...prev,
  //                 option1: e.target.value,
  //               }))
  //             }
  //             width="40%"
  //           >
  //             {optionsSelectFiltered.map((opt, index) => (
  //               <option key={index} value={opt}>
  //                 {opt && opt.toUpperCase()}
  //               </option>
  //             ))}
  //           </SelectStyled>
  //         </div>
  //         <div>
  //           <SelectStyled
  //             value={optionsSelected.option2}
  //             onChange={(e) =>
  //               setOptionsSelected((prev) => ({
  //                 ...prev,
  //                 option2: e.target.value,
  //               }))
  //             }
  //             width="40%"
  //           >
  //             {optionsSelectFiltered.map((opt, index) => (
  //               <option key={index} value={opt}>
  //                 {opt && opt.toUpperCase()}
  //               </option>
  //             ))}
  //           </SelectStyled>
  //         </div>
  //       </form>
  //       {words.map((word, index) => (
  //         <div key={index}>
  //           <p>
  //             {word[optionsSelected.option1]} - {word[optionsSelected.option2]}
  //           </p>
  //         </div>
  //       ))}
  //     </Wrapper>
  //   </WrapperPage>
  // );
};

// export const getOptionsSelect = (words) => {
//   //Get keys (code -> en/es...) from all words
//   const keys = words.map((el) => Object.keys(el)).flat();

//   //Delete keys duplicateds
//   const keysNoDuplicates = keys.filter((key, index) => {
//     return (
//       keys.indexOf(key) === index && key !== 'dateInHours' && key !== 'idWords'
//     );
//   });

//   //In case the list of words is empty, push two objects with code: undefined, if not we will have a error when we will try to acces to languages[0/1].code
//   if (keysNoDuplicates.length === 0) {
//     keysNoDuplicates.push(undefined);
//     keysNoDuplicates.push(undefined);
//   }

//   return keysNoDuplicates.sort();
// };

export default WordsList;
