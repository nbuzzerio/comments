// eslint-disable-next-line max-classes-per-file
import React from 'react';
// import axios from 'axios';
import moment from 'moment';

const comments = [{
  _id: '5e3d0371163ea548f848eab1', comment_id: 34, song_id: 21, user_id: 81, user_name: 'Claudine_Leuschke', user_icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/webtanya/128.jpg', message: 'sensor project hack Customer Illinois neutral digital Barbados Dollar architectures Concrete Berkshire transmit Idaho Dalasi Customizable cross-platform South Dakota SCSI', audio_position: 105, posted_at: 1581024234969, __v: 0,
}, {
  _id: '5e3d0371163ea548f848eb06', comment_id: 119, song_id: 21, user_id: 71, user_name: 'Florine94', user_icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/herkulano/128.jpg', message: 'platforms Cross-platform optimizing Honduras input Denar black experiences Awesome Rubber Bacon payment Optional Bedfordshire Money Market Account Frozen plum navigating Point Specialist Savings Account EXE PNG Rial Omani hack Gorgeous Operations Mozambique', audio_position: 19, posted_at: 1581048919038, __v: 0,
}, {
  _id: '5e3d0372163ea548f848ebd8', comment_id: 329, song_id: 21, user_id: 46, user_name: 'Favian_Ondricka', user_icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/lingeswaran/128.jpg', message: 'Practical Plastic Chair auxiliary virtual Kids Chair FTP Rand Tools Granite Slovakia (Slovak Republic) Rubber bypass cultivate', audio_position: 98, posted_at: 1580976585257, __v: 0,
}, {
  _id: '5e3d0372163ea548f848ebee', comment_id: 351, song_id: 21, user_id: 52, user_name: 'Kyleigh97', user_icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/dnirmal/128.jpg', message: 'Fantastic fault-tolerant contextually-based Clothing deposit portals', audio_position: 31, posted_at: 1581047676062, __v: 0,
}];

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
            <span className="comment_timestamp">{this.props.audio_position}</span>
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
      comments,
      commentsLength: comments.length,
    };
  }

  render() {
    return (
      <div className='comment-box'>
        <CommentList comments={this.state.comments} commentsLength={this.state.commentsLength} />
      </div>
    );
  }
}

export default CommentModule;