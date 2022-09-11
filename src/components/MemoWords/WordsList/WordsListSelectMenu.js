import { SelectStyled } from '../../Form/Select.styles';

const WordsListSelectMenu = ({
  optionsSelect,
  setOption1Select,
  setOption2Select,
  lastItem,
}) => {
  return (
    <form>
      <div>
        <SelectStyled
          value={optionsSelect.option1}
          onChange={(e) => {
            lastItem.current = 0;
            setOption1Select(e.target.value);
          }}
        >
          {optionsSelect.allOptions.map((language) => (
            <option key={`${language}1`} value={language}>
              {language.toUpperCase()}
            </option>
          ))}
        </SelectStyled>
      </div>

      <div>
        <SelectStyled
          value={optionsSelect.option2}
          onChange={(e) => {
            lastItem.current = 0;
            setOption2Select(e.target.value);
          }}
        >
          {optionsSelect.allOptions.map((language) => (
            <option key={`${language}2`} value={language}>
              {language.toUpperCase()}
            </option>
          ))}
        </SelectStyled>
      </div>
    </form>
  );
};

export default WordsListSelectMenu;

// import { SelectStyled } from '../../Form/Select.styles';

// const WordsListSelectMenu = ({
//   optionsSelect,
//   setOption1Select,
//   setOption2Select,
//   lastItem,
// }) => {
//   return (
//     <form>
//       <div>
//         <SelectStyled
//           value={optionsSelect.option1}
//           onChange={(e) => {
//             setOption1Select(e.target.value);
//           }}
//         >
//           {optionsSelect.allOptions.map((language) => (
//             <option key={`${language}1`} value={language}>
//               {language.toUpperCase()}
//             </option>
//           ))}
//         </SelectStyled>
//       </div>

//       <div>
//         <SelectStyled
//           value={optionsSelect.option2}
//           onChange={(e) => {
//             setOption2Select(e.target.value);
//           }}
//         >
//           {optionsSelect.allOptions.map((language) => (
//             <option key={`${language}2`} value={language}>
//               {language.toUpperCase()}
//             </option>
//           ))}
//         </SelectStyled>
//       </div>
//     </form>
//   );
// };

// export default WordsListSelectMenu;
