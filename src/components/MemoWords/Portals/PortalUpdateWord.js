import { Link } from 'react-router-dom';
import { handleGetListOfWords } from '../../../lib/firebase/firebase-handlers-firestore';
import { ButtonStyled } from '../../Buttons/Button.styles';
import { InputStyled } from '../../Form/Input.styles';
import Portal from './Portal';
import { FormModifyWords } from './PortalUpdateWord.styles';

const PortalUpdateWord = ({
  portalUpdateWords,
  setClosePortalUpdateWords,
  setSelectedForGames,
  setWord1,
  setWord2,
  triggerFunction,
}) => {
  return (
    <Portal isModalOpen={portalUpdateWords.isOpen}>
      <FormModifyWords>
        <InputStyled
          value={portalUpdateWords.word1}
          onChange={(e) => setWord1(e.target.value)}
        />

        <InputStyled
          value={portalUpdateWords.word2}
          onChange={(e) => setWord2(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={portalUpdateWords.selectedForGames}
            onChange={setSelectedForGames}
          />
          Select for games
        </label>
        <div>
          <Link to="/">
            <ButtonStyled
              color="green"
              onClick={() => {
                triggerFunction(portalUpdateWords);
                setClosePortalUpdateWords();
              }}
            >
              Modify
            </ButtonStyled>
          </Link>
          <ButtonStyled color="red" onClick={setClosePortalUpdateWords}>
            Cancel
          </ButtonStyled>
        </div>
      </FormModifyWords>
    </Portal>
  );
};

export default PortalUpdateWord;
