import React, { Component } from 'react'
// import { Route, Link, NavLink } from 'react-router-dom'
import { SettingsForm } from '../SettingsForm/SettingsForm'
import {translationFetch} from '../../fetchHelpers/translationFetch'
import {definitionsFetch} from '../../fetchHelpers/definitionsFetch'
import {languagesFetch} from '../../fetchHelpers/languagesFetch'

export default class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      q: '',
      target: 'en'
      // target: 'en'
    }
  }

  componentDidMount() {
    console.log('mounted?')


      languagesFetch()
  }

  handleChange(e) {
    this.setState({q: e.target.value})
  }

  handleClick() {
    translationFetch(this.state)
    definitionsFetch(this.state.q)
  }

  render() {
    return (
      <div className="search-form-wrapper">
        <SettingsForm />
        <input type="text" value={this.state.q} onChange={(e) => this.handleChange(e)}></input>
        <input type="submit"
               onClick={(e) => {
                        e.preventDefault
                        return this.handleClick(e)}}></input>
      </div>
    )
  }
}