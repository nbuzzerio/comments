// eslint-disable-next-line max-classes-per-file
import React from 'react';
import moment from 'moment';
import axios from 'axios';
const localUrl = 'http://localhost:8080';
const prodUrl = 'http://ec2-34-220-99-82.us-west-2.compute.amazonaws.com:8080/';
const API_URL = (window.location.host === 'localhost:8080') ? localUrl : prodUrl;
console.log('this is localUrl: ', localUrl);
console.log('this is prodUrl: ', prodUrl);
console.log('API_URL: ', API_URL);
console.log('...cheese');

var convertTimestamp = function(timestamp) {
  if (timestamp > 60) {
    var minutes = Math.floor(timestamp / 60);
    var seconds = timestamp - (minutes * 60);
    if (seconds < 9) {
      return minutes + ':0' + seconds;
    } else {
      return minutes + ':' + seconds;
    }
  }
  if (timestamp < 10) {
  return '0:0' + timestamp;
  } else {
    return '0:' + timestamp;
  }
}

class CommentList extends React.Component {
  render() {
    console.log(this.props.comments);
    const commentNodes = this.props.comments
      .map((comment, index) => (
        <Comment author={comment.user_name} key={index} text={comment.message} audio_position={comment.audio_position} user_icon={comment.user_icon} posted_at={comment.posted_at} >
        </Comment>
      ));
    return (
      <div className='comment-list'>
        <div id="comments">
          <span className="comments_icon"><i className="fas fa-comment-alt"></i></span>
          <span className="comments_title"> {this.props.commentsLength} comments</span>
          <hr className="comments_hr">
          </hr>
          {commentNodes}
        </div>
      </div>
    );
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div className='comment'>

        <li className="comment_container">
          <img src={this.props.user_icon} className="comment_profile_pic"></img>
          <div className="comment_content">
            <span className="comment_username">{this.props.author}</span>
            <span className="comment_at"> at </span>
            <span className="comment_timestamp">{convertTimestamp(this.props.audio_position)}</span>
            <span className="comment_postedAt">{moment(this.props.posted_at).fromNow()}</span>
            <div className="comment_text_container">
              <p className="comment_text">{this.props.text}</p>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

class CommentModule extends React.Component {
  constructor(props) {
    super();
    this.state = {
      songId: (window.location.href.split("/").pop() || 1),
      comments : [{
        _id: '5e3d0371163ea548f848eab1', comment_id: 34, song_id: 21, user_id: 81, user_name: 'Claudine_Leuschke', user_icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/webtanya/128.jpg', message: 'sensor project hack Customer Illinois neutral digital Barbados Dollar architectures Concrete Berkshire transmit Idaho Dalasi Customizable cross-platform South Dakota SCSI', audio_position: 105, posted_at: 1581024234969, __v: 0}]
    };
  }

  componentDidMount() {
      console.log(this.state.songId);
      axios.get(API_URL + 'comment/' + this.state.songId)
        .then((response) => {
          console.log('successfully recieved comments for song' , response);
          this.setState({
            comments : response.data,
          });
        })
        .catch((error) => {
          console.log('Something went wrong when retrieving comments' , error);
        });

  }



  render() {
    return (
      <div className='comment-box'>
        <CommentList comments={this.state.comments} commentsLength={this.state.comments.length} />
      </div>
    );
  }
}

export default CommentModule;