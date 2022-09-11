import { SelectStyled } from '../../Form/Select.styles';

const GamesChooseGameMenu = ({ gamesOptions, setGamesOptions }) => {
  return (
    <SelectStyled
      value={gamesOptions.game}
      onChange={(e) =>
        setGamesOptions((prev) => ({ ...prev, game: e.target.value }))
      }
    >
      <option value="classic">Classic</option>
      <option value="snake">Snake</option>
    </SelectStyled>
  );
};
export default GamesChooseGameMenu;
