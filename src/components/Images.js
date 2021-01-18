import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Popup from './Popup';

class Images extends Component {

  state = {
      imageUrl: '',
      imgUrlArray: [
        'https://cdn.pixabay.com/photo/2019/11/20/11/15/knitting-4639828__340.jpg',
        'https://images.unsplash.com/photo-1602773984044-3ecbed81556d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGx1c2glMjB3b29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1602685365252-c13f549f1f5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzY5fHx3b29sfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://cdn.pixabay.com/photo/2018/01/30/12/04/fabric-3118624__340.jpg',
        'https://cdn.pixabay.com/photo/2018/01/12/13/51/red-3078278__340.jpg',
        'https://cdn.pixabay.com/photo/2015/07/31/15/02/knit-869221__340.jpg',
        'https://images.unsplash.com/photo-1543334270-24bb46642afe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTh8fHdvb2x8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://cdn.pixabay.com/photo/2015/03/24/19/51/teddy-bear-688091__340.jpg',
        'https://cdn.pixabay.com/photo/2016/01/20/11/25/wool-1151381__340.jpg',
      ],
      showModal: false,
      popImageUrl: '',
    };

  imageSubmitter = (e) => {
    e.preventDefault();
    const imageUrlsArray = this.state.imgUrlArray;
    imageUrlsArray.push(this.state.imageUrl)
      this.setState({
        imageUrlsArray: imageUrlsArray
      });
  }

  handleLinkChange = (e) => {
    e.preventDefault();
    this.setState({
      imageUrl: e.target.value
    });
  }

  handlePopup = (url) => {
    this.setState({
      showModal: !this.state.showModal,
      popImageUrl: url
    });
  }

  render() {
    const imageUrlArray = this.state.imgUrlArray;
    const images = imageUrlArray.map((url, index) => {
      return(
        <img
        key={index}
        className='singleImage'
        src={url}
        alt="image"
        onClick={() => this.handlePopup(url)}/>
      );
    })
    // console.log(images);
    return(
      <React.Fragment>
        {
          // Formulaire pour injecter une image url
        //<form onSubmit={this.imageSubmitter}>
        //   <input
        //   type="text"
        //   placeholder="Please insert image url"
        //   onChange={this.handleLinkChange}
        //   />
        //   <button type="submit" className="submitButton">Submit Image</button>
        // </form>
      }
        <h2>Notre savoir-faire</h2>
          <div className="Images">
            {images}
            {this.state.showModal ? (<Popup popImageUrl={this.state.popImageUrl} closePopup={this.handlePopup}/>) : null}
          </div>
      </React.Fragment>
    );
  }
}
export default Images;
