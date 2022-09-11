import { SelectStyled } from '../../Form/Select.styles';

const GamesWordsOptionsMenu = ({ setGamesOptions }) => {
  return (
    <>
      <SelectStyled
        onChange={(e) => {
          if (e.target.value === 'All words')
            setGamesOptions((prev) => ({
              ...prev,
              allWords: true,
              selectedForGames: false,
            }));
          else
            setGamesOptions((prev) => ({
              ...prev,
              selectedForGames: true,
              allWords: false,
            }));
        }}
      >
        <option value="All words">All words</option>
        <option value="Selected for games">Select words</option>
      </SelectStyled>
    </>
  );
};

export default GamesWordsOptionsMenu;
