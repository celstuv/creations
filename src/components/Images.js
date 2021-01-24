import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Popup from './Popup';

class Images extends Component {

  state = {
      imageUrl: '',
      imgUrlArray: [
        'https://cdn.pixabay.com/photo/2019/11/20/11/15/knitting-4639828__340.jpg',
        'https://cdn.pixabay.com/photo/2015/07/31/15/02/knit-869221__340.jpg',
        'https://cdn.pixabay.com/photo/2017/08/01/16/44/mannequin-2566559_960_720.jpg',
        'https://t4.ftcdn.net/jpg/02/74/46/23/240_F_274462333_gVLui1QvrjWz5DIq25KBk10Wi9neJlsp.jpg',
        'https://cdn.pixabay.com/photo/2018/01/30/12/04/fabric-3118624__340.jpg',
        'https://cdn.pixabay.com/photo/2018/01/12/13/51/red-3078278__340.jpg',
        'https://t3.ftcdn.net/jpg/00/57/19/04/240_F_57190424_x14VFMjorZ1IhGQR9RFoZ7CIG0684zXr.jpg',
        'https://t4.ftcdn.net/jpg/02/95/85/55/240_F_295855555_JAsR8cyJm6l86kn7VaPSkmpluX92X1rh.jpg',
        'https://as1.ftcdn.net/jpg/02/23/04/14/500_F_223041476_GIg4B5iQtXD8FgZHHCpCcuDYaQ8rMzHT.jpg',
      ],
      showModal: false,
      popImageUrl: '',
    };

  // imageSubmitter = (e) => {
  //   e.preventDefault();
  //   const imageUrlsArray = this.state.imgUrlArray;
  //   imageUrlsArray.push(this.state.imageUrl)
  //     this.setState({
  //       imageUrlsArray: imageUrlsArray
  //     });
  // }
  //
  // handleLinkChange = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     imageUrl: e.target.value
  //   });
  // }

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
          <div className="Images">
            {images}
            {this.state.showModal ? (<Popup popImageUrl={this.state.popImageUrl} closePopup={this.handlePopup}/>) : null}
          </div>
      </React.Fragment>
    );
  }
}
export default Images;
