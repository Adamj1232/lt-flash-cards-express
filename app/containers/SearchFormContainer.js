import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm/SearchForm'
import { loadLanguageList, translateWord, addCard, cancelCard } from '../actions/index'
// import { translateWord } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    targetLanguage : state.targetLanguage,
    currentDeck : state.deck,
    currentCard : state.card
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    populateLanguages: () => {
      dispatch(loadLanguageList())
    },
    createTranslationCard: (inputWord, targetLanguage) => {
      dispatch(translateWord(inputWord, targetLanguage))
    },
    addCard : (deckName, card) => {
      dispatch(addCard(deckName, card))
    },

    cancelCard : (card) => {
      dispatch(cancelCard(card))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
