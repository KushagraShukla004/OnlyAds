import React from "react";
import ImageUploader from "react-images-upload";

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  render() {
    return (
      <div>
        <ImageUploader
          withIcon={true}
          buttonText="Choose files"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".pdf", ".png", ".gif", ".ico"]}
          maxFileSize={52428800}
          withPreview={true}
        />
      </div>
    );
  }
}

export default Design;
