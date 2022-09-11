import { SelectStyled } from '../../Form/Select.styles';

const GamesLanguagesMenu = ({
  optionsSelect,
  setOption1Select,
  setOption2Select,
}) => {
  return (
    <form>
      <div>
        <SelectStyled
          value={optionsSelect.option1}
          onChange={(e) => setOption1Select(e.target.value)}
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
          onChange={(e) => setOption2Select(e.target.value)}
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

export default GamesLanguagesMenu;
