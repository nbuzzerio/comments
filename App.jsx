import React from 'react';
import axios from 'axios';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [{ "_id": "5e3a3d19ced3f726582ce410", "comment_id": 47, "song_id": 21, "user_id": 37, "user_icon": "https://s3.amazonaws.com/uifaces/faces/twitter/teddyzetterlund/128.jpg", "message": "Kentucky radical Handmade Granite Shoes PCI Central Steel Savings Account Total", "audio_position": 101, "__v": 0 }, { "_id": "5e3a3d19ced3f726582ce45a", "comment_id": 121, "song_id": 21, "user_id": 95, "user_icon": "https://s3.amazonaws.com/uifaces/faces/twitter/herrhaase/128.jpg", "message": "Director Soft transform", "audio_position": 107, "__v": 0 }, { "_id": "5e3a3d19ced3f726582ce473", "comment_id": 146, "song_id": 21, "user_id": 58, "user_icon": "https://s3.amazonaws.com/uifaces/faces/twitter/adityasutomo/128.jpg", "message": "Trafficway panel synergies workforce transmit tertiary Indian Rupee Illinois Euro system auxiliary Versatile Synchronised Small Internal Texas Rubber Shirt Bedfordshire reinvent Refined Metal Chips Wooden withdrawal optical", "audio_position": 19, "__v": 0 }, { "_id": "5e3a3d19ced3f726582ce491", "comment_id": 176, "song_id": 21, "user_id": 51, "user_icon": "https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg", "message": "bandwidth Legacy connecting clear-thinking New York Shoals Fantastic Engineer e-business PCI open system EXE Berkshire Engineer Legacy invoice Unbranded Wooden Chair markets ADP architectures Markets virtual Bolivia Mountain encoding", "audio_position": 115, "__v": 0 }, { "_id": "5e3a3d19ced3f726582ce4fc", "comment_id": 283, "song_id": 21, "user_id": 100, "user_icon": "https://s3.amazonaws.com/uifaces/faces/twitter/chadami/128.jpg", "message": "intranet Paradigm Avon neural-net Planner SAS Analyst Jewelery magnetic e-markets Awesome Hills bypassing virtual Intelligent Plastic Bike ADP capacitor client-driven Granite", "audio_position": 17, "__v": 0 }, { "_id": "5e3a3d19ced3f726582ce52f", "comment_id": 334, "song_id": 21, "user_id": 43, "user_icon": "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg", "message": "Antigua and Barbuda Cuban Peso Peso Convertible Checking Account solutions synergize Refined Vista Court Practical Benin District Global Iranian Rial alliance empowering initiative", "audio_position": 30, "__v": 0 }],
    }
  }


  componentDidMount() {

    axios.get('http://localhost:8080/comments/1')
      .then((response) => {
        console.log('List of requested comments for song: ', response.data);
        const retrievedComments = response.data;
        this.setState({
          comments: retrievedComments,
        });
      })
  };

  // var formatComments = function() {
  //   console.log(props.comments);

  // }


  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div id="comments">
        <span class="comments_icon"><i class="fas fa-comment-alt"></i></span>
        <span class="comments_title">10 comments</span>
        <hr class="comments_hr">
        </hr>
        <ul id="comments_list">
          <li class="comment_container">
            <img src="images\tempProfilePic.png" class="comment_profile_pic"></img>
            <div class="comment_content">
              <span class="comment_username">USERNAME</span>
              <span class="comment_at"> at </span>
              <span class="comment_timestamp">1:23:</span>
              <span class="comment_postedAt">10 hours ago</span>
              <div class="comment_text_container">
                <p class="comment_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius tellus ligula, id feugiat sem
                  semper ac. Aenean sed condimentum lacus,  sit amet dictum nibh. Praesent a tincidunt dolor. Curabitur
                  condimentum tincidunt nulla id laoreet. Quisque at auctor elit. Fusce tincidunt quam id urna pharetra
                gravida. </p>
              </div>
            </div>
          </li>
          <li class="comment_container_reply">
            <img src="images\tempProfilePic.png" class="comment_profile_pic"></img>
            <div class="comment_content">
              <span class="comment_username">USERNAME</span>
              <span class="comment_at"> at </span>
              <span class="comment_timestamp">1:23:</span>
              <span class="comment_postedAt">10 hours ago</span>
              <div class="comment_text_container">
                <p class="comment_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius tellus ligula, id feugiat sem
                semper ac. </p>
              </div>
            </div>
          </li>
          <li class="comment_container">
            <img src="images\tempProfilePic.png" class="comment_profile_pic"></img>
            <div class="comment_content">
              <span class="comment_username">USERNAME</span>
              <span class="comment_at"> at </span>
              <span class="comment_timestamp">1:23:</span>
              <span class="comment_postedAt">10 hours ago</span>
              <div class="comment_text_container">
                <p class="comment_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius tellus ligula, id feugiat sem
                semper ac. Aenean sed condimentum lacus, sit amet dictum nibh.  </p>
              </div>
            </div>
          </li>
          <li class="comment_container">
            <img src="images\tempProfilePic.png" class="comment_profile_pic"></img>
            <div class="comment_content">
              <span class="comment_username">USERNAME</span>
              <span class="comment_at"> at </span>
              <span class="comment_timestamp">1:23:</span>
              <span class="comment_postedAt">10 hours ago</span>
              <div class="comment_text_container">
                <p class="comment_text">Lorem ipsum dolor sit amet. </p>
              </div>
            </div>
          </li>
          <li class="comment_container">
            <img src="images\tempProfilePic.png" class="comment_profile_pic"></img>
            <div class="comment_content">
              <span class="comment_username">USERNAME</span>
              <span class="comment_at"> at </span>
              <span class="comment_timestamp">1:23:</span>
              <span class="comment_postedAt">10 hours ago</span>
              <div class="comment_text_container">
                <p class="comment_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius tellus ligula, id feugiat sem
                semper ac. Aenean sed condimentum lacus,  sit amet dictum nibh.  </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default Comments;