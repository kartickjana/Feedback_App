// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedbackQuestionContainer">
        <h1 className="feedbackQuestion">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emojisList">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emojiButton"
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="emojiName">{emoji.name} </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyouContainer">
        <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji" />
        <h1 className="thankyouText">Thank you!</h1>
        <p className="description">Banate garfategalo thank you to bol</p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="appContainer">
        <div className="feedbackCard">
          {isFeedbackSelected
            ? this.renderThankyouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
